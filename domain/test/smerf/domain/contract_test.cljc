(ns smerf.domain.contract-test
  (:require #?(:cljd [cljd.test :refer [deftest is testing]]
               :clj [clojure.test :refer [deftest is testing]])
            [smerf.domain.codec :as codec]
            [smerf.domain.identifiers :as identifiers]
            [smerf.domain.intents :as intents]
            [smerf.fixtures.tracer :as fixture]))

(defn error-type
  [thunk]
  (try
    (thunk)
    nil
    (catch #?(:cljd Object :clj Exception) error
      (:error/type (ex-data error)))))

(deftest canonical-identifiers
  (is (identifiers/canonical-uuid? (:command/id fixture/ids)))
  (is (not (identifiers/canonical-uuid?
            "AAAAAAAA-AAAA-4AAA-8AAA-AAAAAAAAAAAA")))
  (is (not (identifiers/canonical-uuid? "not-an-id"))))

(deftest representative-values-round-trip
  (is (= fixture/representative-values
         (-> fixture/representative-values codec/encode codec/decode))))

(deftest representative-values-wire-fixture
  (is (= fixture/representative-values-json
         (codec/encode fixture/representative-values))))

(deftest envelope-round-trip
  (let [decoded (-> fixture/envelope codec/encode codec/decode)]
    (is (= fixture/envelope decoded))
    (is (intents/valid-envelope? decoded))))

(deftest malformed-codec-cases
  (testing "unknown versions are rejected"
    (is (= :codec/unsupported-version
           (error-type #(codec/decode
                         "{\"codec-version\":99,\"payload\":null}")))))
  (testing "unknown tags are rejected"
    (is (= :codec/unknown-tag
           (error-type #(codec/decode
                         "{\"codec-version\":1,\"payload\":{\"$type\":\"future\"}}")))))
  (testing "tagged collections require their payload"
    (is (= :codec/malformed-value
           (error-type #(codec/decode
                         "{\"codec-version\":1,\"payload\":{\"$type\":\"vector\"}}"))))
    (is (= :codec/malformed-value
           (error-type #(codec/decode
                         "{\"codec-version\":1,\"payload\":{\"$type\":\"map\",\"entries\":[1]}}"))))))

(deftest numeric-codec-cases
  (testing "ratios are not silently converted to doubles on the JVM"
    #?(:clj
       (is (= :codec/unsupported-number
              (error-type #(codec/encode 1/3))))))
  (testing "non-finite doubles are rejected"
    (is (= :codec/non-finite-number
           (error-type #(codec/encode ##NaN))))))
