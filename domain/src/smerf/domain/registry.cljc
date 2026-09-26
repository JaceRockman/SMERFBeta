(ns smerf.domain.registry
  "Portable logical schema registry contracts.

   This namespace intentionally contains no database, transport, or runtime
   dependencies. Descriptor constructors, supported registry vocabulary, and
   pure lookup functions live here; value-level validation is added by the
   registry validation task.")

(def logical-types
  "Logical value types supported at the contract boundary."
  #{:scalar/integer
    :scalar/finite-double
    :scalar/boolean
    :scalar/string
    :scalar/keyword
    :scalar/uuid-string
    :reference
    :scalar/opaque})

(def cardinalities
  "Supported logical attribute cardinalities."
  #{:one :many})

(def ownership-zones
  "Ownership zones for logical attributes.

   Shared attributes may be synchronized when explicitly eligible. Backend
   and local attributes must remain in their owning runtime."
  #{:shared :backend :local})

(def constraint-forms
  "Supported keys in an attribute's constraint map.

   The registry validation task checks the value shape and compatibility of
   each form."
  #{:constraint/enum
    :constraint/min
    :constraint/max
    :constraint/min-length
    :constraint/max-length
    :constraint/pattern
    :constraint/non-negative})

(defn supported-logical-type?
  "Returns true when value is a supported logical type keyword."
  [value]
  (contains? logical-types value))

(defn supported-cardinality?
  "Returns true when value is a supported logical cardinality."
  [value]
  (contains? cardinalities value))

(defn supported-ownership-zone?
  "Returns true when value is a supported attribute ownership zone."
  [value]
  (contains? ownership-zones value))

(defn supported-constraint-form?
  "Returns true when value is a supported constraint-map key."
  [value]
  (contains? constraint-forms value))

(def version-family-metadata
  "Independent version metadata for portable contract families.

   `:version/wire` preserves the current integer representation used by the
   existing contracts. Major/minor metadata defines the compatibility policy
   that later negotiation and migration code will enforce."
  {:codec/version
   {:version/family              :codec/version
    :version/wire                1
    :version/current             {:major 1 :minor 0}
    :version/compatibility       :additive-minor
    :version/incompatible-action :reject}

   :protocol/version
   {:version/family              :protocol/version
    :version/wire                1
    :version/current             {:major 1 :minor 0}
    :version/compatibility       :additive-minor
    :version/incompatible-action :reject}

   :intent/version
   {:version/family              :intent/version
    :version/wire                1
    :version/current             {:major 1 :minor 0}
    :version/compatibility       :additive-minor
    :version/incompatible-action :reject}

   :result/version
   {:version/family              :result/version
    :version/wire                1
    :version/current             {:major 1 :minor 0}
    :version/compatibility       :additive-minor
    :version/incompatible-action :reject}

   :projection/version
   {:version/family              :projection/version
    :version/wire                1
    :version/current             {:major 1 :minor 0}
    :version/compatibility       :additive-minor
    :version/incompatible-action :snapshot}

   :storage/datomic-version
   {:version/family              :storage/datomic-version
    :version/storage-kind        :datomic
    :version/wire                1
    :version/current             {:major 1 :minor 0}
    :version/compatibility       :additive-minor
    :version/incompatible-action :migration}

   :storage/dartascript-version
   {:version/family              :storage/dartascript-version
    :version/storage-kind        :dartascript
    :version/wire                1
    :version/current             {:major 1 :minor 0}
    :version/zones               {:synchronized {:major 1 :minor 0}
                                  :local        {:major 1 :minor 0}}
    :version/compatibility       :additive-minor
    :version/incompatible-action :zone-migration}

   :attribute/contract-version
   {:version/family              :attribute/contract-version
    :version/wire                1
    :version/current             {:major 1 :minor 0}
    :version/compatibility       :additive-minor
    :version/incompatible-action :migration-or-snapshot}

   :scope/version
   {:version/family              :scope/version
    :version/wire                1
    :version/current             {:major 1 :minor 0}
    :version/compatibility       :additive-minor
    :version/incompatible-action :rotate-scope}})

(defn supported-version-family?
  "Returns true when value identifies a registered version family."
  [value]
  (contains? version-family-metadata value))

(defn version-family
  "Returns metadata for a version family, or nil when unknown."
  [family]
  (get version-family-metadata family))

(defn current-version
  "Returns the current major/minor version for a family, or nil when unknown."
  [family]
  (get-in version-family-metadata [family :version/current]))

(def empty-registry
  "An empty registry indexed by descriptor kind and stable logical ID."
  {:registry/entities   {}
   :registry/attributes {}
   :registry/enums      {}
   :registry/duplicates []
   :registry/unknown-descriptors []})

(defn entity-descriptor
  "Creates an entity descriptor.

   Validation of IDs, identity rules, and attribute compatibility belongs to
   the registry validation task. This constructor only establishes the
   portable descriptor shape."
  ([entity-id id-attribute attribute-ids]
   (entity-descriptor entity-id id-attribute attribute-ids {}))
  ([entity-id id-attribute attribute-ids options]
   (merge
    {:entity/id             entity-id
     :entity/id-attribute   id-attribute
     :entity/attributes     (set attribute-ids)
     :entity/tombstone?     true}
    options)))

(defn attribute-descriptor
  "Creates an attribute descriptor with portable defaults."
  ([attribute-id entity-id logical-type cardinality]
   (attribute-descriptor
    attribute-id entity-id logical-type cardinality {}))
  ([attribute-id entity-id logical-type cardinality options]
   (merge
    {:attribute/id                attribute-id
     :attribute/entity            entity-id
     :attribute/logical-type      logical-type
     :attribute/cardinality       cardinality
     :attribute/required?         false
     :attribute/identity?         false
     :attribute/unique?           false
     :attribute/immutable?        false
     :attribute/reference         nil
     :attribute/nullable?         true
     :attribute/deletion          :retain
     :attribute/sync?             false
     :attribute/ownership         :shared
     :attribute/constraints       {}
     :attribute/contract-version  1
     :attribute/evolution         {}}
    options)))

(defn enum-descriptor
  "Creates an enum descriptor.

   Enum values are stored as a set because membership, rather than display
   order, is the logical meaning. Display labels remain optional metadata."
  ([enum-id values]
   (enum-descriptor enum-id values {}))
  ([enum-id values options]
   (merge
    {:enum/id      enum-id
     :enum/values  (set values)
     :enum/labels  {}}
    options)))

(defn register-entity
  "Returns registry with an entity descriptor indexed by its logical ID."
  [registry descriptor]
  (let [entity-id (:entity/id descriptor)]
    (cond-> (assoc-in registry
                      [:registry/entities entity-id]
                      descriptor)
      (contains? (:registry/entities registry) entity-id)
      (update :registry/duplicates
              conj
              {:duplicate/kind :entity
               :duplicate/id entity-id}))))

(defn register-attribute
  "Returns registry with an attribute descriptor indexed by its logical ID."
  [registry descriptor]
  (let [attribute-id (:attribute/id descriptor)]
    (cond-> (assoc-in registry
                      [:registry/attributes attribute-id]
                      descriptor)
      (contains? (:registry/attributes registry) attribute-id)
      (update :registry/duplicates
              conj
              {:duplicate/kind :attribute
               :duplicate/id attribute-id}))))

(defn register-enum
  "Returns registry with an enum descriptor indexed by its logical ID."
  [registry descriptor]
  (let [enum-id (:enum/id descriptor)]
    (cond-> (assoc-in registry
                      [:registry/enums enum-id]
                      descriptor)
      (contains? (:registry/enums registry) enum-id)
      (update :registry/duplicates
              conj
              {:duplicate/kind :enum
               :duplicate/id enum-id}))))

(defn registry
  "Builds a registry from entity, attribute, and enum descriptors.

   Descriptor insertion is intentionally simple and pure. Duplicate descriptors
   are retained in registry diagnostics so the validation task can reject
   them instead of losing evidence to map replacement."
  [& descriptors]
  (reduce
   (fn [result descriptor]
     (cond
       (and (map? descriptor)
            (contains? descriptor :entity/id))
       (register-entity result descriptor)

       (and (map? descriptor)
            (contains? descriptor :attribute/id))
       (register-attribute result descriptor)

       (and (map? descriptor)
            (contains? descriptor :enum/id))
       (register-enum result descriptor)

       :else
       (update result
               :registry/unknown-descriptors
               conj
               descriptor)))
   empty-registry
   descriptors))

(declare find-entity find-attribute find-enum)

(defn- validation-error
  [code path value]
  {:error/code  code
   :error/path  path
   :error/value value})

(defn- descriptor-values
  [registry registry-key id-key]
  (->> (get registry registry-key)
       vals
       (sort-by #(str (get % id-key)))))

(defn- entity-attribute-ids
  [entity]
  (or (:entity/attributes entity) #{}))

(defn- attributes-for-entity
  [registry entity-id]
  (->> (descriptor-values
        registry
        :registry/attributes
        :attribute/id)
       (filter #(= entity-id (:attribute/entity %)))))

(defn- validate-entity
  [registry entity]
  (let [entity-id (:entity/id entity)
        entity-path [:registry/entities entity-id]
        declared-attribute-ids (entity-attribute-ids entity)
        declared-attributes
        (map #(find-attribute registry %)
             (sort-by str declared-attribute-ids))
        missing-attributes
        (keep-indexed
         (fn [index attribute]
           (when (nil? attribute)
             (validation-error
              :registry/unknown-attribute
              (conj entity-path :entity/attributes index)
              (nth (vec (sort-by str declared-attribute-ids)) index))))
         declared-attributes)
        identity-attributes
        (filter :attribute/identity?
                (attributes-for-entity registry entity-id))
        id-attribute-id (:entity/id-attribute entity)
        id-attribute (find-attribute registry id-attribute-id)
        identity-errors
        (cond-> []
          (empty? identity-attributes)
          (conj (validation-error
                 :registry/missing-identity
                 (conj entity-path :entity/id-attribute)
                 id-attribute-id))

          (> (count identity-attributes) 1)
          (conj (validation-error
                 :registry/conflicting-identity
                 (conj entity-path :entity/attributes)
                 (mapv :attribute/id identity-attributes)))

          (and id-attribute
               (not (:attribute/identity? id-attribute)))
          (conj (validation-error
                 :registry/identity-not-marked
                 (conj entity-path :entity/id-attribute)
                 id-attribute-id))

          (and id-attribute
               (not= entity-id (:attribute/entity id-attribute)))
          (conj (validation-error
                 :registry/identity-wrong-entity
                 (conj entity-path :entity/id-attribute)
                 id-attribute-id))

          (and id-attribute
               (not (contains? declared-attribute-ids id-attribute-id)))
          (conj (validation-error
                 :registry/identity-not-declared
                 (conj entity-path :entity/id-attribute)
                 id-attribute-id))

          (and (seq identity-attributes)
               (not= id-attribute-id
                     (:attribute/id (first identity-attributes))))
          (conj (validation-error
                 :registry/identity-mismatch
                 (conj entity-path :entity/id-attribute)
                 id-attribute-id))

          (and id-attribute
               (not= :scalar/uuid-string
                     (:attribute/logical-type id-attribute)))
          (conj (validation-error
                 :registry/identity-type
                 (conj entity-path :entity/id-attribute)
                 (:attribute/logical-type id-attribute)))

          (and id-attribute
               (not= :one (:attribute/cardinality id-attribute)))
          (conj (validation-error
                 :registry/identity-cardinality
                 (conj entity-path :entity/id-attribute)
                 (:attribute/cardinality id-attribute)))

          (and id-attribute
               (not (:attribute/required? id-attribute)))
          (conj (validation-error
                 :registry/identity-not-required
                 (conj entity-path :entity/id-attribute)
                 id-attribute-id))

          (and id-attribute
               (:attribute/nullable? id-attribute))
          (conj (validation-error
                 :registry/identity-nullable
                 (conj entity-path :entity/id-attribute)
                 id-attribute-id))

          (and id-attribute
               (not (:attribute/unique? id-attribute)))
          (conj (validation-error
                 :registry/identity-not-unique
                 (conj entity-path :entity/id-attribute)
                 id-attribute-id))

          (and id-attribute
               (not (:attribute/immutable? id-attribute)))
          (conj (validation-error
                 :registry/identity-mutable
                 (conj entity-path :entity/id-attribute)
                 id-attribute-id)))]
    (concat
     missing-attributes
     identity-errors)))

(defn- finite-number?
  [value]
  #?(:clj (and (number? value)
               (not (Double/isNaN (double value)))
               (not (Double/isInfinite (double value))))
     :cljd (and (number? value)
                (not (NaN? value))
                (not (infinite? value)))))

(defn- numeric-constraint-value?
  [logical-type value]
  (and (finite-number? value)
       (or (= logical-type :scalar/finite-double)
           (and (= logical-type :scalar/integer)
                (integer? value)))))

(defn- validate-constraints
  [registry attribute]
  (let [attribute-id (:attribute/id attribute)
        attribute-path [:registry/attributes attribute-id]
        logical-type (:attribute/logical-type attribute)
        constraints (:attribute/constraints attribute)]
    (if-not (map? constraints)
      [(validation-error
        :registry/invalid-constraints
        (conj attribute-path :attribute/constraints)
        constraints)]
      (let [constraint-errors
            (mapcat
             (fn [form]
               (let [value (get constraints form)
                     path (conj attribute-path :attribute/constraints form)]
                 (cond
                   (not (supported-constraint-form? form))
                   [(validation-error
                     :registry/unsupported-constraint-form
                     path
                     form)]

                   (= form :constraint/enum)
                   (cond
                     (not (keyword? value))
                     [(validation-error
                       :registry/invalid-enum-constraint
                       path
                       value)]

                     (nil? (find-enum registry value))
                     [(validation-error
                       :registry/unknown-enum
                       path
                       value)]

                     :else
                     [])

                   (#{:constraint/min :constraint/max} form)
                   (when-not
                    (numeric-constraint-value? logical-type value)
                     [(validation-error
                       :registry/invalid-numeric-constraint
                       path
                       value)])

                   (#{:constraint/min-length :constraint/max-length} form)
                   (when-not
                    (and (= logical-type :scalar/string)
                         (integer? value)
                         (not (neg? value)))
                     [(validation-error
                       :registry/invalid-length-constraint
                       path
                       value)])

                   (= form :constraint/pattern)
                   (when-not
                    (and (= logical-type :scalar/string)
                         (string? value))
                     [(validation-error
                       :registry/invalid-pattern-constraint
                       path
                       value)])

                   (= form :constraint/non-negative)
                   (when-not
                    (and (#{:scalar/integer :scalar/finite-double}
                          logical-type)
                         (= true value))
                     [(validation-error
                       :registry/invalid-non-negative-constraint
                       path
                       value)])

                   :else
                   [])))
             (sort-by str (keys constraints)))
            min-value (:constraint/min constraints)
            max-value (:constraint/max constraints)]
        (cond-> (vec constraint-errors)
          (and (contains? constraints :constraint/min)
               (contains? constraints :constraint/max)
               (numeric-constraint-value? logical-type min-value)
               (numeric-constraint-value? logical-type max-value)
               (> min-value max-value))
          (conj (validation-error
                 :registry/inverted-range
                 (conj attribute-path :attribute/constraints)
                 {:min min-value :max max-value})))))))

(defn- validate-attribute
  [registry attribute]
  (let [attribute-id (:attribute/id attribute)
        attribute-path [:registry/attributes attribute-id]
        entity-id (:attribute/entity attribute)
        entity (find-entity registry entity-id)
        logical-type (:attribute/logical-type attribute)
        cardinality (:attribute/cardinality attribute)
        ownership (:attribute/ownership attribute)
        reference (:attribute/reference attribute)]
    (concat
     (validate-constraints registry attribute)
     (when-not (find-entity registry entity-id)
       [(validation-error
         :registry/unknown-entity
         (conj attribute-path :attribute/entity)
         entity-id)])
     (when-not (supported-logical-type? logical-type)
       [(validation-error
         :registry/unsupported-logical-type
         (conj attribute-path :attribute/logical-type)
         logical-type)])
     (when-not (supported-cardinality? cardinality)
       [(validation-error
         :registry/unsupported-cardinality
         (conj attribute-path :attribute/cardinality)
         cardinality)])
     (when (and (:attribute/identity? attribute)
                (not= cardinality :one))
       [(validation-error
         :registry/identity-many
         (conj attribute-path :attribute/cardinality)
         cardinality)])
     (when-not (supported-ownership-zone? ownership)
       [(validation-error
         :registry/unsupported-ownership
         (conj attribute-path :attribute/ownership)
         ownership)])
     (when (and (:attribute/sync? attribute)
                (not= ownership :shared))
       [(validation-error
         :registry/ownership-leak
         (conj attribute-path :attribute/sync?)
         ownership)])
     (when (and (= logical-type :reference)
                (nil? reference))
       [(validation-error
         :registry/missing-reference-target
         (conj attribute-path :attribute/reference)
         reference)])
     (when (and (some? reference)
                (not= logical-type :reference))
       [(validation-error
         :registry/reference-type-mismatch
         (conj attribute-path :attribute/logical-type)
         logical-type)])
     (when (and (some? reference)
                (nil? (find-entity registry reference)))
       [(validation-error
         :registry/unknown-reference-target
         (conj attribute-path :attribute/reference)
         reference)])
     (when (and entity
                (not (contains? (entity-attribute-ids entity) attribute-id)))
       [(validation-error
         :registry/attribute-not-declared
         (conj attribute-path :attribute/entity)
         entity-id)]))))

(defn validate-registry
  "Returns {:valid? boolean :errors [...]} for a registry.

   Errors are sorted by stable logical paths so JVM and ClojureDart produce
   identical validation results."
  [registry]
  (let [duplicate-errors
        (map-indexed
         (fn [index duplicate]
           (validation-error
            :registry/duplicate-id
            [:registry/duplicates index]
            duplicate))
         (sort-by
          (juxt
           #(str (:duplicate/kind %))
           #(str (:duplicate/id %)))
          (:registry/duplicates registry)))
        warnings
        (map-indexed
         (fn [index descriptor]
           {:warning/code  :registry/unknown-descriptor
            :warning/path  [:registry/unknown-descriptors index]
            :warning/value descriptor})
         (:registry/unknown-descriptors registry))
        entity-errors
        (mapcat #(validate-entity registry %)
                (descriptor-values
                 registry
                 :registry/entities
                 :entity/id))
        attribute-errors
        (mapcat #(validate-attribute registry %)
                (descriptor-values
                 registry
                 :registry/attributes
                 :attribute/id))
        errors
        (sort-by #(mapv str (:error/path %))
                 (concat duplicate-errors entity-errors attribute-errors))]
    {:valid? (empty? errors)
     :errors (vec errors)
     :warnings (vec warnings)}))

(defn valid-registry?
  "Returns true when validate-registry finds no errors."
  [registry]
  (:valid? (validate-registry registry)))

(defn find-entity
  "Looks up an entity descriptor by stable logical ID."
  [registry entity-id]
  (get-in registry [:registry/entities entity-id]))

(defn find-attribute
  "Looks up an attribute descriptor by stable logical ID."
  [registry attribute-id]
  (get-in registry [:registry/attributes attribute-id]))

(defn find-enum
  "Looks up an enum descriptor by stable logical ID."
  [registry enum-id]
  (get-in registry [:registry/enums enum-id]))
