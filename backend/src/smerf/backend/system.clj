(ns smerf.backend.system
  (:require [ring.adapter.jetty :as jetty]
            [smerf.backend.db.datomic :as datomic]
            [smerf.backend.http :as http]
            [smerf.backend.intents.handler :as intents-handler]))

(defn system
  ([]
   (system {}))
  ([{:keys [datomic]}]
   (let [backend (datomic/connect (or datomic {}))
         intent-handler (intents-handler/handler backend)]
     {:datomic backend
      :intent-handler intent-handler
      :http-handler (http/app intent-handler)})))

(defn -main
  [& _]
  (let [port (parse-long (or (System/getenv "PORT") "8080"))
        storage-dir (or (System/getenv "SMERF_DATOMIC_DIR")
                        ".smerf-datomic")
        components (system {:datomic {:storage-dir storage-dir}})]
    (println (str "SMERF backend listening on http://localhost:" port))
    (jetty/run-jetty (:http-handler components)
                     {:port port
                      :join? true})))
