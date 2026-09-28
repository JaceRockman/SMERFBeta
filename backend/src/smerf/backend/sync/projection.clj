(ns smerf.backend.sync.projection
  (:require [clojure.string :as str]
            [datomic.client.api :as d]
            [smerf.domain.schema :as schema]
            [smerf.domain.sync :as sync]))

(defn- entity-index
  [db]
  (into {}
        (map (fn [[eid entity-type logical-id]]
               [eid {:entity/type entity-type
                     :entity/id (str logical-id)}]))
        (d/q '[:find ?entity ?type ?id
               :where
               [?entity :entity/type ?type]
               [?entity :entity/id ?id]]
             db)))

(defn- attribute-index
  [db]
  (into {}
        (d/q '[:find ?attribute ?ident
               :where
               [?attribute :db/ident ?ident]]
             db)))

(defn- logical-value
  [attribute value]
  (if (= :roll/dice attribute)
    (if (str/blank? value)
      []
      (mapv parse-long (str/split value #",")))
    value))

(defn- fact
  [entity-index attribute-index operation entity-id attribute value]
  (let [entity (get entity-index entity-id)
        attribute-id (get attribute-index attribute)
        reference? (schema/reference-attribute? attribute-id)
        reference-id (if (map? value) (:db/id value) value)]
    (when (and entity
               attribute-id
               (schema/synchronized-attribute?
                (:entity/type entity)
                attribute-id))
      (if reference?
        (when-let [reference (get entity-index reference-id)]
          (sync/reference-fact operation
                               (:entity/type entity)
                               (:entity/id entity)
                               attribute-id
                               (:entity/id reference)))
        (sync/scalar-fact operation
                          (:entity/type entity)
                          (:entity/id entity)
                          attribute-id
                          (logical-value attribute-id value))))))

(defn snapshot-facts
  [db]
  (let [entities (entity-index db)
        attributes (attribute-index db)]
    (->> entities
         (mapcat
          (fn [[entity-id entity-info]]
            (for [{attribute-id :attribute/id} schema/attributes
                  :when (schema/synchronized-attribute?
                         (:entity/type entity-info)
                         attribute-id)
                  :let [value-map (d/pull db [attribute-id] entity-id)]
                  :when (contains? value-map attribute-id)
                  :let [attribute-eid
                        (some (fn [[eid ident]]
                                (when (= ident attribute-id) eid))
                              attributes)]
                  :when attribute-eid
                  :let [value (get value-map attribute-id)]
                  :when (some? value)
                  :let [logical-fact
                        (fact entities
                              attributes
                              :add
                              entity-id
                              attribute-eid
                              value)]
                  :when logical-fact]
              logical-fact)))
         (sort-by pr-str)
         vec)))

(defn transaction-facts
  [db transactions]
  (let [entities (entity-index db)
        attributes (attribute-index db)
        facts (->> transactions
                   (mapcat :data)
                   (keep
                    (fn [datom]
                      (fact entities
                            attributes
                            (if (:added datom) :add :retract)
                            (:e datom)
                            (:a datom)
                            (:v datom))))
                   (sort-by pr-str)
                   vec)]
    {:adds (filterv #(= :add (:fact/op %)) facts)
     :retracts (filterv #(= :retract (:fact/op %)) facts)}))
