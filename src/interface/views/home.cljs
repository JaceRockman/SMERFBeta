(ns interface.views.home
  (:require
   [data.counter :refer [get-counter-val get-counter-enabled inc-counter]]
   [data.app-state :as app-state]
   [datascript.core :as ds]
   [interface.widgets.buttons :refer [button]]
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

(defn big-button [{:keys [on-press]}
                  text]
  (button {:on-press on-press
           :style {:background-color :gray
                   :width 150
                   :height 150
                   :border-radius 10
                   :text-align :center
                   :justify-content :center
                   :align-items :center}}
          text))

(defn home [db ^js props]
  [:> rn/View {:style {:flex 1
                       :padding-vertical 50
                       :justify-content :space-between
                       :align-items :center
                       :background-color :white}}
   [:> rn/View {:style {:align-items :center}}
    [:> rn/Text {:style {:font-size 24
                         :font-weight :bold
                         :padding-bottom 20}}
     "SMERF Beta"]
    [big-button {:on-press (app-state/navigate-fn :realm)} "Enter Realm"]
    [big-button {:on-press (app-state/navigate-fn :realm)} "Create Realm"]]
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
   [:> StatusBar {:style "auto"}]])
