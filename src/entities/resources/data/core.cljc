(ns entities.resources.data.core
  (:require [datascript.core :as ds]))

(def resource-properties [{:db/ident :resource-property/light}
                          {:db/ident :resource-property/medium}
                          {:db/ident :resource-property/heavy}])

(def example-resources
  [{:title "Longsword"
    :entity-type "resource"
    :resource/type "Equipment"
    :resource/properties [:resource-property/medium]
    :resource/quality-title "Quality"
    :resource/quality-value "2"
    :resource/power-title "Power"
    :resource/power-value "2"
    :resource/description "A standard longsword used in battle."}

   {:title "Leather Armor"
    :entity-type "resource"
    :resource/type "Equipment"
    :resource/properties [:resource-property/light]
    :resource/quality-title "Quality"
    :resource/quality-value "3"
    :resource/power-title "Power"
    :resource/power-value "1"
    :resource/description "Standard leather armor used in battle."}

   {:title "Virtue: Bravery"
    :entity-type "resource"
    :resource/type "Trait"
    :resource/properties []
    :resource/quality-title "Quality"
    :resource/quality-value "1"
    :resource/power-title "Power"
    :resource/power-value "3"
    :resource/description "You are not only capable of overcoming your fears to take action, but you thrive in that high pressure situation."}

   {:title "Training: Soldier"
    :entity-type "resource"
    :resource/type "Expertise"
    :resource/properties []
    :resource/quality-title "Quality"
    :resource/quality-value "2"
    :resource/power-title "Power"
    :resource/power-value "2"
    :resource/description "You have experience serving as a soldier in the King's military"}

   {:title "Membership: Mercenary's Guild"
    :entity-type "resource"
    :resource/type "Affiliation"
    :resource/properties []
    :resource/quality-title "Quality"
    :resource/quality-value "1"
    :resource/power-title "Power"
    :resource/power-value "1"
    :resource/description "Membership in the Mercenary's Guild can gain you access to quests, equipment, training, assistance, etc."}])

(defn get-all-resources [conn]
  (let [resource-ids (map first (ds/q '[:find ?eid
                                       :where [?eid :entity-type "resource"]]
                                     @conn))]
    (ds/pull-many @conn '[*] resource-ids)))

(defn get-resource-by-id
  [conn resource-id]
  (ds/pull @conn '[*] resource-id))
