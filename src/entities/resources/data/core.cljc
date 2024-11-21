(ns entities.resources.data.core
  (:require [datascript.core :as ds]))

(def resource-properties [{:db/ident :resource-property/light}
                          {:db/ident :resource-property/medium}
                          {:db/ident :resource-property/heavy}])

(defn example-resources
  [example-actions]
  [{:resource-property/title "light"
    :db/ident :resource-property/light
    :entity-type "resource-property"}
   {:resource-property/title "medium"
    :db/ident :resource-property/medium
    :entity-type "resource-property"}
   {:resource-property/title "heavy"
    :db/ident :resource-property/heavy
    :entity-type "resource-property"}
   {:resource-property/title "virtue"
    :db/ident :resource-property/virtue
    :entity-type "resource-property"}
   {:resource-property/title "ideal"
    :db/ident :resource-property/ideal
    :entity-type "resource-property"}
   {:resource-property/title "vice"
    :db/ident :resource-property/vice
    :entity-type "resource-property"}
   {:resource-property/title "goal"
    :db/ident :resource-property/goal
    :entity-type "resource-property"}
   {:resource-property/title "virtue"
    :db/ident :resource-property/virtue
    :entity-type "resource-property"}
   {:resource-property/title "training"
    :db/ident :resource-property/training
    :entity-type "resource-property"}
   {:resource-property/title "reputation"
    :db/ident :resource-property/reputation
    :entity-type "resource-property"}
   {:resource-property/title "membership"
    :db/ident :resource-property/membership
    :entity-type "resource-property"}
   {:resource-property/title "friend"
    :db/ident :resource-property/friend
    :entity-type "resource-property"}
   {:resource-property/title "rival"
    :db/ident :resource-property/rival
    :entity-type "resource-property"}
   {:title                  "Longsword"
    :entity-type            "resource"
    :resource/type          "Equipment"
    :resource/properties    [:resource-property/medium]
    :resource/actions       (concat example-actions example-actions example-actions)
    :resource/quality-title "Quality"
    :resource/quality-value "2"
    :resource/power-title   "Power"
    :resource/power-value   "2"
    :resource/flavor-text   "A standard longsword used in battle."}

   {:title                  "Leather Armor"
    :entity-type            "resource"
    :resource/type          "Equipment"
    :resource/properties    [:resource-property/light]
    :resource/quality-title "Quality"
    :resource/quality-value "3"
    :resource/power-title   "Power"
    :resource/power-value   "1"
    :resource/flavor-text   "Standard leather armor used in battle."}

   {:title                  "Virtue: Bravery"
    :entity-type            "resource"
    :resource/type          "Trait"
    :resource/properties    []
    :resource/quality-title "Quality"
    :resource/quality-value "1"
    :resource/power-title   "Power"
    :resource/power-value   "3"
    :resource/flavor-text   "You are not only capable of overcoming your fears to take action, but you thrive in that high pressure situation."}

   {:title                  "Training: Soldier"
    :entity-type            "resource"
    :resource/type          "Expertise"
    :resource/properties    []
    :resource/quality-title "Quality"
    :resource/quality-value "2"
    :resource/power-title   "Power"
    :resource/power-value   "2"
    :resource/flavor-text   "You have experience serving as a soldier in the King's military"}

   {:title                  "Membership: Mercenary's Guild"
    :entity-type            "resource"
    :resource/type          "Affiliation"
    :resource/properties    []
    :resource/quality-title "Quality"
    :resource/quality-value "1"
    :resource/power-title   "Power"
    :resource/power-value   "1"
    :resource/flavor-text   "Membership in the Mercenary's Guild can gain you access to quests, equipment, training, assistance, etc."}
   {:entity-type "resource"
    :resource/quality-title "Quality"
    :resource/properties []
    :resource/power-title "Power"
    :resource/flavor-text ""
    :title "Dagger"
    :resource/power-value 0
    :resource/type "Equipment"
    :resource/quality-value 3}
   {:entity-type "resource" :resource/quality-title "Quality" :resource/properties [], :resource/power-title "Power" :resource/flavor-text "" :title "Shortsword", :resource/power-value 1, :resource/type "Equipment" :resource/quality-value 2}
   {:entity-type "resource" :resource/quality-title "Quality" :resource/properties [], :resource/power-title "Power" :resource/flavor-text "" :title "Greatsword", :resource/power-value 3, :resource/type "Equipment" :resource/quality-value 0}
   {:entity-type "resource" :resource/quality-title "Quality" :resource/properties [], :resource/power-title "Power" :resource/flavor-text "" :title "Handaxe", :resource/power-value 1, :resource/type "Equipment" :resource/quality-value 2}
   {:entity-type "resource" :resource/quality-title "Quality" :resource/properties [], :resource/power-title "Power" :resource/flavor-text "" :title "Battle Axe", :resource/power-value 2, :resource/type "Equipment" :resource/quality-value 1}
   {:entity-type "resource" :resource/quality-title "Quality" :resource/properties [], :resource/power-title "Power" :resource/flavor-text "" :title "Greataxe", :resource/power-value 3, :resource/type "Equipment" :resource/quality-value 0}
   {:entity-type "resource" :resource/quality-title "Quality" :resource/properties [], :resource/power-title "Power" :resource/flavor-text "" :title "Javelin", :resource/power-value 1, :resource/type "Equipment" :resource/quality-value 2}
   {:entity-type "resource" :resource/quality-title "Quality" :resource/properties [], :resource/power-title "Power" :resource/flavor-text "" :title "Spear", :resource/power-value 2, :resource/type "Equipment" :resource/quality-value 1}
   {:entity-type "resource" :resource/quality-title "Quality" :resource/properties [], :resource/power-title "Power" :resource/flavor-text "" :title "Lance", :resource/power-value 3, :resource/type "Equipment" :resource/quality-value 0}
   {:entity-type "resource" :resource/quality-title "Quality" :resource/properties [], :resource/power-title "Power" :resource/flavor-text "" :title "Hand Crossbow", :resource/power-value 0, :resource/type "Equipment" :resource/quality-value 3}
   {:entity-type "resource" :resource/quality-title "Quality" :resource/properties [], :resource/power-title "Power" :resource/flavor-text "" :title "Crossbow", :resource/power-value 2, :resource/type "Equipment" :resource/quality-value 1}
   {:entity-type "resource" :resource/quality-title "Quality" :resource/properties [], :resource/power-title "Power" :resource/flavor-text "" :title "Short Bow", :resource/power-value 0, :resource/type "Equipment" :resource/quality-value 3}
   {:entity-type "resource" :resource/quality-title "Quality" :resource/properties [], :resource/power-title "Power" :resource/flavor-text "" :title "Longbow", :resource/power-value 1, :resource/type "Equipment" :resource/quality-value 2}
   {:entity-type "resource" :resource/quality-title "Quality" :resource/properties [], :resource/power-title "Power" :resource/flavor-text "" :title "Great Bow", :resource/power-value 2, :resource/type "Equipment" :resource/quality-value 1}
   {:entity-type "resource" :resource/quality-title "Quality" :resource/properties [], :resource/power-title "Power" :resource/flavor-text "" :title "Tower Shield", :resource/power-value 3, :resource/type "Equipment" :resource/quality-value 1}
   {:entity-type "resource" :resource/quality-title "Quality" :resource/properties [], :resource/power-title "Power" :resource/flavor-text "" :title "Kite Shield", :resource/power-value 2, :resource/type "Equipment" :resource/quality-value 2}
   {:entity-type "resource" :resource/quality-title "Quality" :resource/properties [], :resource/power-title "Power" :resource/flavor-text "" :title "Buckler", :resource/power-value 1, :resource/type "Equipment" :resource/quality-value 3}
   {:entity-type "resource" :resource/quality-title "Quality" :resource/properties [], :resource/power-title "Power" :resource/flavor-text "" :title "Plate Armor", :resource/power-value 4, :resource/type "Equipment" :resource/quality-value -1}
   {:entity-type "resource" :resource/quality-title "Quality" :resource/properties [], :resource/power-title "Power" :resource/flavor-text "" :title "Chain Maille", :resource/power-value 3, :resource/type "Equipment" :resource/quality-value 0}
   {:entity-type "resource" :resource/quality-title "Quality" :resource/properties [], :resource/power-title "Power" :resource/flavor-text "" :title "Leather Armor", :resource/power-value 2, :resource/type "Equipment" :resource/quality-value 1}
   {:title "Climber's Kit"
    :entity-type "resource"
    :resource/type "Equipment"
    :resource/properties []
    :resource/quality-title "Quality"
    :resource/quality-value 1
    :resource/power-title "Power"
    :resource/power-value 2
    :resource/flavor-text ""}
   {:title "Climber's Kit"
    :entity-type "resource"
    :resource/type "Equipment"
    :resource/properties []
    :resource/quality-title "Quality"
    :resource/quality-value 1
    :resource/power-title "Power"
    :resource/power-value 2
    :resource/flavor-text ""}
   {:title "Thieves' Kit"
    :entity-type "resource"
    :resource/type "Equipment"
    :resource/properties []
    :resource/quality-title "Quality"
    :resource/quality-value 2
    :resource/power-title "Power"
    :resource/power-value 1
    :resource/flavor-text ""}
   {:title "Mediker's Kit"
    :entity-type "resource"
    :resource/type "Equipment"
    :resource/properties []
    :resource/quality-title "Quality"
    :resource/quality-value 1
    :resource/power-title "Power"
    :resource/power-value 2
    :resource/flavor-text ""}
   {:title "Rites and Runes of the Eldari"
    :entity-type "resource"
    :resource/type "Equipment"
    :resource/properties []
    :resource/quality-title "Quality"
    :resource/quality-value 1
    :resource/power-title "Power"
    :resource/power-value 1
    :resource/flavor-text ""}

   {:title "Bravery"
    :entity-type "resource"
    :resource/type "Trait"
    :resource/properties [:resource-property/virtue]
    :resource/quality-title "Quality"
    :resource/quality-value 0
    :resource/power-title "Power"
    :resource/power-value 0
    :resource/flavor-text ""}
   {:title "Life"
    :entity-type "resource"
    :resource/type "Trait"
    :resource/properties [:resource-property/ideal]
    :resource/quality-title "Quality"
    :resource/quality-value 0
    :resource/power-title "Power"
    :resource/power-value 0
    :resource/flavor-text ""}
   {:title "Knowledge"
    :entity-type "resource"
    :resource/type "Trait"
    :resource/properties [:resource-property/virtue]
    :resource/quality-title "Quality"
    :resource/quality-value 0
    :resource/power-title "Power"
    :resource/power-value 0
    :resource/flavor-text ""}
   {:title "Protective"
    :entity-type "resource"
    :resource/type "Trait"
    :resource/properties [:resource-property/virtue]
    :resource/quality-title "Quality"
    :resource/quality-value 0
    :resource/power-title "Power"
    :resource/power-value 0
    :resource/flavor-text ""}
   {:title "Greedy"
    :entity-type "resource"
    :resource/type "Trait"
    :resource/properties [:resource-property/vice]
    :resource/quality-title "Quality"
    :resource/quality-value 0
    :resource/power-title "Power"
    :resource/power-value 0
    :resource/flavor-text ""}
   {:title "Alcoholic"
    :entity-type "resource"
    :resource/type "Trait"
    :resource/properties [:resource-property/vice]
    :resource/quality-title "Quality"
    :resource/quality-value 0
    :resource/power-title "Power"
    :resource/power-value 0
    :resource/flavor-text ""}
   {:title "Selfish"
    :entity-type "resource"
    :resource/type "Trait"
    :resource/properties [:resource-property/vice]
    :resource/quality-title "Quality"
    :resource/quality-value 0
    :resource/power-title "Power"
    :resource/power-value 0
    :resource/flavor-text ""}
   {:title "Spread the Faith"
    :entity-type "resource"
    :resource/type "Trait"
    :resource/properties [:resource-property/goal]
    :resource/quality-title "Quality"
    :resource/quality-value 0
    :resource/power-title "Power"
    :resource/power-value 0
    :resource/flavor-text ""}
   {:title "Uncover Forgotten Magics"
    :entity-type "resource"
    :resource/type "Trait"
    :resource/properties [:resource-property/goal]
    :resource/quality-title "Quality"
    :resource/quality-value 0
    :resource/power-title "Power"
    :resource/power-value 0
    :resource/flavor-text ""}

   {:title "Scout"
    :entity-type "resource"
    :resource/type "Expertise"
    :resource/properties [:resource-property/training]
    :resource/quality-title "Quality"
    :resource/quality-value 0
    :resource/power-title "Power"
    :resource/power-value 0
    :resource/flavor-text ""}
   {:title "Soldier"
    :entity-type "resource"
    :resource/type "Expertise"
    :resource/properties [:resource-property/training]
    :resource/quality-title "Quality"
    :resource/quality-value 0
    :resource/power-title "Power"
    :resource/power-value 0
    :resource/flavor-text ""}
   {:title "Sentinel"
    :entity-type "resource"
    :resource/type "Expertise"
    :resource/properties [:resource-property/training]
    :resource/quality-title "Quality"
    :resource/quality-value 0
    :resource/power-title "Power"
    :resource/power-value 0
    :resource/flavor-text ""}
   {:title "Aethrology"
    :entity-type "resource"
    :resource/type "Expertise"
    :resource/properties [:resource-property/knowledge]
    :resource/quality-title "Quality"
    :resource/quality-value 0
    :resource/power-title "Power"
    :resource/power-value 0
    :resource/flavor-text ""}
   {:title "Medicine"
    :entity-type "resource"
    :resource/type "Expertise"
    :resource/properties [:resource-property/knowledge]
    :resource/quality-title "Quality"
    :resource/quality-value 0
    :resource/power-title "Power"
    :resource/power-value 0
    :resource/flavor-text ""}
   {:title "History"
    :entity-type "resource"
    :resource/type "Expertise"
    :resource/properties [:resource-property/knowledge]
    :resource/quality-title "Quality"
    :resource/quality-value 0
    :resource/power-title "Power"
    :resource/power-value 0
    :resource/flavor-text ""}
   {:title "Light Fingers"
    :entity-type "resource"
    :resource/type "Expertise"
    :resource/properties [:resource-property/talent]
    :resource/quality-title "Quality"
    :resource/quality-value 0
    :resource/power-title "Power"
    :resource/power-value 0
    :resource/flavor-text ""}
   {:title "Light Footed"
    :entity-type "resource"
    :resource/type "Expertise"
    :resource/properties [:resource-property/talent]
    :resource/quality-title "Quality"
    :resource/quality-value 0
    :resource/power-title "Power"
    :resource/power-value 0
    :resource/flavor-text ""}

   {:title "Adventurer"
    :entity-type "resource"
    :resource/type "Affiliation"
    :resource/properties [:resource-property/reputation]
    :resource/quality-title "Quality"
    :resource/quality-value 0
    :resource/power-title "Power"
    :resource/power-value 0
    :resource/flavor-text ""}
   {:title "Paladin of Heilm"
    :entity-type "resource"
    :resource/type "Affiliation"
    :resource/properties [:resource-property/membership]
    :resource/quality-title "Quality"
    :resource/quality-value 0
    :resource/power-title "Power"
    :resource/power-value 0
    :resource/flavor-text ""}
   {:title "Mediker's Guild"
    :entity-type "resource"
    :resource/type "Affiliation"
    :resource/properties [:resource-property/membership]
    :resource/quality-title "Quality"
    :resource/quality-value 0
    :resource/power-title "Power"
    :resource/power-value 0
    :resource/flavor-text ""}
   {:title "Arcanist's Guild"
    :entity-type "resource"
    :resource/type "Affiliation"
    :resource/properties [:resource-property/membership]
    :resource/quality-title "Quality"
    :resource/quality-value 0
    :resource/power-title "Power"
    :resource/power-value 0
    :resource/flavor-text ""}
   {:title "Thieves' Guild"
    :entity-type "resource"
    :resource/type "Affiliation"
    :resource/properties [:resource-property/membership]
    :resource/quality-title "Quality"
    :resource/quality-value 0
    :resource/power-title "Power"
    :resource/power-value 0
    :resource/flavor-text ""}
   {:title "Mentor"
    :entity-type "resource"
    :resource/type "Affiliation"
    :resource/properties [:resource-property/friend]
    :resource/quality-title "Quality"
    :resource/quality-value 0
    :resource/power-title "Power"
    :resource/power-value 0
    :resource/flavor-text ""}
   {:title "Friend"
    :entity-type "resource"
    :resource/type "Affiliation"
    :resource/properties [:resource-property/friend]
    :resource/quality-title "Quality"
    :resource/quality-value 0
    :resource/power-title "Power"
    :resource/power-value 0
    :resource/flavor-text ""}
   {:title "Enemy"
    :entity-type "resource"
    :resource/type "Affiliation"
    :resource/properties [:resource-property/rival]
    :resource/quality-title "Quality"
    :resource/quality-value 0
    :resource/power-title "Power"
    :resource/power-value 0
    :resource/flavor-text ""}

   {:title "Healing Potion"
    :entity-type "resource"
    :resource/type "Item"
    :resource/properties []
    :resource/quality-title "Quality"
    :resource/quality-value 0
    :resource/power-title "Power"
    :resource/power-value 1
    :resource/flavor-text ""}
   {:title "Poison"
    :entity-type "resource"
    :resource/type "Item"
    :resource/properties []
    :resource/quality-title "Quality"
    :resource/quality-value 0
    :resource/power-title "Power"
    :resource/power-value 1
    :resource/flavor-text ""}
   {:title "Gold"
    :entity-type "resource"
    :resource/type "Item"
    :resource/properties []
    :resource/quality-title "Quality"
    :resource/quality-value 0
    :resource/power-title "Power"
    :resource/power-value 0
    :resource/flavor-text ""}])

