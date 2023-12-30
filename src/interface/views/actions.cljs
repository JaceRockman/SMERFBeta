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

(defn action [db creature-id action-data]
  [:> rn/View {:style {:flex-direction :row :padding-top 10 :padding-bottom 10 :width "100%"}}
   [:> rn/Text {:style {:flex 3 :font-size 16 :color :white :align-self :center}} (:action/title action-data)]
   [:> rn/Text {:style {:flex 2 :font-size 16 :color :white :align-self :center}} (actions/dummy-roll-value)]
   [:> rn/Pressable {:style {:flex 1 :font-size 16 :color :white :align-self :center}
                     :on-press #(println "Rolled dice!")} "Roll!"]])

(defn action-list [db creature-id actions]
  [:> rn/View {:style {:width "100%"}}
   [:> rn/View {:style {:flex-direction :row}}
    [:> rn/Text {:style {:flex 3 :font-size 16 :color :white}} "Title"]
    [:> rn/Text {:style {:flex 2 :font-size 16 :color :white}} "Roll Value"]
    [:> rn/Text {:style {:flex 1 :font-size 16 :color :white}} "Start Roll"]]
   (section-divider)
   (interpose (section-divider) (map (fn [action-data] (action db creature-id action-data)) actions))
   (section-divider)])

(defn actions-details [db]
  (let [actions (actions/get-all-actions db)]
    [:> rn/View {:style {:background-color :black :flex :1 :width (screen-width) :align-items :center :align-text :center}}
     (action-list db nil actions)]))

(defn actions [db ^js props]
  (organization/view-frame db (actions-details db)))
