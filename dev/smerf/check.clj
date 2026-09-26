(ns smerf.check
  (:require [clojure.java.io :as io]
            [clojure.string :as str]))

(def source-extensions #{".clj" ".cljc" ".cljd"})

(def rules
  [{:root "domain/src"
    :forbidden ["smerf.backend" "smerf.frontend" "datomic."]}
   {:root "backend/src"
    :forbidden ["smerf.frontend"]}
   {:root "frontend/src"
    :forbidden ["smerf.backend" "datomic."]}])

(defn source-file?
  [file]
  (and (.isFile file)
       (some #(str/ends-with? (.getName file) %) source-extensions)))

(defn violations
  [{:keys [root forbidden]}]
  (for [file (filter source-file? (file-seq (io/file root)))
        token forbidden
        :when (str/includes? (slurp file) token)]
    {:file (str file) :forbidden token}))

(defn -main
  [& _]
  (let [found (mapcat violations rules)]
    (if (seq found)
      (do
        (doseq [violation found]
          (println "Dependency boundary violation:" violation))
        (System/exit 1))
      (println "Dependency boundaries are valid."))))
