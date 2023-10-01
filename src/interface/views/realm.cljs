(ns interface.views.realm
  (:require
   [reagent.core :as r]
   ["react-native" :as rn]
   ["expo-status-bar" :refer [StatusBar]]
   [data.realm :as realm]
   [interface.widgets.buttons :refer [button]]))



(defn realm 
  [db ^js props]
  [:> rn/View {:style {:flex 1
                       :padding-vertical 50
                       :padding-horizontal 20
                       :justify-content :space-between
                       :align-items :flex-start
                       :background-color :white}}
   [:> rn/Text (str "All Realms: " (realm/get-all-realms db))]
   [:> rn/Text (str "Active Realm: " (realm/get-active-realm db))]
   [button {:on-press (fn [] (realm/create-new-realm))} "New Realm"]
   [button {:on-press (fn [] (realm/set-active-realm 1))} "Realm 1"]
   [:> StatusBar {:style "auto"}]])
