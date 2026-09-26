(ns smerf.domain.contract-test
  (:require #?(:cljd [cljd.test :refer [deftest is testing]]
               :clj [clojure.test :refer [deftest is testing]])
            [smerf.domain.codec :as codec]
            [smerf.domain.identifiers :as identifiers]
            [smerf.domain.intents :as intents]
            [smerf.domain.registry :as registry]
            [smerf.fixtures.registry :as registry-fixture]
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

(deftest registry-descriptors-and-lookups
  (let [status (registry/enum-descriptor
                :character/status
                #{:active :retired}
                {:enum/labels {:active "Active"
                               :retired "Retired"}})
        name (registry/attribute-descriptor
              :character/name
              :entity/character
              :scalar/string
              :one
              {:attribute/required? true})
        character (registry/entity-descriptor
                   :entity/character
                   :entity/id
                   [:entity/id :character/name])
        schema (registry/registry character name status)]
    (is (= character (registry/find-entity schema :entity/character)))
    (is (= name (registry/find-attribute schema :character/name)))
    (is (= status (registry/find-enum schema :character/status)))
    (is (nil? (registry/find-entity schema :entity/missing)))
    (is (= #{:entity/id :character/name}
           (:entity/attributes
            (registry/find-entity schema :entity/character))))))

(deftest registry-vocabulary
  (testing "logical types"
    (is (registry/supported-logical-type? :scalar/string))
    (is (registry/supported-logical-type? :scalar/uuid-string))
    (is (not (registry/supported-logical-type? :scalar/unknown))))
  (testing "cardinalities"
    (is (registry/supported-cardinality? :one))
    (is (registry/supported-cardinality? :many))
    (is (not (registry/supported-cardinality? :some))))
  (testing "ownership zones"
    (is (registry/supported-ownership-zone? :shared))
    (is (registry/supported-ownership-zone? :backend))
    (is (registry/supported-ownership-zone? :local))
    (is (not (registry/supported-ownership-zone? :remote))))
  (testing "constraint forms"
    (is (registry/supported-constraint-form? :constraint/enum))
    (is (registry/supported-constraint-form? :constraint/non-negative))
    (is (not (registry/supported-constraint-form? :constraint/unknown)))))

(deftest registry-version-families
  (doseq [family [:codec/version
                  :protocol/version
                  :intent/version
                  :result/version
                  :projection/version
                  :storage/datomic-version
                  :storage/dartascript-version
                  :attribute/contract-version
                  :scope/version]]
    (testing (str "version family " family)
      (is (registry/supported-version-family? family))
      (is (= {:major 1 :minor 0}
             (registry/current-version family)))
      (is (= family
             (:version/family (registry/version-family family))))))
  (testing "Dartascript zones share one physical storage version"
    (let [metadata (registry/version-family :storage/dartascript-version)]
      (is (= :dartascript (:version/storage-kind metadata)))
      (is (= {:major 1 :minor 0}
             (get-in metadata [:version/zones :synchronized])))
      (is (= {:major 1 :minor 0}
             (get-in metadata [:version/zones :local])))))
  (is (not (registry/supported-version-family? :unknown/version)))
  (is (nil? (registry/version-family :unknown/version)))
  (is (nil? (registry/current-version :unknown/version))))

(deftest registry-validation
  (let [campaign-id
        (registry/attribute-descriptor
         :campaign/id
         :entity/campaign
         :scalar/uuid-string
         :one
         {:attribute/required? true
          :attribute/identity? true
          :attribute/unique? true
          :attribute/immutable? true
          :attribute/nullable? false})
        campaign-name
        (registry/attribute-descriptor
         :campaign/name
         :entity/campaign
         :scalar/string
         :one)
        character-id
        (registry/attribute-descriptor
         :character/id
         :entity/character
         :scalar/uuid-string
         :one
         {:attribute/required? true
          :attribute/identity? true
          :attribute/unique? true
          :attribute/immutable? true
          :attribute/nullable? false})
        character-campaign
        (registry/attribute-descriptor
         :character/campaign
         :entity/character
         :reference
         :one
         {:attribute/reference :entity/campaign
          :attribute/sync? true})
        campaign
        (registry/entity-descriptor
         :entity/campaign
         :campaign/id
         [:campaign/id :campaign/name])
        character
        (registry/entity-descriptor
         :entity/character
         :character/id
         [:character/id :character/campaign])
        schema
        (registry/registry
         campaign-id
         campaign-name
         character-id
         character-campaign
         campaign
         character)]
    (is (registry/valid-registry? schema))
    (is (= {:valid? true :errors [] :warnings []}
           (registry/validate-registry schema)))))

(deftest registry-validation-failures
  (let [identity-a
        (registry/attribute-descriptor
         :entity/id-a
         :entity/example
         :scalar/uuid-string
         :one
         {:attribute/identity? true})
        identity-b
        (registry/attribute-descriptor
         :entity/id-b
         :entity/example
         :scalar/uuid-string
         :one
         {:attribute/identity? true})
        invalid-reference
        (registry/attribute-descriptor
         :example/reference
         :entity/example
         :reference
         :one
         {:attribute/reference :entity/missing})
        invalid-type
        (registry/attribute-descriptor
         :example/invalid
         :entity/example
         :scalar/unknown
         :many)
        leaked
        (registry/attribute-descriptor
         :example/backend-only
         :entity/example
         :scalar/string
         :one
         {:attribute/ownership :backend
          :attribute/sync? true})
        example
        (registry/entity-descriptor
         :entity/example
         :entity/id-a
         [:entity/id-a
          :entity/id-b
          :example/reference
          :example/invalid
          :example/backend-only])
        schema
        (registry/registry
         identity-a
         identity-a
         identity-b
         invalid-reference
         invalid-type
         leaked
         example)
        errors (:errors (registry/validate-registry schema))
        codes (set (map :error/code errors))]
    (is (contains? codes :registry/duplicate-id))
    (is (contains? codes :registry/conflicting-identity))
    (is (contains? codes :registry/identity-not-required))
    (is (contains? codes :registry/identity-nullable))
    (is (contains? codes :registry/identity-not-unique))
    (is (contains? codes :registry/identity-mutable))
    (is (contains? codes :registry/unknown-reference-target))
    (is (contains? codes :registry/unsupported-logical-type))
    (is (contains? codes :registry/ownership-leak))
    (is (not (registry/valid-registry? schema)))))

(deftest registry-constraint-validation-and-warnings
  (let [unknown-constraint
        (assoc-in
         registry-fixture/registry
         [:registry/attributes :character/name :attribute/constraints]
         {:constraint/unknown true})
        unknown-enum
        (assoc-in
         registry-fixture/registry
         [:registry/attributes :character/status :attribute/constraints]
         {:constraint/enum :enum/missing})
        malformed-descriptor
        (registry/registry
         {:not-a :descriptor}
         "also-not-a-descriptor")
        unknown-constraint-result
        (registry/validate-registry unknown-constraint)
        unknown-enum-result
        (registry/validate-registry unknown-enum)
        warning-result
        (registry/validate-registry malformed-descriptor)]
    (is (contains?
         (set (map :error/code (:errors unknown-constraint-result)))
         :registry/unsupported-constraint-form))
    (is (contains?
         (set (map :error/code (:errors unknown-enum-result)))
         :registry/unknown-enum))
    (is (:valid? warning-result))
    (is (= 2 (count (:warnings warning-result))))
    (is (every? #(= :registry/unknown-descriptor
                    (:warning/code %))
                (:warnings warning-result)))))

