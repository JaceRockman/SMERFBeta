(ns smerf.test-runner
  (:require [clojure.test :as test]
            [smerf.backend.datomic-test]
            [smerf.backend.http-test]
            [smerf.backend.sync-test]
            [smerf.domain.contract-test]
            [smerf.frontend.sync-test]))

(defn -main
  [& _]
  (let [result (test/run-tests 'smerf.domain.contract-test
                               'smerf.backend.datomic-test
                               'smerf.backend.http-test
                               'smerf.backend.sync-test
                               'smerf.frontend.sync-test)]
    (when (pos? (+ (:fail result) (:error result)))
      (System/exit 1))))
