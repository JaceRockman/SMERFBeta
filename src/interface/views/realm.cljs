(ns interface.views.realm
  (:require
   [clojure.string :as str]
   [reagent.core :as r]
   ["react-native" :as rn]
   ["expo-status-bar" :refer [StatusBar]]
   ["@expo/vector-icons" :refer [FontAwesome5]]
   [data.app-state :as app-state]
   [data.realms :as realms]
   [interface.styles.text :refer [view-header-style]] 
   [interface.components.organization :as organization]
   [interface.components.navigation :as navigation]
   [interface.widgets.buttons :refer [button]]))

(def active-section (r/atom :setting))

(defn select-realm-button [realm-data]
  [button {:on-press (fn [] (doall
                             (realms/set-active-realm (:db/id realm-data))
                             (app-state/navigate [:realm])))
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
  (navigation/search-filter-sort-list
   realms-data
   ["Realm Title" "Realm Owner"]
   [1 1]
   (fn [{:keys [owner id title]}]
     [:> rn/Pressable {:style {:flex-direction :row}
                       :on-press #(realms/set-active-realm id)}
      [:> rn/Text {:style {:flex 1}}
       title]
      [:> rn/Text {:style {:flex 1}}
       (or owner "Unknown")]])
   []
   []
   [(fn [items] [{:title "Realms" :data items}])]))

(defn realm-select
  [realms-data]
  [:> rn/View
   [:> rn/Text {:style view-header-style}
      "Select a Realm"]
   (realm-select-list realms-data)])

(defn realm-summary
  [realm-data]
  [:> rn/View
   [:> rn/Text {:style view-header-style}
      (:realm/title realm-data)]
   [:> rn/Text (str realm-data)]])

(defn realm
  [db ^js props]
  (let [active-realm-data (realms/get-active-realm-data db)
        all-realms-data (realms/get-details-for-all-realms db realms/simple-keys-pull-pattern)]
    (organization/view-frame db
                             [:> rn/ScrollView {:style {:flex 1 :width "100%"}}
                              (if (empty? active-realm-data)
                                (realm-select all-realms-data)
                                (realm-summary active-realm-data))])))
