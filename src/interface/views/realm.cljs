(ns interface.views.realm
  (:require
   ["react-native" :as rn]
   ["expo-status-bar" :refer [StatusBar]]
   [data.realms :as realms]
   [interface.widgets.buttons :refer [button]]))

(defn realm 
  [db ^js props]
  (let [active-realm (realms/get-active-realm db)
        realm-data (realms/get-realm-details db (first active-realm))]
    [:> rn/View {:style {:flex 1
                         :padding-vertical 50
                         :padding-horizontal 20
                         :justify-content :space-between
                         :align-items :flex-start
                         :background-color :white}}
     [:> rn/Text (str realm-data)]
     [:> StatusBar {:style "auto"}]]))
