(ns smerf.backend.tracer-test
  (:require [clojure.test :refer [deftest is testing]]
            [smerf.backend.transport :as backend-transport]
            [smerf.domain.responses :as responses]
            [smerf.domain.tracing :as tracing]
            [smerf.fixtures.tracer :as fixture]
            [smerf.frontend.intents.dispatcher :as dispatcher]
            [smerf.frontend.transport :as frontend-transport]))

(deftest tracer-acceptance
  (let [transport (frontend-transport/codec-transport
                   backend-transport/request)
        result (dispatcher/dispatch transport fixture/envelope)]
    (is (responses/remote-result? result))
    (is (= :remote/accepted (:result/type result)))
    (is (= fixture/ids
           (select-keys result
                        [:command/id :correlation/id :causation/id])))
    (is (= "foundation tracer"
           (get-in result [:result/value :tracer/echo])))
    (is (= [:frontend/intent-dispatch
            :transport/request
            :backend/ingress
            :backend/direct-response]
           (tracing/stage-names result)))
    (testing "every stage includes a non-negative duration"
      (is (every? #(<= 0 (:stage/duration-micros %))
                  (:trace/stages result))))))
