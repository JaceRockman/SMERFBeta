(ns smerf.backend.db.datomic
  (:require [clojure.string :as str]
            [datomic.client.api :as d]
            [smerf.backend.db.schema :as schema]
            [smerf.backend.db.seed :as seed]
            [smerf.domain.responses :as responses]))

(def ruleset-pattern
  [:entity/id
   :ruleset/name
   :ruleset/base-dice
   :ruleset/max-wounds
   :ruleset/stat-label])

(def world-pattern
  [:entity/id :world/name :world/content])

(def campaign-pattern
  [:entity/id
   :campaign/name
   {:campaign/ruleset ruleset-pattern}
   {:campaign/world world-pattern}])

(def character-pattern
  [:entity/id
   :character/name
   :character/notes
   :character/wounds
   {:character/campaign [:entity/id]}
   {:character/ruleset ruleset-pattern}])

(def action-pattern
  [:entity/id
   :action/name
   :action/dice
   :action/success-at
   {:action/ruleset [:entity/id]}])

(def roll-pattern
  [:entity/id
   :roll/dice
   :roll/total
   :roll/outcome
   {:roll/action [:entity/id]}])

(defn- uuid
  [value]
  (java.util.UUID/fromString value))

(defn- id-string
  [entity]
  (some-> (:entity/id entity) str))

(defn- ruleset-value
  [entity]
  (when entity
    {:ruleset/id (id-string entity)
     :ruleset/name (:ruleset/name entity)
     :ruleset/base-dice (:ruleset/base-dice entity)
     :ruleset/max-wounds (:ruleset/max-wounds entity)
     :ruleset/stat-label (:ruleset/stat-label entity)}))

(defn- world-value
  [entity]
  (when entity
    {:world/id (id-string entity)
     :world/name (:world/name entity)
     :world/content (:world/content entity)}))

(defn- campaign-value
  [entity]
  (when entity
    {:campaign/id (id-string entity)
     :campaign/name (:campaign/name entity)
     :campaign/ruleset-id (id-string (:campaign/ruleset entity))
     :campaign/world-id (id-string (:campaign/world entity))}))

(defn- character-value
  [entity]
  (when entity
    {:character/id (id-string entity)
     :character/name (:character/name entity)
     :character/notes (:character/notes entity)
     :character/wounds (:character/wounds entity)
     :character/campaign-id (id-string (:character/campaign entity))
     :character/ruleset-id (id-string (:character/ruleset entity))}))

(defn- action-value
  [entity]
  (when entity
    {:action/id (id-string entity)
     :action/name (:action/name entity)
     :action/dice (:action/dice entity)
     :action/success-at (:action/success-at entity)
     :action/ruleset-id (id-string (:action/ruleset entity))}))

