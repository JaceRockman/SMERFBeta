(ns smerf.backend.intents.handler
  (:require [smerf.backend.db.datomic :as datomic]
            [smerf.domain.intents :as intents]
            [smerf.domain.responses :as responses]))

(defn- reject
  [envelope type message details]
  (responses/rejected
   envelope
   (responses/structured-error type message details)))

(defn- dispatch
  [backend id-generator envelope]
  ;; As intent families grow, move their implementations into focused
  ;; namespaces and replace this case with a small handler registry. Keep
  ;; envelope validation and accepted/rejected result wrapping at this seam.
  (let [{:keys [intent/type intent/payload]}
        (:envelope/intent envelope)]
    (case type
      :character/create
      (responses/accepted
       envelope
       (datomic/create-character!
        backend
        {:character/id (str (id-generator))
         :character/campaign-id (:character/campaign-id payload)
         :character/ruleset-id (:character/ruleset-id payload)
         :character/name (:character/name payload)
         :character/notes ""
         :character/wounds 0}))

      :character/update-notes
      (responses/accepted
       envelope
       (datomic/update-character-notes!
        backend
        (:character/id payload)
        (:character/notes payload)))

      :character/update-wounds
      (responses/accepted
       envelope
       (datomic/update-character-wounds!
        backend
        (:character/id payload)
        (:character/wounds payload)))

      :character/roll
      (responses/accepted
       envelope
       (datomic/transact-roll!
        backend
        (:character/id payload)
        (:action/id payload))))))

(defn handle
  [backend id-generator envelope]
  (if-not (intents/valid-envelope? envelope)
    (reject envelope
            :validation/invalid-request
            "The intent envelope is invalid."
            nil)
    (try
      (dispatch backend id-generator envelope)
      (catch clojure.lang.ExceptionInfo error
        (let [data (ex-data error)]
          (reject envelope
                  (or (:error/type data) :backend/operation-failed)
                  (ex-message error)
                  (not-empty (dissoc data :error/type))))))))

(defn handler
  ([backend]
   (handler backend random-uuid))
  ([backend id-generator]
   (partial handle backend id-generator)))
