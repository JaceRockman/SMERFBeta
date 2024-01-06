(ns interface.views.actions
  (:require [reagent.core :as r]
            ["react-native" :as rn]
            [data.realms :as realms]
            [data.actions :as actions]
            [interface.styles.text :refer [view-header-style]]
            [interface.components.navigation :as navigation]
            [interface.components.organization :as organization]))

(defn screen-width [] (.-width js/screen))

(defn section-divider []
  [:> rn/View {:style {:background-color :lavender :width "80%" :height 2 :align-self :center}}])



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

(defn action-constructor [action-data]
  (println action-data)
  [:> rn/View {:style {:flex-direction :row :padding-top 10 :padding-bottom 10 :width "100%"}}
   [:> rn/Text {:style {:flex 3 :font-size 16 :align-self :center}} (:title action-data)]
   [:> rn/Text {:style {:flex 2 :font-size 16 :align-self :center}} (actions/dummy-roll-value)]
   [:> rn/Pressable {:style {:flex 1 :font-size 16 :align-self :center}
                     :on-press #(println "Rolled dice!")} "Roll!"]])

(defn action-list [db creature-id actions]
  [:> rn/View {:style {:width "100%"}}
   [:> rn/View {:style {:flex-direction :row}}
    [:> rn/Text {:style {:flex 3 :font-size 16}} "Title"]
    [:> rn/Text {:style {:flex 2 :font-size 16}} "Roll Value"]
    [:> rn/Text {:style {:flex 1 :font-size 16}} "Start Roll"]]
   (section-divider)
   (interpose (section-divider) (map (fn [action-data] (action-constructor action-data)) actions))
   (section-divider)]
  (println actions)
  (navigation/search-filter-sort-list
   {:items actions
    :column-headers ["Title" "Roll Value" "Start Roll"]
    :column-flex-vals [3 2 1]
    :item-format-fn action-constructor
    :sort-fns [sort-by-domain]}))

(defn actions-details [db]
  (let [actions (actions/get-all-actions db)]
    [:> rn/View {:style {:flex :1 :width (screen-width) :align-items :center :align-text :center}}
     (action-list db nil actions)]))

(defn actions [db ^js props]
  (organization/view-frame db (actions-details db)))