(deftest representative-registry-fixture
  (is (registry/valid-registry? registry-fixture/registry))
  (is (= :scalar/uuid-string
         (:attribute/logical-type
          (registry/find-attribute
           registry-fixture/registry
           :character/id))))
  (is (= :enum/character-status
         (get-in
          (registry/find-attribute
           registry-fixture/registry
           :character/status)
          [:attribute/constraints :constraint/enum])))
  (let [campaign-reference
        (registry/find-attribute
         registry-fixture/registry
         :character/campaign)
        resource-references
        (registry/find-attribute
         registry-fixture/registry
         :character/resources)
        backend-only
        (registry/find-attribute
         registry-fixture/registry
         :character/backend-note)
        local-only
        (registry/find-attribute
         registry-fixture/registry
         :character/local-selection)]
    (is (= :reference (:attribute/logical-type campaign-reference)))
    (is (= :entity/campaign (:attribute/reference campaign-reference)))
    (is (= :many (:attribute/cardinality resource-references)))
    (is (= :entity/resource (:attribute/reference resource-references)))
    (is (= :backend (:attribute/ownership backend-only)))
    (is (not (:attribute/sync? backend-only)))
    (is (= :local (:attribute/ownership local-only)))
    (is (not (:attribute/sync? local-only)))))

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
