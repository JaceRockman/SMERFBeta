(ns data.resources
  (:require [datascript.core :as ds]))

(def resource-properties [{:db/ident :resource-property/light}
                          {:db/ident :resource-property/medium}
                          {:db/ident :resource-property/heavy}])

(def example-resources
  [{:resource/title "Longsword"
    :resource/type "Equipment"
    :resource/properties [:resource-property/medium]
    :resource/quality-title "Quality"
    :resource/quality-value "2"
    :resource/power-title "Power"
    :resource/power-value "2"
    :resource/description "A standard longsword used in battle."}

   {:resource/title "Leather Armor"
    :resource/type "Equipment"
    :resource/properties [:resource-property/light]
    :resource/quality-title "Quality"
    :resource/quality-value "3"
    :resource/power-title "Power"
    :resource/power-value "1"
    :resource/description "Standard leather armor used in battle."}

   {:resource/title "Virtue: Bravery"
    :resource/type "Trait"
    :resource/properties []
    :resource/quality-title "Quality"
    :resource/quality-value "1"
    :resource/power-title "Power"
    :resource/power-value "3"
    :resource/description "You are not only capable of overcoming your fears to take action, but you thrive in that high pressure situation."}

   {:resource/title "Training: Soldier"
    :resource/type "Expertise"
    :resource/properties []
    :resource/quality-title "Quality"
    :resource/quality-value "2"
    :resource/power-title "Power"
    :resource/power-value "2"
    :resource/description "You have experience serving as a soldier in the King's military"}

   {:resource/title "Membership: Mercenary's Guild"
    :resource/type "Affiliation"
    :resource/properties []
    :resource/quality-title "Quality"
    :resource/quality-value "1"
    :resource/power-title "Power"
    :resource/power-value "1"
    :resource/description "Membership in the Mercenary's Guild can gain you access to quests, equipment, training, assistance, etc."}])

(defn get-all-resources [db]
  (let [resource-ids (map first(ds/q '[:find ?eid
                                       :where [?eid :resource/title]]
                                     db))]
    (ds/pull-many db '[*] resource-ids)))
