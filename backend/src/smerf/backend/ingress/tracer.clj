(ns smerf.backend.ingress.tracer
  (:require [smerf.domain.intents :as intents]
            [smerf.domain.responses :as responses]
            [smerf.domain.tracing :as tracing]))

(defn handle
  [envelope]
  (let [received (tracing/append-stage envelope :backend/ingress 0)]
    (if (intents/valid-envelope? received)
      (responses/accepted
       received
       {:tracer/echo (get-in received
                             [:envelope/intent :intent/payload :tracer/message])}
       (conj (:trace/stages received)
             (tracing/stage :backend/direct-response 0)))
      (responses/rejected
       received
       (responses/structured-error
        :validation/invalid-envelope
        "The tracer envelope is malformed.")
       (conj (:trace/stages received)
             (tracing/stage :backend/direct-response 0))))))
