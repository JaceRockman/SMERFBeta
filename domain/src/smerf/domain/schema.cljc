(ns smerf.domain.schema
  "Portable logical schema shared by storage adapters."
  (:require [smerf.domain.identifiers :as identifiers]))

(def entity-types
  #{:entity/campaign
    :entity/ruleset
    :entity/world
    :entity/character
    :entity/action
    :entity/roll})

(defn- descriptor
  [id type entities & {:as options}]
  (merge {:attribute/id id
          :attribute/type type
          :attribute/cardinality :one
          :attribute/entities entities
          :attribute/sync? true}
         options))

(def attributes
  [(descriptor :entity/id :uuid entity-types
               :attribute/identity? true
               :attribute/unique? true
               :attribute/sync? false)
   (descriptor :entity/type :keyword entity-types
               :attribute/sync? false)

   (descriptor :campaign/name :string #{:entity/campaign})
   (descriptor :campaign/ruleset :ref #{:entity/campaign}
               :attribute/refers-to :entity/ruleset)
   (descriptor :campaign/world :ref #{:entity/campaign}
               :attribute/refers-to :entity/world)

   (descriptor :ruleset/name :string #{:entity/ruleset})
   (descriptor :ruleset/base-dice :long #{:entity/ruleset})
   (descriptor :ruleset/max-wounds :long #{:entity/ruleset})
   (descriptor :ruleset/stat-label :string #{:entity/ruleset})

   (descriptor :world/name :string #{:entity/world})
   (descriptor :world/content :string #{:entity/world})

   (descriptor :character/name :string #{:entity/character})
   (descriptor :character/notes :string #{:entity/character})
   (descriptor :character/wounds :long #{:entity/character})
   (descriptor :character/campaign :ref #{:entity/character}
               :attribute/refers-to :entity/campaign)
   (descriptor :character/ruleset :ref #{:entity/character}
               :attribute/refers-to :entity/ruleset)

   (descriptor :action/name :string #{:entity/action})
   (descriptor :action/dice :long #{:entity/action})
   (descriptor :action/success-at :long #{:entity/action})
   (descriptor :action/ruleset :ref #{:entity/action}
               :attribute/refers-to :entity/ruleset)

   (descriptor :roll/character :ref #{:entity/roll}
               :attribute/refers-to :entity/character)
   (descriptor :roll/action :ref #{:entity/roll}
               :attribute/refers-to :entity/action)
   (descriptor :roll/dice :integer-vector #{:entity/roll})
   (descriptor :roll/total :long #{:entity/roll})
   (descriptor :roll/outcome :keyword #{:entity/roll})])

(def attributes-by-id
  (into {} (map (juxt :attribute/id identity) attributes)))

(defn attribute
  [attribute-id]
  (get attributes-by-id attribute-id))

(defn attribute-for-entity?
  [entity-type attribute-id]
  (contains? (:attribute/entities (attribute attribute-id))
             entity-type))

(defn synchronized-attribute?
  [entity-type attribute-id]
  (let [descriptor (attribute attribute-id)]
    (and (:attribute/sync? descriptor)
         (contains? (:attribute/entities descriptor) entity-type))))

(defn reference-attribute?
  [attribute-id]
  (= :ref (:attribute/type (attribute attribute-id))))

(defn valid-scalar-value?
  [attribute-id value]
  (case (:attribute/type (attribute attribute-id))
    :uuid (identifiers/canonical-uuid? value)
    :keyword (keyword? value)
    :string (string? value)
    :long (integer? value)
    :integer-vector (and (vector? value)
                         (every? integer? value))
    false))

(defn valid-schema?
  []
  (and (= (count attributes) (count attributes-by-id))
       (every? #(contains? #{:one :many} (:attribute/cardinality %))
               attributes)
       (every? #(every? (fn [entity-type]
                          (contains? entity-types entity-type))
                        (:attribute/entities %))
               attributes)
       (every? (fn [descriptor]
                 (if (= :ref (:attribute/type descriptor))
                   (contains? entity-types (:attribute/refers-to descriptor))
                   (not (contains? descriptor :attribute/refers-to))))
               attributes)))
