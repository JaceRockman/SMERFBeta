(ns smerf.backend.system)

(defn system
  []
  {:backend/status :not-started})

(defn -main
  [& _]
  (println "SMERF backend composition root ready"))
