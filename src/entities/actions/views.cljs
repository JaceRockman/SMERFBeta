(ns entities.actions.views
  (:require [clojure.math :as math]
            [reagent.core :as r]
            ["react-native" :as rn]
            [entities.actions.data.interface :as action-data]
            [entities.creatures.data.interface :as creature-data]
            [entities.creatures.views.stats :as creature-stats-view]
            [organisms.config :refer [screen-width]]
            [organisms.environments.modals :as modals]
            [organisms.library :as components]))

(defn sort-by-domain
  [actions]
  (let [filter-by-skills (fn [actions skills]
                          (filter (fn [action]
                                    (some #(= (:action/skill action) %)
                                          skills))
                                  actions))
        physical-actions (filter-by-skills actions ["Coordination" "Reflexes" "Endurance"]) 
        spiritual-actions (filter-by-skills actions ["Exertion" "Instinct" "Perseverance"])
        mental-actions (filter-by-skills actions ["Concentration" "Recognition" "Comprehension"])
        social-actions (filter-by-skills actions ["Persuasion" "Insight" "Connections"])]
    [{:title "Physical" :data physical-actions}
     {:title "Spiritual" :data spiritual-actions}
     {:title "Mental" :data mental-actions}
     {:title "Social" :data social-actions}]))

(defn construct-roll
  [conn action-data creature-id]
  (println (creature-data/get-creature conn creature-id))
  (components/indicated-scroll-view
   components/roll-horizontal-position
   ["Stats" "Resources" "Modifiers" "Shards" "SplitOrMerge"]
   [(creature-stats-view/stats-picker conn (creature-data/get-creature conn creature-id) (:id action-data))
    [:> rn/View {:style {:width (screen-width)}}]
    [:> rn/View {:style {:width (screen-width)}}]
    [:> rn/View {:style {:width (screen-width)}}]
    [:> rn/View {:style {:width (screen-width)}}]]))

(defn action-constructor [conn flex-vals creature-id]
  (fn [action-data] [:> rn/View {:style {:flex-direction :row :padding-top 10 :padding-bottom 10 :width "100%"}}
                     (components/default-text (:title action-data)
                                              {:flex (nth flex-vals 0) :font-size 16 :align-self :center})
                     (components/default-text (action-data/dummy-roll-value)
                                              {:flex (nth flex-vals 1) :font-size 16 :align-self :center})
                     [:> rn/Pressable {:style {:flex (nth flex-vals 2) :font-size 16 :align-self :center}
                                       :on-press #(reset! modals/modal-content {:fn construct-roll :args [conn action-data creature-id]})}
                      (components/default-text "Roll!")]]))

(defn action-list
  [conn {:keys [id actions header collapsed? creature-id]}]
  (let [flex-vals [2 1 1]]
    (components/search-filter-sort-list
     {:list-header      header
      :collapsed?       collapsed?
      :items            actions
      :column-headers   ["Title" "Roll Value" "Start Roll"]
      :column-flex-vals flex-vals
      :item-format-fn   (action-constructor conn flex-vals creature-id)
      :sort-fns         [sort-by-domain]}
     (str id "actions"))))

(defn actions-details [conn]
  (let [actions (action-data/get-all-actions conn)]
    [:> rn/View {:style {:flex :1 :width (screen-width) :align-items :center :align-text :center}}
     (action-list conn {:actions actions})]))

(defn actions [conn ^js props]
  (components/view-frame conn (actions-details conn)))
