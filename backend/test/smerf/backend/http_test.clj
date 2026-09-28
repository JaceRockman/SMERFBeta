(ns smerf.backend.http-test
  (:require [clojure.test :refer [deftest is testing]]
            [smerf.backend.db.datomic :as datomic]
            [smerf.backend.http :as http]
            [smerf.backend.intents.handler :as intents-handler]
            [smerf.domain.codec :as codec]
            [smerf.fixtures.contract :as fixtures]))

(defn- recording-backend
  [calls]
  {:calls calls})

(defn- record-create
  [backend character]
  (swap! (:calls backend) conj [:create character])
  character)

(defn- record-notes
  [backend character-id notes]
  (swap! (:calls backend) conj [:notes character-id notes])
  {:character/id character-id
   :character/notes notes})

(defn- record-wounds
  [backend character-id wounds]
  (swap! (:calls backend) conj [:wounds character-id wounds])
  {:character/id character-id
   :character/wounds wounds})

(defn- record-roll
  [backend character-id action-id]
  (swap! (:calls backend) conj [:roll character-id action-id])
  {:roll/action-id action-id
   :roll/dice [3 4]
   :roll/total 7
   :roll/outcome :success})

(defn- body-stream
  [value]
  (java.io.ByteArrayInputStream.
   (.getBytes (codec/encode value) java.nio.charset.StandardCharsets/UTF_8)))

(deftest intent-handler-dispatches-to-datomic
  (with-redefs [datomic/create-character! record-create
                datomic/update-character-notes! record-notes
                datomic/update-character-wounds! record-wounds
                datomic/transact-roll! record-roll]
    (let [calls (atom [])
          handler (intents-handler/handler
                   (recording-backend calls)
                   #(java.util.UUID/fromString
                     "44444444-4444-4444-8444-444444444444"))
          result (handler fixtures/envelope)]
      (is (= :remote/accepted (:result/type result)))
      (is (= [[:notes fixtures/character-id "Aria's notes"]]
             @calls)))

    (testing "invalid intents are rejected without calling Datomic"
      (let [calls (atom [])
            handler (intents-handler/handler (recording-backend calls))
            envelope (assoc-in fixtures/envelope
                               [:envelope/intent :intent/payload]
                               {})]
        (is (= :remote/rejected (:result/type (handler envelope))))
        (is (empty? @calls))))))

(deftest ring-handler-serves-intents-and-reserves-sync-routes
  (with-redefs [datomic/create-character! record-create
                datomic/update-character-notes! record-notes
                datomic/update-character-wounds! record-wounds
                datomic/transact-roll! record-roll]
    (let [calls (atom [])
          handler (intents-handler/handler (recording-backend calls))
          app (http/app handler)
          intent-response
          (app {:request-method :post
                :uri "/api/intents"
                :body (body-stream fixtures/envelope)})
          result (codec/decode (:body intent-response))]
      (is (= 200 (:status intent-response)))
      (is (= :remote/accepted (:result/type result)))
      (is (= fixtures/correlation-id (:correlation/id result)))

      (doseq [uri ["/api/sync/snapshot"
                   "/api/sync/delta"]]
        (let [sync-response (app {:request-method :get :uri uri})]
          (is (= 501 (:status sync-response)))
          (is (= :sync/not-configured
                 (:error/type (codec/decode (:body sync-response)))))))

      (testing "invalid tagged JSON is a client error"
        (is (= 400
               (:status
                (app {:request-method :post
                      :uri "/api/intents"
                      :body (java.io.ByteArrayInputStream.
                             (.getBytes
                              "{bad json"
                              java.nio.charset.StandardCharsets/UTF_8))}))))))))
