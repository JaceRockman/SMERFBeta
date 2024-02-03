(ns interface.views.home
  (:require
   [data.app-state :as app-state]
   [data.campaigns :as campaigns]
   [datascript.core :as ds]
   [interface.widgets.buttons :refer [button]]
   [interface.components.navigation :as navigation]
   [reagent.core :as r]
   ["react-native" :as rn]
   ["expo-status-bar" :refer [StatusBar]]))

(defonce avis-industries-splash (js/require "../assets/avis-industries.png"))

(def menu-state (r/atom false))

(defn menu-bar []
  [:> rn/View {:style {:background-color :black}}
   [button {:style {:background-color :green}
            :on-press #(swap! menu-state not)}
    "Menu"]])




(defn home [db ^js props]
  (let [existing-campaigns (campaigns/get-details-for-all-campaigns db)]
    [:> rn/View {:style {:flex 1
                         :padding-vertical 50
                         :padding-horizontal 20
                         :justify-content :space-between
                         :align-items :center
                         :background-color :white}}
     [:> rn/View
      [:> rn/View {:style {:flex-direction :row
                           :align-items :center
                           :margin-bottom 20}}
       [:> rn/Image {:style {:width  100
                             :height 100}
                     :source avis-industries-splash}]]
      [:> rn/Text {:style {:font-weight :normal
                           :font-size   15
                           :align-self :center}}
       "Avis Industries"]]
     [:> StatusBar {:style "auto"}]]))
