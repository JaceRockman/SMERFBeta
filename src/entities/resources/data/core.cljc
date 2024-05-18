(ns entities.resources.data.core
  (:require [datascript.core :as ds]))

(def resource-properties [{:db/ident :resource-property/light}
                          {:db/ident :resource-property/medium}
                          {:db/ident :resource-property/heavy}])

(def example-resources
  [{:title                  "Longsword"
    :entity-type            "resource"
    :resource/type          "Equipment"
    :resource/properties    [:resource-property/medium]
    :resource/quality-title "Quality"
    :resource/quality-value "2"
    :resource/power-title   "Power"
    :resource/power-value   "2"
    :resource/description   "A standard longsword used in battle."}

   {:title                  "Leather Armor"
    :entity-type            "resource"
    :resource/type          "Equipment"
    :resource/properties    [:resource-property/light]
    :resource/quality-title "Quality"
    :resource/quality-value "3"
    :resource/power-title   "Power"
    :resource/power-value   "1"
    :resource/description   "Standard leather armor used in battle."}

   {:title                  "Virtue: Bravery"
    :entity-type            "resource"
    :resource/type          "Trait"
    :resource/properties    []
    :resource/quality-title "Quality"
    :resource/quality-value "1"
    :resource/power-title   "Power"
    :resource/power-value   "3"
    :resource/description   "You are not only capable of overcoming your fears to take action, but you thrive in that high pressure situation."}

   {:title                  "Training: Soldier"
    :entity-type            "resource"
    :resource/type          "Expertise"
    :resource/properties    []
    :resource/quality-title "Quality"
    :resource/quality-value "2"
    :resource/power-title   "Power"
    :resource/power-value   "2"
    :resource/description   "You have experience serving as a soldier in the King's military"}

   {:title                  "Membership: Mercenary's Guild"
    :entity-type            "resource"
    :resource/type          "Affiliation"
    :resource/properties    []
    :resource/quality-title "Quality"
    :resource/quality-value "1"
    :resource/power-title   "Power"
    :resource/power-value   "1"
    :resource/description   "Membership in the Mercenary's Guild can gain you access to quests, equipment, training, assistance, etc."}
   {:entity-type "resource"
    :resource/quality-title "Quality"
    :resource/properties []
    :resource/power-title "Power"
    :resource/description ""
    :title "Dagger"
    :resource/power-value 0
    :resource/type "Equipment"
    :resource/quality-value 3}
   {:entity-type "resource" :resource/quality-title "Quality" :resource/properties [], :resource/power-title "Power" :resource/description "" :title "Shortsword", :resource/power-value 1, :resource/type "Equipment" :resource/quality-value 2}
   {:entity-type "resource" :resource/quality-title "Quality" :resource/properties [], :resource/power-title "Power" :resource/description "" :title "Greatsword", :resource/power-value 3, :resource/type "Equipment" :resource/quality-value 0}
   {:entity-type "resource" :resource/quality-title "Quality" :resource/properties [], :resource/power-title "Power" :resource/description "" :title "Handaxe", :resource/power-value 1, :resource/type "Equipment" :resource/quality-value 2}
   {:entity-type "resource" :resource/quality-title "Quality" :resource/properties [], :resource/power-title "Power" :resource/description "" :title "Battle Axe", :resource/power-value 2, :resource/type "Equipment" :resource/quality-value 1}
   {:entity-type "resource" :resource/quality-title "Quality" :resource/properties [], :resource/power-title "Power" :resource/description "" :title "Greataxe", :resource/power-value 3, :resource/type "Equipment" :resource/quality-value 0}
   {:entity-type "resource" :resource/quality-title "Quality" :resource/properties [], :resource/power-title "Power" :resource/description "" :title "Javelin", :resource/power-value 1, :resource/type "Equipment" :resource/quality-value 2}
   {:entity-type "resource" :resource/quality-title "Quality" :resource/properties [], :resource/power-title "Power" :resource/description "" :title "Spear", :resource/power-value 2, :resource/type "Equipment" :resource/quality-value 1}
   {:entity-type "resource" :resource/quality-title "Quality" :resource/properties [], :resource/power-title "Power" :resource/description "" :title "Lance", :resource/power-value 3, :resource/type "Equipment" :resource/quality-value 0}
   {:entity-type "resource" :resource/quality-title "Quality" :resource/properties [], :resource/power-title "Power" :resource/description "" :title "Hand Crossbow", :resource/power-value 0, :resource/type "Equipment" :resource/quality-value 3}
   {:entity-type "resource" :resource/quality-title "Quality" :resource/properties [], :resource/power-title "Power" :resource/description "" :title "Crossbow", :resource/power-value 2, :resource/type "Equipment" :resource/quality-value 1}
   {:entity-type "resource" :resource/quality-title "Quality" :resource/properties [], :resource/power-title "Power" :resource/description "" :title "Short Bow", :resource/power-value 0, :resource/type "Equipment" :resource/quality-value 3}
   {:entity-type "resource" :resource/quality-title "Quality" :resource/properties [], :resource/power-title "Power" :resource/description "" :title "Longbow", :resource/power-value 1, :resource/type "Equipment" :resource/quality-value 2}
   {:entity-type "resource" :resource/quality-title "Quality" :resource/properties [], :resource/power-title "Power" :resource/description "" :title "Great Bow", :resource/power-value 2, :resource/type "Equipment" :resource/quality-value 1}
   {:entity-type "resource" :resource/quality-title "Quality" :resource/properties [], :resource/power-title "Power" :resource/description "" :title "Tower Shield", :resource/power-value 3, :resource/type "Equipment" :resource/quality-value 1}
   {:entity-type "resource" :resource/quality-title "Quality" :resource/properties [], :resource/power-title "Power" :resource/description "" :title "Kite Shield", :resource/power-value 2, :resource/type "Equipment" :resource/quality-value 2}
   {:entity-type "resource" :resource/quality-title "Quality" :resource/properties [], :resource/power-title "Power" :resource/description "" :title "Buckler", :resource/power-value 1, :resource/type "Equipment" :resource/quality-value 3}
   {:entity-type "resource" :resource/quality-title "Quality" :resource/properties [], :resource/power-title "Power" :resource/description "" :title "Plate Armor", :resource/power-value 4, :resource/type "Equipment" :resource/quality-value -1}
   {:entity-type "resource" :resource/quality-title "Quality" :resource/properties [], :resource/power-title "Power" :resource/description "" :title "Chain Maille", :resource/power-value 3, :resource/type "Equipment" :resource/quality-value 0}
   {:entity-type "resource" :resource/quality-title "Quality" :resource/properties [], :resource/power-title "Power" :resource/description "" :title "Leather Armor", :resource/power-value 2, :resource/type "Equipment" :resource/quality-value 1}
   {:title "Climber's Kit"
    :entity-type "resource"
    :resource/type "Equipment"
    :resource/properties []
    :resource/quality-title "Quality"
    :resource/quality-value 1
    :resource/power-title "Power"
    :resource/power-value 2
    :resource/description ""}
   {:title "Climber's Kit"
    :entity-type "resource"
    :resource/type "Equipment"
    :resource/properties []
    :resource/quality-title "Quality"
    :resource/quality-value 1
    :resource/power-title "Power"
    :resource/power-value 2
    :resource/description ""}
   {:title "Thieves' Kit"
    :entity-type "resource"
    :resource/type "Equipment"
    :resource/properties []
    :resource/quality-title "Quality"
    :resource/quality-value 2
    :resource/power-title "Power"
    :resource/power-value 1
    :resource/description ""}
   {:title "Mediker's Kit"
    :entity-type "resource"
    :resource/type "Equipment"
    :resource/properties []
    :resource/quality-title "Quality"
    :resource/quality-value 1
    :resource/power-title "Power"
    :resource/power-value 2
    :resource/description ""}
   {:title "Rites and Runes of the Eldari"
    :entity-type "resource"
    :resource/type "Equipment"
    :resource/properties []
    :resource/quality-title "Quality"
    :resource/quality-value 1
    :resource/power-title "Power"
    :resource/power-value 1
    :resource/description ""}

   {:title "Bravery"
    :entity-type "resource"
    :resource/type "Trait"
    :resource/properties [:virtue]
    :resource/quality-title "Quality"
    :resource/quality-value 0
    :resource/power-title "Power"
    :resource/power-value 0
    :resource/description ""}
   {:title "Life"
    :entity-type "resource"
    :resource/type "Trait"
    :resource/properties [:ideal]
    :resource/quality-title "Quality"
    :resource/quality-value 0
    :resource/power-title "Power"
    :resource/power-value 0
    :resource/description ""}
   {:title "Knowledge"
    :entity-type "resource"
    :resource/type "Trait"
    :resource/properties [:virtue]
    :resource/quality-title "Quality"
    :resource/quality-value 0
    :resource/power-title "Power"
    :resource/power-value 0
    :resource/description ""}
   {:title "Protective"
    :entity-type "resource"
    :resource/type "Trait"
    :resource/properties [:virtue]
    :resource/quality-title "Quality"
    :resource/quality-value 0
    :resource/power-title "Power"
    :resource/power-value 0
    :resource/description ""}
   {:title "Greedy"
    :entity-type "resource"
    :resource/type "Trait"
    :resource/properties [:vice]
    :resource/quality-title "Quality"
    :resource/quality-value 0
    :resource/power-title "Power"
    :resource/power-value 0
    :resource/description ""}
   {:title "Alcoholic"
    :entity-type "resource"
    :resource/type "Trait"
    :resource/properties [:vice]
    :resource/quality-title "Quality"
    :resource/quality-value 0
    :resource/power-title "Power"
    :resource/power-value 0
    :resource/description ""}
   {:title "Selfish"
    :entity-type "resource"
    :resource/type "Trait"
    :resource/properties [:vice]
    :resource/quality-title "Quality"
    :resource/quality-value 0
    :resource/power-title "Power"
    :resource/power-value 0
    :resource/description ""}
   {:title "Spread the Faith"
    :entity-type "resource"
    :resource/type "Trait"
    :resource/properties [:goal]
    :resource/quality-title "Quality"
    :resource/quality-value 0
    :resource/power-title "Power"
    :resource/power-value 0
    :resource/description ""}
   {:title "Uncover Forgotten Magics"
    :entity-type "resource"
    :resource/type "Trait"
    :resource/properties [:goal]
    :resource/quality-title "Quality"
    :resource/quality-value 0
    :resource/power-title "Power"
    :resource/power-value 0
    :resource/description ""}
   
   {:title "Scout"
    :entity-type "resource"
    :resource/type "Expertise"
    :resource/properties [:training]
    :resource/quality-title "Quality"
    :resource/quality-value 0
    :resource/power-title "Power"
    :resource/power-value 0
    :resource/description ""}
   {:title "Soldier"
    :entity-type "resource"
    :resource/type "Expertise"
    :resource/properties [:training]
    :resource/quality-title "Quality"
    :resource/quality-value 0
    :resource/power-title "Power"
    :resource/power-value 0
    :resource/description ""}
   {:title "Sentinel"
    :entity-type "resource"
    :resource/type "Expertise"
    :resource/properties [:training]
    :resource/quality-title "Quality"
    :resource/quality-value 0
    :resource/power-title "Power"
    :resource/power-value 0
    :resource/description ""}
   {:title "Aethrology"
    :entity-type "resource"
    :resource/type "Expertise"
    :resource/properties [:knowledge]
    :resource/quality-title "Quality"
    :resource/quality-value 0
    :resource/power-title "Power"
    :resource/power-value 0
    :resource/description ""}
   {:title "Medicine"
    :entity-type "resource"
    :resource/type "Expertise"
    :resource/properties [:knowledge]
    :resource/quality-title "Quality"
    :resource/quality-value 0
    :resource/power-title "Power"
    :resource/power-value 0
    :resource/description ""}
   {:title "History"
    :entity-type "resource"
    :resource/type "Expertise"
    :resource/properties [:knowledge]
    :resource/quality-title "Quality"
    :resource/quality-value 0
    :resource/power-title "Power"
    :resource/power-value 0
    :resource/description ""}
   {:title "Light Fingers"
    :entity-type "resource"
    :resource/type "Expertise"
    :resource/properties [:talent]
    :resource/quality-title "Quality"
    :resource/quality-value 0
    :resource/power-title "Power"
    :resource/power-value 0
    :resource/description ""}
   {:title "Light Footed"
    :entity-type "resource"
    :resource/type "Expertise"
    :resource/properties [:talent]
    :resource/quality-title "Quality"
    :resource/quality-value 0
    :resource/power-title "Power"
    :resource/power-value 0
    :resource/description ""}

   {:title "Adventurer"
    :entity-type "resource"
    :resource/type "Affiliation"
    :resource/properties [:reputation]
    :resource/quality-title "Quality"
    :resource/quality-value 0
    :resource/power-title "Power"
    :resource/power-value 0
    :resource/description ""}
   {:title "Paladin of Heilm"
    :entity-type "resource"
    :resource/type "Affiliation"
    :resource/properties [:membership]
    :resource/quality-title "Quality"
    :resource/quality-value 0
    :resource/power-title "Power"
    :resource/power-value 0
    :resource/description ""}
   {:title "Mediker's Guild"
    :entity-type "resource"
    :resource/type "Affiliation"
    :resource/properties [:membership]
    :resource/quality-title "Quality"
    :resource/quality-value 0
    :resource/power-title "Power"
    :resource/power-value 0
    :resource/description ""}
   {:title "Arcanist's Guild"
    :entity-type "resource"
    :resource/type "Affiliation"
    :resource/properties [:membership]
    :resource/quality-title "Quality"
    :resource/quality-value 0
    :resource/power-title "Power"
    :resource/power-value 0
    :resource/description ""}
   {:title "Thieves' Guild"
    :entity-type "resource"
    :resource/type "Affiliation"
    :resource/properties [:membership]
    :resource/quality-title "Quality"
    :resource/quality-value 0
    :resource/power-title "Power"
    :resource/power-value 0
    :resource/description ""}
   {:title "Mentor"
    :entity-type "resource"
    :resource/type "Affiliation"
    :resource/properties [:friend]
    :resource/quality-title "Quality"
    :resource/quality-value 0
    :resource/power-title "Power"
    :resource/power-value 0
    :resource/description ""}
   {:title "Friend"
    :entity-type "resource"
    :resource/type "Affiliation"
    :resource/properties [:friend]
    :resource/quality-title "Quality"
    :resource/quality-value 0
    :resource/power-title "Power"
    :resource/power-value 0
    :resource/description ""}
   {:title "Enemy"
    :entity-type "resource"
    :resource/type "Affiliation"
    :resource/properties [:rival]
    :resource/quality-title "Quality"
    :resource/quality-value 0
    :resource/power-title "Power"
    :resource/power-value 0
    :resource/description ""}

   {:title "Healing Potion"
    :entity-type "resource"
    :resource/type "Item"
    :resource/properties []
    :resource/quality-title "Quality"
    :resource/quality-value 0
    :resource/power-title "Power"
    :resource/power-value 1
    :resource/description ""}
   {:title "Poison"
    :entity-type "resource"
    :resource/type "Item"
    :resource/properties []
    :resource/quality-title "Quality"
    :resource/quality-value 0
    :resource/power-title "Power"
    :resource/power-value 1
    :resource/description ""}
   {:title "Gold"
    :entity-type "resource"
    :resource/type "Item"
    :resource/properties []
    :resource/quality-title "Quality"
    :resource/quality-value 0
    :resource/power-title "Power"
    :resource/power-value 0
    :resource/description ""}])



(defn get-all-resources [conn]
  (let [resource-ids (map first (ds/q '[:find ?eid
                                       :where [?eid :entity-type "resource"]]
                                     @conn))]
    (ds/pull-many @conn '[*] resource-ids)))

(defn get-resource-by-id
  [conn resource-id]
  (ds/pull @conn '[*] resource-id))
