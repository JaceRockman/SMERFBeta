(ns smerf.domain.contract-test
  (:require #?(:cljd [cljd.test :refer [deftest is testing]]
               :clj [clojure.test :refer [deftest is testing]])
            [smerf.domain.codec :as codec]
            [smerf.domain.identifiers :as identifiers]
            [smerf.domain.intents :as intents]
            [smerf.domain.responses :as responses]
            [smerf.domain.schema :as schema]
            [smerf.domain.sync :as sync]
            [smerf.fixtures.contract :as fixture]))

(defn error-type
  [thunk]
  (try
    (thunk)
    nil
    (catch #?(:cljd Object :clj Exception) error
      (:error/type (ex-data error)))))

(deftest canonical-identifiers
  (is (identifiers/canonical-uuid? fixture/correlation-id))
  (is (not (identifiers/canonical-uuid?
            "AAAAAAAA-AAAA-4AAA-8AAA-AAAAAAAAAAAA")))
  (is (not (identifiers/canonical-uuid? "not-an-id"))))

(deftest representative-values-round-trip
  (is (= fixture/representative-values
         (-> fixture/representative-values codec/encode codec/decode))))

(deftest intent-round-trip
  (let [decoded (-> fixture/envelope codec/encode codec/decode)]
    (is (= fixture/envelope decoded))
    (is (intents/valid-envelope? decoded))))

(deftest shared-logical-schema
  (is (schema/valid-schema?))
  (is (= schema/attributes
         (-> schema/attributes codec/encode codec/decode)))
  (is (schema/synchronized-attribute?
       :entity/character
       :character/notes))
  (is (schema/reference-attribute? :character/campaign))
  (is (not (schema/synchronized-attribute?
            :entity/campaign
            :character/notes))))

(deftest supported-intents
  (doseq [[intent-type payload]
          {:character/create
           {:character/campaign-id "aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa"
            :character/name "Aria"
            :character/ruleset-id "bbbbbbbb-bbbb-4bbb-8bbb-bbbbbbbbbbbb"}
           :character/update-notes
           {:character/id "aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa"
            :character/notes "Notes"}
           :character/update-wounds
           {:character/id "aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa"
            :character/wounds 1}
           :character/roll
           {:character/id "aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa"
            :action/id "bbbbbbbb-bbbb-4bbb-8bbb-bbbbbbbbbbbb"}}]
    (is (intents/valid-intent?
         (intents/ui-intent intent-type payload))))
  (is (not (intents/supported-intent-type? :system/unknown)))
  (is (not (intents/valid-intent?
            (intents/ui-intent :system/unknown {}))))
  (is (not (intents/valid-intent?
            (intents/ui-intent
             :character/update-notes
             {:character/id "aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa"
              :character/notes "Notes"
              :character/extra true})))))

(deftest result-contracts
  (let [roll (responses/roll-result
              "aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa"
              [4 2]
              6
              :success)
        accepted (responses/accepted fixture/envelope roll)
        rejected (responses/rejected
                  fixture/envelope
                  (responses/structured-error
                   :validation/invalid-request
                   "Invalid request."))]
    (is (responses/remote-result? accepted))
    (is (= :remote/accepted (:result/type accepted)))
    (is (responses/roll-result? (:result/value accepted)))
    (is (= roll
           (-> roll codec/encode codec/decode)))
    (is (responses/remote-result? rejected))
    (is (= :remote/rejected (:result/type rejected)))
    (is (= rejected
           (-> rejected codec/encode codec/decode)))))

(deftest shared-mvp-fixtures
  (is (sync/snapshot? fixture/snapshot))
  (is (sync/delta? fixture/delta))
  (is (every? sync/fact? fixture/campaign-facts))
  (is (every? sync/fact? fixture/character-update-additions))
  (is (every? sync/fact? fixture/character-update-retractions))
  (is (every? intents/valid-intent? fixture/intents))
  (is (responses/remote-result? fixture/accepted-result))
  (is (responses/remote-result? fixture/rejected-result))
  (is (= fixture/snapshot
         (-> fixture/snapshot codec/encode codec/decode)))
  (is (= fixture/delta
         (-> fixture/delta codec/encode codec/decode)))
  (is (= fixture/accepted-result
         (-> fixture/accepted-result codec/encode codec/decode)))
  (is (= fixture/rejected-result
         (-> fixture/rejected-result codec/encode codec/decode))))

(deftest logical-facts
  (let [subject "aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa"
        reference "bbbbbbbb-bbbb-4bbb-8bbb-bbbbbbbbbbbb"
        scalar (sync/scalar-fact
                :add
                :entity/character
                subject
                :character/name
                "Aria")
        ref (sync/reference-fact
             :retract
             :entity/character
             subject
             :character/campaign
             reference)]
    (is (sync/fact? scalar))
    (is (sync/fact? ref))
    (is (= scalar
           (-> scalar codec/encode codec/decode)))
    (is (= ref
           (-> ref codec/encode codec/decode)))
    (is (not (sync/fact? (assoc scalar :fact/ref reference))))
    (is (not (sync/fact? (assoc scalar :fact/value {:nested true}))))
    (is (not (sync/fact? (assoc scalar :fact/subject "not-an-id"))))
    (is (not (sync/fact? (assoc scalar
                                :fact/attribute
                                :campaign/name))))
    (is (not (sync/fact? (assoc scalar
                                :fact/attribute
                                :character/campaign))))))

(deftest snapshot-and-delta-shapes
  (let [facts [(sync/scalar-fact
                :add
                :entity/character
                "aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa"
                :character/name
                "Aria")]
        snapshot (sync/snapshot 10 facts)
        delta (sync/delta 10 12 facts [])]
    (is (sync/snapshot? snapshot))
    (is (= snapshot
           (-> snapshot codec/encode codec/decode)))
    (is (sync/delta? delta))
    (is (= delta
           (-> delta codec/encode codec/decode)))))

(deftest malformed-codec-cases
  (testing "unknown tags are rejected"
    (is (= :codec/unknown-tag
           (error-type #(codec/decode
                         "{\"payload\":{\"$type\":\"future\"}}")))))
  (testing "tagged collections require their payload"
    (is (= :codec/malformed-value
           (error-type #(codec/decode
                         "{\"payload\":{\"$type\":\"vector\"}}"))))
    (is (= :codec/malformed-value
           (error-type #(codec/decode
                         "{\"payload\":{\"$type\":\"map\",\"entries\":[1]}}"))))))

(deftest numeric-codec-cases
  (testing "ratios are not silently converted to doubles on the JVM"
    #?(:clj
       (is (= :codec/unsupported-number
              (error-type #(codec/encode 1/3))))))
  (testing "non-finite doubles are rejected"
    (is (= :codec/non-finite-number
           (error-type #(codec/encode ##NaN))))))
