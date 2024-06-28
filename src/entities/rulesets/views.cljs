(ns entities.rulesets.views
  (:require [clojure.math :as math]
            [reagent.core :as r]
            ["react-native" :as rn]
            [entities.rulesets.data.interface :as ruleset-data]
            [entities.campaigns.data.interface :as campaign-data]
            [organisms.config :as config]
            [organisms.library :as components]))

(defn screen-width [] (.-width js/screen))

(defn ruleset-select
  [conn rulesets]
  (let [flex-vals [1 1]]
    (components/search-filter-sort-list
     {:items rulesets
      :column-headers ["Title" "Complexity"]
      :column-flex-vals flex-vals
      :item-format-fn (fn [ruleset-data]
                        [:> rn/Pressable {:style {:flex-direction :row}
                                          :on-press (fn []
                                                      (ruleset-data/set-active-ruleset
                                                       conn
                                                       (:id ruleset-data)))}
                         (components/default-text (:title ruleset-data) {:flex (nth flex-vals 0)})
                         (components/default-text (:complexity ruleset-data) {:flex (nth flex-vals 1)})])}
     "rulesets")))

(defn ruleset-details [conn ruleset-data]
  [:> rn/View
   {:style {:width  "100%"
            :height "100%"}}
   (components/scroll-position-indicator
    components/ruleset-horizontal-position
    ["Skill Checks" "Encounters" "Damage" "Conditions" "Stats"])
   [:> rn/ScrollView {:on-scroll                       #(reset! components/ruleset-horizontal-position (math/round (/ (get-in (js->clj %) ["nativeEvent" "contentOffset" "x"]) 412)))
                      :scrollEventThrottle             32
                      :paging-enabled                  true
                      :horizontal                      true
                      :showsHorizontalScrollIndicator  false
                      :shows-vertical-scroll-indicator false}
    (map (fn [data-keys section-title]
           [:> rn/ScrollView {:style {:width  (screen-width)
                                      :height :auto}}
            (components/default-text section-title {:font-size 24})
            (components/default-markdown conn
                                         (apply str (interpose "\n" (vals (select-keys ruleset-data data-keys)))))])
         [[:ruleset/skill-check-overview
           :ruleset/skill-check-base-dice-pool
           :ruleset/skill-check-benefits-and-detriments
           :ruleset/complex-actions
           :ruleset/careful-and-reckless-actions
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
         ["Skill Checks" "Encounters" "Damage" "Conditions" "Stats"])]])

(defn rules-home
  [conn]
  (let [active-campaign-data (campaign-data/get-active-campaign conn)
        active-ruleset-data (ruleset-data/get-active-ruleset conn)]
    (cond
      active-ruleset-data (ruleset-details conn active-ruleset-data)
      active-campaign-data (ruleset-select conn (campaign-data/get-active-campaign-rulesets conn))
      :else (ruleset-select conn (ruleset-data/get-all-rulesets conn)))))

(defn rules [conn ^js props]
  (components/view-frame conn (rules-home conn)))
