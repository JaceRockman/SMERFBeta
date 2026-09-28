(ns smerf.backend.http
  (:require [clojure.string :as str]
            [smerf.backend.sync.source :as sync-source]
            [smerf.domain.codec :as codec]))

(def tagged-json-content-type
  "application/json; charset=utf-8")

(defn- response
  [status value]
  {:status status
   :headers {"content-type" tagged-json-content-type}
   :body (codec/encode value)})

(defn- error-response
  [status type message]
  (response status
            {:error/type type
             :error/message message}))

(defn- intent-response
  [intent-handler request]
  (let [decoded
        (try
          {:envelope (codec/decode (slurp (:body request)))}
          (catch Exception _
            {:error
             (error-response
              400
              :http/invalid-body
              "The request body is not valid tagged JSON.")}))]
    (if-let [error (:error decoded)]
      error
      (let [result (intent-handler (:envelope decoded))]
        (response (if (= :remote/accepted (:result/type result))
                    200
                    422)
                  result)))))

(defn- query-parameter
  [request parameter]
  (some (fn [part]
          (let [[key value] (str/split part #"=" 2)]
            (when (= parameter key)
              value)))
        (str/split (or (:query-string request) "") #"&")))

(defn- sync-response
  [backend request]
  (try
    (let [from-t (some-> (query-parameter request "from-t")
                         parse-long)
          value (if (some? from-t)
                  (sync-source/deltas-after backend from-t)
                  {:sync/type :resync-required
                   :sync/reason :sync/missing-cursor})]
      (response 200 value))
    (catch clojure.lang.ExceptionInfo error
      (response 200
                {:sync/type :resync-required
                 :sync/reason (or (:error/type (ex-data error))
                                  :sync/invalid-cursor)}))))

(defn app
  ([intent-handler]
   (app nil intent-handler))
  ([backend intent-handler]
   (fn [{:keys [request-method uri] :as request}]
     (cond
       (and (= :post request-method)
            (= "/api/intents" uri))
       (intent-response intent-handler request)

       (and backend
            (= :get request-method)
            (= "/api/sync/snapshot" uri))
       (response 200 (sync-source/snapshot backend))

       (and backend
            (= :get request-method)
            (= "/api/sync/delta" uri))
       (sync-response backend request)

       (and (nil? backend)
            (= :get request-method)
            (contains? #{"/api/sync/snapshot" "/api/sync/delta"} uri))
       (error-response
        501
        :sync/not-configured
        "Synchronization is not configured.")

       :else
       (error-response 404 :http/not-found "Route not found.")))))
