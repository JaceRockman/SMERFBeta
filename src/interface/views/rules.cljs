(ns interface.views.rules
  (:require [reagent.core :as r]
            ["react-native" :as rn]
            [data.rules :as rules-data]
            [interface.components.organization :as organization]
            [interface.styles.markdown :as markdown]
            [interface.widgets.text :as text]))

(defn screen-width [] (.-width js/screen))

(defn rules-details [db]
  (let [ruleset-data (rules-data/rule-details db "Simple Ruleset")]
    [:> rn/View
     {:style {:width "100%"
              :height "100%"}}
     [:> rn/ScrollView {:paging-enabled true
                        :horizontal :true
                        :shows-horizontal-scroll-indicator false
                        :shows-vertical-scroll-indicator false}
      (map (fn [data-keys section-title]
             [:> rn/ScrollView {:style {:width (screen-width)
                                        :height :auto}}
              (text/default-text {:style {:font-size 24} :text section-title})
              (markdown/default-markdown
               (apply str (interpose "\n" (vals (select-keys ruleset-data data-keys)))))])
           [[:ruleset/skill-check-overview
             :ruleset/skill-check-base-dice-pool
             :ruleset/skill-check-benefits-and-detriments
             :ruleset/skill-check-passive-checks]
            [:ruleset/encounter-overview
             :ruleset/encounter-actions
             :ruleset/encounter-moments
             :ruleset/encounter-rounds]
            [:ruleset/damage-overview
             :ruleset/damage-injuries
             :ruleset/damage-conditions
             :ruleset/damage-recover]
            [:ruleset/conditions-wounded
             :ruleset/conditions-incapacitated
             :ruleset/conditions-dead
             :ruleset/conditions-exhausted
             :ruleset/conditions-surprised
             :ruleset/conditions-blinded
             :ruleset/conditions-deafened
             :ruleset/conditions-constrained
             :ruleset/conditions-frightened]
            [:ruleset/stats-physical
             :ruleset/stats-spiritual
             :ruleset/stats-mental
             :ruleset/stats-social]]
           ["Skill Checks" "Encounters" "Damage" "Conditions" "Stats"])]]))

(defn rules [db ^js props]
  (organization/view-frame db (rules-details db)))
