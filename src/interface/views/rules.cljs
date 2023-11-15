(ns interface.views.rules
  (:require [reagent.core :as r]
            ["react-native" :as rn]
            [data.rules :as rules-data]
            [interface.components.organization :as organization]
            [interface.styles.markdown :refer [Markdown]]))

(defn rules-details [db]
  (let [ruleset-data (rules-data/rule-details db "Simple Ruleset")]
    [:> rn/ScrollView {:style {:flex :1}}
     [:> Markdown (apply str (interpose "\n" (vals (select-keys ruleset-data
                                                                [:ruleset/skill-check-overview
                                                                 :ruleset/skill-check-base-dice-pool
                                                                 :ruleset/skill-check-benefits-and-detriments
                                                                 :ruleset/skill-check-passive-checks]))))]
     [:> Markdown (apply str (interpose "\n" (vals (select-keys ruleset-data
                                                                [:ruleset/encounter-overview
                                                                 :ruleset/encounter-actions
                                                                 :ruleset/encounter-moments
                                                                 :ruleset/encounter-rounds]))))]
     [:> Markdown (apply str (interpose "\n" (vals (select-keys ruleset-data
                                                                [:ruleset/damage-overview
                                                                 :ruleset/damage-injuries
                                                                 :ruleset/damage-conditions
                                                                 :ruleset/damage-recover]))))]
     [:> Markdown (apply str (interpose "\n" (vals (select-keys ruleset-data
                                                                [:ruleset/conditions-wounded
                                                                 :ruleset/conditions-incapacitated
                                                                 :ruleset/conditions-dead
                                                                 :ruleset/conditions-exhausted
                                                                 :ruleset/conditions-surprised
                                                                 :ruleset/conditions-blinded
                                                                 :ruleset/conditions-deafened
                                                                 :ruleset/conditions-constrained
                                                                 :ruleset/conditions-frightened]))))]
     [:> Markdown (apply str (interpose "\n" (vals (select-keys ruleset-data
                                                                [:ruleset/stats-physical
                                                                 :ruleset/stats-spiritual
                                                                 :ruleset/stats-mental
                                                                 :ruleset/social]))))]]))

(defn rules [db ^js props]
  (organization/view-frame db (rules-details db)))