(defn- parse-dice
  [encoded]
  (if (str/blank? encoded)
    []
    (mapv parse-long (str/split encoded #","))))

(defn- roll-value
  [entity]
  (when entity
    {:roll/id (id-string entity)
     :roll/action-id (id-string (:roll/action entity))
     :roll/dice (parse-dice (:roll/dice entity))
     :roll/total (:roll/total entity)
     :roll/outcome (:roll/outcome entity)}))

(defn- pull-by-id
  [db pattern logical-id]
  (d/pull db pattern [:entity/id (uuid logical-id)]))

(defn- entity-ids
  [db query logical-id]
  (mapv first (d/q query db (uuid logical-id))))

(defn- pull-many
  [db pattern entity-ids]
  (mapv #(d/pull db pattern %) entity-ids))

(defn- missing!
  [entity-type logical-id]
  (throw (ex-info (str (name entity-type) " was not found")
                  {:error/type :domain/not-found
                   :entity/type entity-type
                   :entity/id logical-id})))

(defn- character-details
  [db character-id]
  (let [entity (pull-by-id db character-pattern character-id)]
    (when-not entity
      (missing! :character character-id))
    (let [ruleset (:character/ruleset entity)
          ruleset-id (id-string ruleset)
          action-ids (entity-ids
                      db
                      '[:find ?action
                        :in $ ?ruleset-id
                        :where
                        [?ruleset :entity/id ?ruleset-id]
                        [?action :action/ruleset ?ruleset]]
                      ruleset-id)
          roll-ids (entity-ids
                    db
                    '[:find ?roll
                      :in $ ?character-id
                      :where
                      [?character :entity/id ?character-id]
                      [?roll :roll/character ?character]]
                    character-id)]
      {:character (character-value entity)
       :ruleset (ruleset-value ruleset)
       :actions (->> (pull-many db action-pattern action-ids)
                     (map action-value)
                     (sort-by :action/name)
                     vec)
       :rolls (->> (pull-many db roll-pattern roll-ids)
                   (map roll-value)
                   (sort-by :roll/id)
                   vec)})))

(defrecord DatomicBackend [connection random-int])

(defn load-campaign-workspace
  [{:keys [connection]} campaign-id]
  (let [db (d/db connection)
        entity (pull-by-id db campaign-pattern campaign-id)]
    (when-not entity
      (missing! :campaign campaign-id))
    (let [character-ids
          (entity-ids
           db
           '[:find ?character
             :in $ ?campaign-id
             :where
             [?campaign :entity/id ?campaign-id]
             [?character :character/campaign ?campaign]]
           campaign-id)
          ruleset (:campaign/ruleset entity)
          ruleset-id (id-string ruleset)
          action-ids
          (entity-ids
           db
           '[:find ?action
             :in $ ?ruleset-id
             :where
             [?ruleset :entity/id ?ruleset-id]
             [?action :action/ruleset ?ruleset]]
           ruleset-id)]
      {:campaign (campaign-value entity)
       :ruleset (ruleset-value ruleset)
       :world (world-value (:campaign/world entity))
       :characters (->> (pull-many db character-pattern character-ids)
                        (map character-value)
                        (sort-by :character/name)
                        vec)
       :actions (->> (pull-many db action-pattern action-ids)
                     (map action-value)
                     (sort-by :action/name)
                     vec)})))

(defn load-character
  [{:keys [connection]} character-id]
  (character-details (d/db connection) character-id))

(defn create-character!
  [{:keys [connection]} character]
  (let [db (d/db connection)
        campaign-id (:character/campaign-id character)
        ruleset-id (:character/ruleset-id character)
        campaign (pull-by-id db campaign-pattern campaign-id)]
    (when-not campaign
      (missing! :campaign campaign-id))
    (when-not (= ruleset-id (id-string (:campaign/ruleset campaign)))
      (throw (ex-info "Ruleset does not belong to the campaign"
                      {:error/type :validation/invalid-reference
                       :entity/type :ruleset
                       :entity/id ruleset-id})))
    (d/transact
     connection
     {:tx-data
      [{:entity/id (uuid (:character/id character))
        :entity/type :entity/character
        :character/name (:character/name character)
        :character/notes (or (:character/notes character) "")
        :character/wounds (or (:character/wounds character) 0)
        :character/campaign [:entity/id (uuid campaign-id)]
        :character/ruleset [:entity/id (uuid ruleset-id)]}]})
    (:character (character-details (d/db connection)
                                   (:character/id character)))))

(defn update-character-notes!
  [{:keys [connection]} character-id notes]
  (when-not (pull-by-id (d/db connection) [:entity/id] character-id)
    (missing! :character character-id))
  (d/transact connection
              {:tx-data [{:db/id [:entity/id (uuid character-id)]
                          :character/notes notes}]})
  (:character (character-details (d/db connection) character-id)))

(defn update-character-wounds!
  [{:keys [connection]} character-id wounds]
  (let [db (d/db connection)
        character (pull-by-id db character-pattern character-id)]
    (when-not character
      (missing! :character character-id))
    (when (> wounds (get-in character
                            [:character/ruleset :ruleset/max-wounds]))
      (throw (ex-info "Wounds exceed the ruleset maximum"
                      {:error/type :validation/invalid-wounds
                       :wounds wounds
                       :maximum (get-in character
                                        [:character/ruleset
                                         :ruleset/max-wounds])})))
    (d/transact connection
                {:tx-data [{:db/id [:entity/id (uuid character-id)]
                            :character/wounds wounds}]})
    (:character (character-details (d/db connection) character-id))))

(defn transact-roll!
  [{:keys [connection random-int]} character-id action-id]
  (let [db (d/db connection)
        character (pull-by-id db character-pattern character-id)
        action (pull-by-id db action-pattern action-id)]
    (when-not character
      (missing! :character character-id))
    (when-not action
      (missing! :action action-id))
    (when-not (= (id-string (:character/ruleset character))
                 (id-string (:action/ruleset action)))
      (throw (ex-info "Action does not belong to the character's ruleset"
                      {:error/type :validation/invalid-reference
                       :entity/type :action
                       :entity/id action-id})))
    (let [dice (mapv (fn [_] (inc (random-int 6)))
                     (range (:action/dice action)))
          total (reduce + dice)
          outcome (if (>= total (:action/success-at action))
                    :success
                    :failure)
          roll-id (random-uuid)]
      (d/transact
       connection
       {:tx-data
        [{:entity/id roll-id
          :entity/type :entity/roll
          :roll/character [:entity/id (uuid character-id)]
          :roll/action [:entity/id (uuid action-id)]
          :roll/dice (str/join "," dice)
          :roll/total total
          :roll/outcome outcome}]})
      (responses/roll-result action-id dice total outcome))))

(defn- ensure-schema!
  [connection]
  (when-not (d/pull (d/db connection) [:db/ident] :entity/id)
    (d/transact connection {:tx-data schema/schema})))

(defn connect
  [{:keys [system storage-dir db-name random-int]
    :or {system "smerf-dev"
         storage-dir ".smerf-datomic"
         db-name "smerf"
         random-int rand-int}}]
  (let [client (d/client {:server-type :datomic-local
                          :system system
                          :storage-dir storage-dir})]
    (d/create-database client {:db-name db-name})
    (let [connection (d/connect client {:db-name db-name})]
      (ensure-schema! connection)
      (seed/ensure-seeded! connection)
      (->DatomicBackend connection random-int))))
