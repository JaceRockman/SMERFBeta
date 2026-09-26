(ns smerf.backend.system
  (:require [smerf.backend.ingress.tracer :as tracer]
            [smerf.backend.transport :as transport]))

(defn system
  []
  {:backend/handle-intent tracer/handle
   :backend/request transport/request})

(defn -main
  [& _]
  (println "SMERF backend composition root ready"))
