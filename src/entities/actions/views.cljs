(ns entities.actions.views
  (:require [reagent.core :as r]
            ["react-native" :as rn]
            [entities.actions.data.interface :as action-data]
            [organisms.config :refer [screen-width]]
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

(defn action-constructor [flex-vals]
  (fn [action-data] [:> rn/View {:style {:flex-direction :row :padding-top 10 :padding-bottom 10 :width "100%"}}
                     (components/default-text (:title action-data)
                                              {:flex (nth flex-vals 0) :font-size 16 :align-self :center})
                     (components/default-text (action-data/dummy-roll-value)
                                              {:flex (nth flex-vals 1) :font-size 16 :align-self :center})
                     [:> rn/Pressable {:style {:flex (nth flex-vals 2) :font-size 16 :align-self :center}
                                       :on-press #(println "Rolled dice!")}
                      (components/default-text "Roll!")]]))

(defn action-list [conn {:keys [id actions header collapsed?]}]
  (let [flex-vals [2 1 1]]
    (components/search-filter-sort-list
     {:list-header      header
      :collapsed?       collapsed?
      :items            actions
      :column-headers   ["Title" "Roll Value" "Start Roll"]
      :column-flex-vals flex-vals
      :item-format-fn   (action-constructor flex-vals)
      :sort-fns         [sort-by-domain]}
     (str id "actions"))))

(defn actions-details [conn]
  (let [actions (action-data/get-all-actions conn)]
    [:> rn/View {:style {:flex :1 :width (screen-width) :align-items :center :align-text :center}}
     (action-list conn {:actions actions})]))

(defn actions [conn ^js props]
  (components/view-frame conn (actions-details conn)))
