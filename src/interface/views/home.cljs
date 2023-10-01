(ns interface.views.home
  (:require
   [data.app-state :as app-state]
   [data.realms :as realms]
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

(defn select-realm-button [realm-data]
  [button {:on-press (fn [] (doall
                             (realms/set-active-realm (:db/id realm-data))
                             (app-state/navigate :realm)))
           :style {:background-color :gray
                   :width 150
                   :height 150
                   :border-radius 10
                   :text-align :center
                   :justify-content :center
                   :align-items :center}
           :key (:db/id realm-data)}
   (:realm/title realm-data)])

(defn realm-select
  [existing-realms-data]
  [:> rn/View {:style {:color :gray}}
   (map select-realm-button existing-realms-data)
   [button {:on-press (fn [] (realms/create-new-realm))} "Create Realm"]])

(defn home [db ^js props]
  (let [existing-realms (realms/get-details-for-all-realms db)
        active-realm (realms/get-active-realm db)]
    [:> rn/View {:style {:flex 1
                         :padding-vertical 50
                         :padding-horizontal 20
                         :justify-content :space-between
                         :align-items :center
                         :background-color :white}}
     (if (empty? active-realm)
       (realm-select existing-realms)
       [:> rn/Text (str "Active Realm: " (realms/get-active-realm db))])
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
