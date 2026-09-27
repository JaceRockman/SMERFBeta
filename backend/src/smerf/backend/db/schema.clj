(ns smerf.backend.db.schema
  (:require [smerf.domain.schema :as logical-schema]))

(def logical-type->datomic-type
  {:uuid :db.type/uuid
   :keyword :db.type/keyword
   :string :db.type/string
   :long :db.type/long
   :ref :db.type/ref
   ;; Datomic has no portable vector scalar. The adapter encodes this logical
   ;; value as a string and restores it at the boundary.
   :integer-vector :db.type/string})

(defn attribute->datomic
  [descriptor]
  (cond-> {:db/ident (:attribute/id descriptor)
           :db/valueType
           (get logical-type->datomic-type (:attribute/type descriptor))
           :db/cardinality
           (case (:attribute/cardinality descriptor)
             :one :db.cardinality/one
             :many :db.cardinality/many)}
    (:attribute/unique? descriptor)
    (assoc :db/unique :db.unique/identity)))

(def operational-schema
  [{:db/ident :seed/key
    :db/valueType :db.type/keyword
    :db/cardinality :db.cardinality/one
    :db/unique :db.unique/identity}])

(def schema
  (into (mapv attribute->datomic logical-schema/attributes)
        operational-schema))
