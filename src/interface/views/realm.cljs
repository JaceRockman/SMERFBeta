(ns interface.views.realm
  (:require
   [reagent.core :as r]
   ["react-native" :as rn]
   ["expo-status-bar" :refer [StatusBar]]
   ["@expo/vector-icons" :refer [FontAwesome5]]
   [data.app-state :as app-state]
   [interface.components.navigation :as navigation]
   [data.realms :as realms]
   [interface.widgets.buttons :refer [button]]
   [interface.components.navigation :refer [tab-bar]]))

(def active-section (r/atom :setting))

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

(defn realm-select-buttons
  [existing-realms-data]
  [:> rn/View {:style {:color :gray}}
   (map select-realm-button existing-realms-data)
   [button {:on-press (fn [] (realms/create-new-realm))} "Create Realm"]])

(defn realm-select-list
  [realms-data]
  (navigation/list-select realms-data (fn [item] (fn [] (realms/set-active-realm (-> item :item :db/id))))))

(defn realm-select
  [realms-data]
  [:> rn/View
   [:> rn/Text {:style {:width "100%" :text-align :center :font-size 24 :font-weight :bold :padding 10}}
      "Select a Realm"]
   (realm-select-list realms-data)])

(defn realm-summary
  [realm-data]
  [:> rn/View
   [:> rn/Text {:style {:width "100%" :text-align :center :font-size 24 :font-weight :bold :padding 10}}
      (:realm/title realm-data)]
   [:> rn/Text (str realm-data)]])

(defn realm 
  [db ^js props]
  (let [active-realm (realms/get-active-realm db)
        all-realms (realms/get-details-for-all-realms db)
        realm-data (when (not-empty active-realm) (realms/get-realm-details db (first active-realm)))] 
    [:> rn/View {:style {:flex 1
                         :justify-content :space-between
                         :align-items :center
                         :background-color :white}}
     
     (if (empty? active-realm)
       (realm-select all-realms)
       (realm-summary realm-data))
     [tab-bar [[:> FontAwesome5 {:key 1 :name "globe-europe" :size 24 :color :black}]
               [:> FontAwesome5 {:key 2 :name "book" :size 24 :color :black}]
               [:> FontAwesome5 {:key 3 :name "users" :size 24 :color :black}]
               [:> FontAwesome5 {:key 4 :name "coins" :size 24 :color :black}]
               [:> FontAwesome5 {:key 5 :name "running" :size 24 :color :black}]]
      [:setting :rules :creatures :resources :actions]]
     [:> StatusBar {:style "auto"}]]))
