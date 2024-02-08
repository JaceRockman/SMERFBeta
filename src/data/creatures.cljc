(ns data.creatures
  (:require [datascript.core :as ds]
            [data.conn :refer [conn]]
            [data.domains :as domains]))

(defn get-all-creature-ids
  [db]
  (map first (ds/q '[:find ?e
                     :where [?e :creature/title]]
                   db)))

(defn get-all-creatures-data
  [db]
  (when-let [realm-ids (get-all-creature-ids db)]
    (ds/pull-many db '[*] realm-ids)))

(defn get-active-creature-id
  [db]
  (ffirst (ds/q '[:find ?e
                  :where [_ :active/creature ?e]]
                db)))

(defn get-active-creature-data
  [db]
  (when-let [active-creature-id (get-active-creature-id db)]
    (println (ds/pull db '[*] active-creature-id))
    (ds/pull db '[*] active-creature-id)))

(defn get-active-creature-tracker
  []
  (ffirst (ds/q '[:find ?e
                  :where [?e :active/creature]]
                @conn)))

(defn set-active-creature
  [creature-id]
  (if-let [active-creature-tracker (get-active-creature-tracker)]
    (ds/transact! conn [{:db/id active-creature-tracker
                         :active/creature creature-id}])
    (ds/transact! conn [{:active/creature creature-id}])))


(def creature-races [{:db/ident :race/elf
                      :race/title "Elf"}
                     {:db/ident :race/human
                      :race/title "Human"}
                     {:db/ident :race/dwarf
                      :race/title "Dwarf"}])

(defn race-titles
  [db race-idents]
  (map :race/title (ds/pull-many db '[:race/title] race-idents)))

(defn example-creatures
  [default-domain-entities example-resources default-actions]
  [{:creature/domains default-domain-entities
    :creature/title "aleksander"
    :creature/portrait "https://i.pinimg.com/originals/d8/30/bc/d830bc587482ed8af3639903c5d406b4.png"
    :creature/gender "Male"
    :creature/race [:race/elf :race/human]
    :creature/description "Aleksander is a really cool dude."
    :creature/experience 0
    :creature/damage []
    :creature/resources example-resources
    :creature/actions default-actions
    :creature/notes "Notes about Aleksander"
    :creature/rolls []}
   {:creature/domains default-domain-entities
    :creature/title "eilonwey"
    :creature/gender "Female"
    :creature/race [:race/elf]
    :creature/description "Eilonwey is a badass."
    :creature/experience 0
    :creature/damage []
    :creature/resources example-resources
    :creature/actions default-actions
    :creature/notes "Notes about Eilonwey"
    :creature/rolls []}
   {:creature/domains default-domain-entities
    :creature/title "durflag"
    :creature/race [:race/dwarf]
    :creature/description "Durflag is a badass as well."
    :creature/experience 0
    :creature/damage []
    :creature/resources example-resources
    :creature/actions default-actions
    :creature/notes "Notes about Durflag"
    :creature/rolls []}])

(defn new-creature-defaults
  "A transaction schema for a new creature"
  []
  {:creature/id #?(:clj (java.util.UUID/randomUUID) :cljs (random-uuid))
   :creature/domains "Domains"})



(defn creature-eid-by-name
  [db creature-name]
  (ffirst (ds/q '[:find ?e
                  :in $ ?creature-name
                  :where [?e :creature/name ?creature-name]]
                db creature-name)))

(defn creature-info
  [db creature-name]
  (ds/pull db '[*] (creature-eid-by-name db creature-name)))

(defn creature-domains
  [db creature-data]
  (let [db* (ds/conn-from-datoms (into #{} (map (fn [[k v]] (ds/datom 1 k v)) creature-data)))
        creature-domains (ffirst (ds/q '[:find ?domains
                                              :where [_ :creature/domains ?domains]]
                                            @db*))
        domains-data (ds/pull db '[*] (first creature-domains))]
    domains-data))

(defn all-creatures
  [db]
  (ds/q '[:find ?e
          :where [?e :creature/name]]
        db))

;; Pull Patterns
;; Pull patterns define the structure of the data to be returned given an entity id

(def pull-full-creature
  ['* :creature/race {:creature/domains [:domain/name]}])

(def pull-creature-name
  [:creature/name])


;; Queries
;; Queries retrieve entity ids, attributes, values, and times from the database

(defn get-all-creatures
  "Query for getting all of the creatures in the database.

  Arguments:
   - db connection
   - Pull Pattern
  Returns:
   - creature entity data structured with the given pull pattern"
  [q db pattern]
  (map first
       (q '{:find [(pull ?eid pattern)]
            :in [$ pattern]
            :where [[?eid :creature/id]]}
          db
          pattern)))

(defn get-creature-by-name
  "Returns creature information for all creature's with a given name

  Arguments:
   - db connection
   - Pull Pattern for a creature entity
   - A String that matches on the :creature/name value
  Returns:
   - creature entity data structured with the given pull pattern"
  [q db pattern creature-name]
  (map first
       (q '{:find [(pull ?eid pattern)]
              :in [$ pattern ?creature-name]
              :where [[?eid :creature/name ?creature-name]]}
            db
            pattern
            creature-name)))

;; Transactions
;; Transactions accumulate datoms to the databse

(defn create-creature
  "Takes transaction data for a creature and adds a new creature to the database"
  [transact conn creature-tx-data]
  (transact conn {:tx-data [(merge creature-tx-data {:creature/id #?(:clj (java.util.UUID/randomUUID) :cljs random-uuid)
                                                     :creature/domains domains/default-domains})]}))

(defn update-creature
  "Takes a creature uuid and updates it with the provided transaction data"
  [transact conn creature-uuid creature-tx-data]
  (transact conn {:tx-data [(merge creature-tx-data {:creature/id creature-uuid})]}))

(defn retract-creature
  "Retracts all datoms where the entity id or value is equal to the provided creature-id"
  [transact conn creature-uuid]
  (transact conn {:tx-data [[:db/retractEntity [:creature/id creature-uuid]]]}))

