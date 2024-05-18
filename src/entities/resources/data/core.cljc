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
    :resource/properties [], :resource/power-title "Power" :resource/description "" :title "Dagger", :resource/power-value 0, :resource/type "Equipment" :resource/quality-value 3}
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
   {:entity-type "resource" :resource/quality-title "Quality" :resource/properties [], :resource/power-title "Power" :resource/description "" :title "Leather Armor", :resource/power-value 2, :resource/type "Equipment" :resource/quality-value 1}])

(defn make-resource
  [title type properties q-value p-value description]
  {:title title
   :entity-type "\"resource\""
   :resource/type type
   :resource/properties properties
   :resource/quality-title "\"Quality\""
   :resource/quality-value q-value
   :resource/power-title "\"Power\""
   :resource/power-value p-value
   :resource/description description})

(println
 (map make-resource
      ["\"Dagger\"" "\"Shortsword\"" "\"Greatsword\"" "\"Handaxe\"" "\"Battle Axe\"" "\"Greataxe\"" "\"Javelin\"" "\"Spear\"" "\"Lance\"" "\"Hand Crossbow\"" "\"Crossbow\"" "\"Short Bow\"" "\"Longbow\"" "\"Great Bow\"" "\"Tower Shield\"" "\"Kite Shield\"" "\"Buckler\"" "\"Plate Armor\"" "\"Chain Maille\"" "\"Leather Armor\""]
      (repeat "\"Equipment\"")
      (repeat [])
      [3 2 0 2 1 0 2 1 0 3 1 3 2 1 1 2 3 -1 0 1]
      [0 1 3 1 2 3 1 2 3 0 2 0 1 2 3 2 1 4 3 2]
      (repeat "\"\"")))

(defn get-all-resources [conn]
  (let [resource-ids (map first (ds/q '[:find ?eid
                                       :where [?eid :entity-type "resource"]]
                                     @conn))]
    (ds/pull-many @conn '[*] resource-ids)))

(defn get-resource-by-id
  [conn resource-id]
  (ds/pull @conn '[*] resource-id))
