(ns smerf.backend.http
  (:require [smerf.domain.codec :as codec]))

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

(defn app
  [intent-handler]
  (fn [{:keys [request-method uri] :as request}]
    (cond
      (and (= :post request-method)
           (= "/api/intents" uri))
      (intent-response intent-handler request)

      (and (= :get request-method)
           (contains? #{"/api/sync/snapshot" "/api/sync/delta"} uri))
      (error-response
       501
       :sync/not-implemented
       "Synchronization is reserved for MVP Slice 3.")

      :else
      (error-response 404 :http/not-found "Route not found."))))
