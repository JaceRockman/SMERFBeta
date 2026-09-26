(ns smerf.frontend.transport
  (:require [smerf.domain.codec :as codec]
            [smerf.domain.tracing :as tracing]))

(defn codec-transport
  "Creates the foundation transport boundary.

  The injected request function receives and returns encoded strings, so even
  the in-process acceptance path exercises the production codec seam."
  [request]
  {:remote/send
   (fn [envelope]
     (-> envelope
         (tracing/append-stage :transport/request 0)
         codec/encode
         request
         codec/decode))})
