(ns smerf.frontend.data.projection-query
  (:require [smerf.frontend.data.sync-applier :as sync]))

(defn- fact-value
  [fact]
  (if (contains? fact :fact/ref)
    (:fact/ref fact)
    (:fact/value fact)))

(defn- entities
  [database]
  (reduce
   (fn [result fact]
     (let [id (:fact/subject fact)
           entity (get result id {:entity/id id
                                  :entity/type (:fact/entity fact)})]
       (assoc result id
              (assoc entity
                     (:fact/attribute fact)
                     (fact-value fact)))))
   {}
   (sync/facts database)))

(defn- all-of-type
  [database entity-type]
  (->> (vals (entities database))
       (filter #(= entity-type (:entity/type %)))
       (sort-by #(or (:campaign/name %)
                     (:character/name %)
                     (:action/name %)
                     (:ruleset/name %)
                     (:world/name %)
                     (:roll/id %)
                     (:entity/id %)))
       vec))

(defn campaigns
  [database]
  (all-of-type database :entity/campaign))

(defn campaign-workspace
  [database campaign-id]
  (let [all-entities (entities database)
        campaign (get all-entities campaign-id)
        ruleset (some-> (:campaign/ruleset campaign) all-entities)
        world (some-> (:campaign/world campaign) all-entities)
        characters (->> (vals all-entities)
                        (filter #(and (= :entity/character
                                         (:entity/type %))
                                      (= campaign-id
                                         (:character/campaign %))))
                        (sort-by :character/name)
                        vec)
        actions (->> (vals all-entities)
                     (filter #(and (= :entity/action (:entity/type %))
                                   (= (:campaign/ruleset campaign)
                                      (:action/ruleset %))))
                     (sort-by :action/name)
                     vec)]
    (when campaign
      {:campaign campaign
       :ruleset ruleset
       :world world
       :characters characters
       :actions actions})))

(defn character-detail
  [database character-id]
  (let [all-entities (entities database)
        character (get all-entities character-id)
        ruleset (some-> (:character/ruleset character) all-entities)
        actions (->> (vals all-entities)
                     (filter #(and (= :entity/action (:entity/type %))
                                   (= (:character/ruleset character)
                                      (:action/ruleset %))))
                     (sort-by :action/name)
                     vec)
        rolls (->> (vals all-entities)
                   (filter #(and (= :entity/roll (:entity/type %))
                                 (= character-id (:roll/character %))))
                   (sort-by :roll/id)
                   vec)]
    (when character
      {:character character
       :ruleset ruleset
       :actions actions
       :rolls rolls})))
