(ns smerf.frontend.intents.dispatcher
  (:require [smerf.domain.intents :as intents]
            [smerf.domain.responses :as responses]
            [smerf.domain.tracing :as tracing]))

(defn dispatch
  [{:keys [remote/send]} envelope]
  (if (and (fn? send) (intents/valid-envelope? envelope))
    (let [result (send (tracing/append-stage
                        envelope :frontend/intent-dispatch 0))]
      (if (responses/remote-result? result)
        result
        (throw (ex-info "Remote transport returned an invalid result"
                        {:error/type :transport/invalid-result}))))
    (throw (ex-info "Dispatcher received an invalid request"
                    {:error/type :dispatch/invalid-request}))))
