(ns smerf.domain.responses
  (:require [smerf.domain.identifiers :as identifiers]))

(def protocol-version 1)

(defn structured-error
  ([type message]
   (structured-error type message nil))
  ([type message details]
   (cond-> {:error/version protocol-version
            :error/type type
            :error/message message}
     (some? details) (assoc :error/details details))))

(defn accepted
  [envelope value stages]
  {:result/version protocol-version
   :result/type :remote/accepted
   :command/id (:command/id envelope)
   :correlation/id (:correlation/id envelope)
   :causation/id (:causation/id envelope)
   :result/value value
   :trace/stages stages})

(defn rejected
  [envelope error stages]
  {:result/version protocol-version
   :result/type :remote/rejected
   :command/id (:command/id envelope)
   :correlation/id (:correlation/id envelope)
   :causation/id (:causation/id envelope)
   :result/error error
   :trace/stages stages})

(defn remote-result?
  [result]
  (and (= protocol-version (:result/version result))
       (contains? #{:remote/accepted :remote/rejected} (:result/type result))
       (identifiers/correlation-metadata? result)
       (vector? (:trace/stages result))))
