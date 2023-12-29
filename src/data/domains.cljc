(ns data.domains
  (:require [clojure.string :as str]
            [datascript.core :as ds]
            [data.conn :as conn]))

(def domains-schema
  [])

(def default-domains [{:domain/id #?(:cljs (random-uuid) :clj (java.util.UUID/randomUUID))
                       :domain/name "Physical"
                       :domain/resource-type-title "Equipment"
                       :domain/initiation-title "Coordination"
                       :domain/initiation-value 1
                       :domain/reaction-title "Reflexes"
                       :domain/reaction-value 1
                       :domain/continuation-title "Endurance"
                       :domain/continuation-value 1
                       :domain/dominance-title "Might"
                       :domain/dominance-value 6
                       :domain/competence-title "Finesse"
                       :domain/competence-value 6
                       :domain/resilience-title "Fortitude"
                       :domain/resilience-value 6
                       :domain/minor-wounds 0
                       :domain/moderate-wounds 0
                       :domain/major-wounds 0}

                      {:domain/id #?(:cljs (random-uuid) :clj (java.util.UUID/randomUUID))
                       :domain/name "Spiritual"
                       :domain/resource-type-title "Trait"
                       :domain/initiation-title "Exertion"
                       :domain/initiation-value 1
                       :domain/reaction-title "Instinct"
                       :domain/reaction-value 1
                       :domain/continuation-title "Perseverance"
                       :domain/continuation-value 1
                       :domain/dominance-title "Willpower"
                       :domain/dominance-value 6
                       :domain/competence-title "Discipline"
                       :domain/competence-value 6
                       :domain/resilience-title "Tenacity"
                       :domain/resilience-value 6
                       :domain/minor-wounds 0
                       :domain/moderate-wounds 0
                       :domain/major-wounds 0}

                      {:domain/id #?(:cljs (random-uuid) :clj (java.util.UUID/randomUUID))
                       :domain/name "Mental"
                       :domain/resource-type-title "Expertise"
                       :domain/initiation-title "Concentration"
                       :domain/initiation-value 1
                       :domain/reaction-title "Recognition"
                       :domain/reaction-value 1
                       :domain/continuation-title "Comprehension"
                       :domain/continuation-value 1
                       :domain/dominance-title "Intellect"
                       :domain/dominance-value 6
                       :domain/competence-title "Focus"
                       :domain/competence-value 6
                       :domain/resilience-title "Stability"
                       :domain/resilience-value 6
                       :domain/minor-wounds 0
                       :domain/moderate-wounds 0
                       :domain/major-wounds 0}

                      {:domain/id #?(:cljs (random-uuid) :clj (java.util.UUID/randomUUID))
                       :domain/name "Social"
                       :domain/resource-type-title "Affiliation"
                       :domain/initiation-title "Persuasion"
                       :domain/initiation-value 1
                       :domain/reaction-title "Insight"
                       :domain/reaction-value 1
                       :domain/continuation-title "Connections"
                       :domain/continuation-value 1
                       :domain/dominance-title "Presence"
                       :domain/dominance-value 6
                       :domain/competence-title "Wit"
                       :domain/competence-value 6
                       :domain/resilience-title "Poise"
                       :domain/resilience-value 6
                       :domain/minor-wounds 0
                       :domain/moderate-wounds 0
                       :domain/major-wounds 0}])

;; Queries

(defn get-domain-by-id
  [db domain-id]
  (ds/pull db '[*] domain-id))

(defn get-domains-by-creature
  [db creature-id]
  (ds/q '[:find (ds/pull-many db ["*"] ?domains)
          :in $ ?creature-id
          :where [?creature-id :creature/domains ?domains]]))

;; Transactions

(defn create-new-domain-instance
  [db domain-id]
  (ds/transact! db (get-domain-by-id db domain-id)))

(defn update-wound-value
  [db domain-id wound-severity update-fn]
  (let [wound-type-keyword (keyword (str "domain/" (str/lower-case wound-severity) "-wounds"))
        updated-wound-quantity (update-fn (ffirst (ds/q '[:find ?wound-quantity
                                                          :in $ ?id ?key
                                                          :where [?id ?key ?wound-quantity]]
                                                        db domain-id wound-type-keyword)))
        new-wound-quantity (if (> 0 updated-wound-quantity)
                             0
                             updated-wound-quantity)]
    (ds/transact! conn/conn [{:db/id domain-id
                              wound-type-keyword new-wound-quantity}])))
