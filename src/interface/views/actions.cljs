(ns interface.views.actions
  (:require [reagent.core :as r]
            ["react-native" :as rn]
            [data.realms :as realms]
            [data.actions :as actions]
            [interface.styles.text :refer [view-header-style]]
            [interface.components.navigation :as navigation]
            [interface.components.organization :as organization]))

(defn action [db creature-id action-data]
  [:> rn/View {:style {:flex-direction :row :background-color :grey}}
    [:> rn/Text {:style {:flex 3 :font-size 16}} (:action/title action-data)]
    [:> rn/Text {:style {:flex 2 :font-size 16}} (actions/dummy-roll-value)]
    [:> rn/Text {:style {:flex 2 :font-size 16}} "Roll!"]])

(defn action-list [db creature-id actions]
  [:> rn/View
   [:> rn/View {:style {:flex-direction :row :background-color :grey}}
    [:> rn/Text {:style {:flex 3 :font-size 16}} "Title"]
    [:> rn/Text {:style {:flex 2 :font-size 16}} "Roll Value"]
    [:> rn/Text {:style {:flex 2 :font-size 16}} "Start Roll"]]
   [:> rn/View {:style {:background-color :black :padding 5}} 
    (map (fn [action-data] (action db creature-id action-data)) actions)]])

(defn actions-details []
  [:> rn/View {:style {:flex :1}}
   [:> rn/Text "Actions Details"]])

(defn actions [db ^js props]
  (organization/view-frame db (actions-details)))
