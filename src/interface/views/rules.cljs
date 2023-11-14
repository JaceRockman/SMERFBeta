(ns interface.views.rules
  (:require [reagent.core :as r]
            ["react-native" :as rn]
            [data.app-state :as app-state]
            [data.realms :as realms]
            [interface.styles.text :refer [view-header-style]]
            [interface.components.navigation :as navigation]
            [interface.components.organization :as organization]
            [interface.widgets.buttons :refer [button]]
            [data.rules :as rules-data]))

(def Markdown (.-default (js/require "react-native-markdown-display")))

(defn link-click [text] (fn [] (app-state/navigate [:setting (keyword text)])))

(def setting-rules
  {:link (fn [node children parent styles]
           (r/as-element
            (button {:on-press (link-click (-> node .-attributes .-href))}
                    (-> node .-children first .-content))))})

(defn rules-details [db]
  (println (keys (rules-data/rule-details db "Simple Ruleset")))
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
