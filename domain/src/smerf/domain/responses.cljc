(ns smerf.domain.responses
  (:require [smerf.domain.identifiers :as identifiers]))

(defn structured-error
  ([type message]
   (structured-error type message nil))
  ([type message details]
   (cond-> {:error/type type
            :error/message message}
     (some? details) (assoc :error/details details))))

(defn accepted
  [envelope value]
  {:result/type :remote/accepted
   :correlation/id (:correlation/id envelope)
   :result/value value})

(defn rejected
  [envelope error]
  {:result/type :remote/rejected
   :correlation/id (:correlation/id envelope)
   :result/error error})

(defn roll-result
  [action-id dice total outcome]
  {:roll/action-id action-id
   :roll/dice dice
   :roll/total total
   :roll/outcome outcome})

(defn roll-result?
  [result]
  (and (map? result)
       (identifiers/canonical-uuid? (:roll/action-id result))
       (vector? (:roll/dice result))
       (every? integer? (:roll/dice result))
       (integer? (:roll/total result))
       (keyword? (:roll/outcome result))))

(defn remote-result?
  [result]
  (and (map? result)
       (contains? #{:remote/accepted :remote/rejected} (:result/type result))
       (or (and (= :remote/accepted (:result/type result))
                (contains? result :result/value))
           (and (= :remote/rejected (:result/type result))
                (map? (:result/error result))))
       (identifiers/correlation-id? (:correlation/id result))))
