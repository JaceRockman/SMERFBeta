(ns entities.rulesets.views
  (:require [clojure.math :as math]
            [reagent.core :as r]
            ["react-native" :as rn]
            ["@expo/vector-icons" :refer [Entypo]]
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
                         (components/default-text {:style {:flex (nth flex-vals 0)} :text (:title ruleset-data)})
                         (components/default-text {:style {:flex (nth flex-vals 1)} :text (:complexity ruleset-data)})])}
     "rulesets")))

(def ruleset-horizontal-position (r/atom 0))

(defn ruleset-details [conn ruleset-data]
  (let [ruleset-sections ["Skill Checks" "Encounters" "Damage" "Conditions" "Stats"]]
    [:> rn/View
     {:style {:width  "100%"
              :height "100%"}}
     [:> rn/View {:style {:width "100%" :align-items :center :justify-content :center :flex-direction :row :gap 3}}
      (doall (map (fn [section]
                    (println @ruleset-horizontal-position)
                    [:> Entypo {:name "dot-single" :color (if (= section (get ruleset-sections @ruleset-horizontal-position)) :white "rgba(255, 255, 255, 0.5)") :size 20}])
                  ruleset-sections))]
     [:> rn/ScrollView {:on-scroll                       #(reset! ruleset-horizontal-position (math/round (/ (get-in (js->clj %) ["nativeEvent" "contentOffset" "x"]) 412)))
                        :scrollEventThrottle             32
                        :paging-enabled                  true
                        :horizontal                      :true
                        :showsHorizontalScrollIndicator  true
                        :shows-vertical-scroll-indicator false}
      (map (fn [data-keys section-title]
             [:> rn/ScrollView {:style {:width  (screen-width)
                                        :height :auto}}
              (components/default-text {:style {:font-size 24} :text section-title})
              (components/default-markdown conn
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

(defn rules-home
  [conn]
  (let [active-campaign-data (campaign-data/get-active-campaign conn)
        active-ruleset-data (ruleset-data/get-active-ruleset conn)]
    (cond
      active-ruleset-data (ruleset-details conn active-ruleset-data)
      active-campaign-data (ruleset-select conn (campaign-data/get-active-campaign-rules conn))
      :else (ruleset-select conn (ruleset-data/get-all-rulesets conn)))))

(defn rules [conn ^js props]
  (components/view-frame conn (rules-home conn)))
