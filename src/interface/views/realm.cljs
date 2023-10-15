(ns interface.views.realm
  (:require
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
  (navigation/list-select realms-data (fn [item] (fn [] (realms/set-active-realm (-> item :item :id))))))

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
  (let [active-realm (realms/get-active-realm db)
        realm-title-id (realms/get-details-for-all-realms db realms/simple-keys-pull-pattern)
        realm-data (when (not-empty active-realm) (realms/get-realm-details db (first active-realm) realms/simple-keys-pull-pattern))]
    (organization/view-frame db
                             [:> rn/View {:style {:flex 1}}
                              (if (empty? active-realm)
                                (realm-select realm-title-id)
                                (realm-summary realm-data))])))
