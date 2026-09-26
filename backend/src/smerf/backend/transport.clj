(ns smerf.backend.transport
  (:require [smerf.backend.ingress.tracer :as tracer]
            [smerf.domain.codec :as codec]))

(defn request
  [encoded-envelope]
  (-> encoded-envelope
      codec/decode
      tracer/handle
      codec/encode))