(defn get-all-resources [conn]
  (let [resource-ids (map first (ds/q '[:find ?eid
                                       :where [?eid :entity-type "resource"]]
                                     @conn))]
    (ds/pull-many @conn '[*] resource-ids)))

(defn get-all-resource-properties
  [conn]
  (ds/pull-many @conn '[*]
                (map first (ds/q '[:find ?eid
                                   :where [?eid :entity-type "resource-property"]]
                                 @conn))))

(defn get-resources-by-id
  [conn resource-ids]
  (ds/pull-many @conn '[*] resource-ids))

(defn get-resource-by-id
  [conn resource-id]
  (ds/pull @conn '[*] resource-id))

(defn get-resource-actions
  [conn resource-id]
  (let [result (ds/pull-many @conn '[*]
                             (map first (ds/q '[:find ?eid
                                                :in $ ?id
                                                :where [?eid :action/resources ?id]]
                     @conn resource-id)))]
    result))

(defn create-resource
  [conn resource-data]
  (ds/transact! conn resource-data))

(defn fffirst
  [x]
  (-> x first first first))

(defn get-resource-from-creature-resource
  [conn creature-resource-id]
  (:creature-resource/resource (ds/pull @conn '[:creature-resource/resource] creature-resource-id)))

(defn get-quantity-from-creature-resource
  [conn creature-resource-id]
  (:creature-resource/quantity (ds/pull @conn '[:creature-resource/quantity] creature-resource-id)))

(defn update-creature-resource-quantity
  [conn creature-id creature-resource-id update-fn]
  (let [current-quantity (ffirst (ds/q '[:find ?quantity
                                 :in $ ?creature-resource-id
                                 :where [?creature-resource-id :creature-resource/quantity ?quantity]]
                               @conn creature-resource-id))
        new-quantity (if (nil? current-quantity)
                       (update-fn 0)
                       (update-fn current-quantity))]
    (ds/transact! conn [{:db/id creature-resource-id
                         :creature-resource/quantity new-quantity}])))
