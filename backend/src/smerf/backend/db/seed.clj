(ns smerf.backend.db.seed
  (:require [datomic.client.api :as d]))

(def campaign-id "aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa")
(def ruleset-id "cccccccc-cccc-4ccc-8ccc-cccccccccccc")
(def world-id "eeeeeeee-eeee-4eee-8eee-eeeeeeeeeeee")
(def aria-id "bbbbbbbb-bbbb-4bbb-8bbb-bbbbbbbbbbbb")
(def borin-id "ffffffff-ffff-4fff-8fff-ffffffffffff")
(def strike-id "dddddddd-dddd-4ddd-8ddd-dddddddddddd")
(def defend-id "11111111-1111-4111-8111-111111111111")
(def recover-id "33333333-3333-4333-8333-333333333333")

(def seed-key :smerf.seed/development-v1)

(defn- uuid
  [value]
  (java.util.UUID/fromString value))

(def seed-data
  [{:db/id "ruleset"
    :entity/id (uuid ruleset-id)
    :entity/type :entity/ruleset
    :ruleset/name "Adventurer Basics"
    :ruleset/base-dice 2
    :ruleset/max-wounds 5
    :ruleset/stat-label "Approach"}
   {:db/id "world"
    :entity/id (uuid world-id)
    :entity/type :entity/world
    :world/name "The Shattered March"
    :world/content "Old roads cross a frontier of floating ruins."}
   {:db/id "campaign"
    :entity/id (uuid campaign-id)
    :entity/type :entity/campaign
    :campaign/name "The Lantern Company"
    :campaign/ruleset "ruleset"
    :campaign/world "world"}
   {:entity/id (uuid aria-id)
    :entity/type :entity/character
    :character/name "Aria"
    :character/notes "Keeps a map of every safe road."
    :character/wounds 0
    :character/campaign "campaign"
    :character/ruleset "ruleset"}
   {:entity/id (uuid borin-id)
    :entity/type :entity/character
    :character/name "Borin"
    :character/notes "Owes the ferryman a favor."
    :character/wounds 1
    :character/campaign "campaign"
    :character/ruleset "ruleset"}
   {:entity/id (uuid strike-id)
    :entity/type :entity/action
    :action/name "Strike"
    :action/dice 2
    :action/success-at 7
    :action/ruleset "ruleset"}
   {:entity/id (uuid defend-id)
    :entity/type :entity/action
    :action/name "Defend"
    :action/dice 2
    :action/success-at 6
    :action/ruleset "ruleset"}
   {:entity/id (uuid recover-id)
    :entity/type :entity/action
    :action/name "Recover"
    :action/dice 2
    :action/success-at 8
    :action/ruleset "ruleset"}
   {:seed/key seed-key}])

(defn ensure-seeded!
  [connection]
  (let [db (d/db connection)]
    (when-not (d/pull db [:seed/key] [:seed/key seed-key])
      (d/transact connection {:tx-data seed-data}))))
