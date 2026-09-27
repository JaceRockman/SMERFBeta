(ns smerf.backend.transport
  (:require [smerf.domain.codec :as codec]))

(defn request
  [handler encoded-envelope]
  (-> encoded-envelope
      codec/decode
      handler
      codec/encode))
