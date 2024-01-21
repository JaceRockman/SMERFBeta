(ns interface.views.realm
  (:require
   [clojure.string :as str]
   [reagent.core :as r]
   ["react-native" :as rn]
   ["expo-status-bar" :refer [StatusBar]]
   ["@expo/vector-icons" :refer [FontAwesome5]]
   [data.app-state :as app-state]
   [data.realms :as realms]
   [interface.components.organization :as organization]
   [interface.components.navigation :as navigation]
   [interface.widgets.buttons :refer [primary-button secondary-button]]
   [interface.widgets.text :as text]))

(def active-section (r/atom :setting))

(defn realm-select-list
  [{:keys [realms-data show-header?]}]
  (navigation/search-filter-sort-list
   {:list-header (when show-header? (text/view-header-text {:style {:color :white} :text "Select a Realm"}))
    :items realms-data
    :column-headers ["Realm Title" "Realm Owner"]
    :column-flex-vals [1 1]
    :item-format-fn (fn [{:keys [owner id title]}]
                      [:> rn/Pressable {:style {:flex-direction :row
                                                :margin-top 5
                                                :margin-bottom 5}
                                        :on-press #(doall
                                                    (realms/set-active-realm id)
                                                    (app-state/navigate [:realm]))}
                       (text/default-text {:style {:flex 1}
                                           :text title})
                       (text/default-text {:style {:flex 1}
                                           :text (or owner "Avis Industries")})])}))

(defn realm-select
  [realms-data]
  [:> rn/View {:style {:width "100%"}}
   (realm-select-list {:realms-data realms-data :show-header? true})])

(defn realm-summary
  [realm-data]
  [:> rn/View
   (text/view-header-text {:text (:realm/title realm-data)})
   (text/default-text {:text (str realm-data)})])

(defn realm
  [db ^js props]
  (let [active-realm-data (realms/get-active-realm-data db)
        all-realms-data (realms/get-details-for-all-realms db realms/simple-keys-pull-pattern)]
    (organization/view-frame
     db
     [:> rn/ScrollView {:style {:flex 1 :width "100%"}
                        :content-container-style {:align-items :center
                                                  :justify-content :space-between
                                                  :height "100%"
                                                  :padding "5%"}}
      (if (empty? active-realm-data)
        (realm-select all-realms-data)
        (realm-summary active-realm-data))
      (primary-button {:text "Asset Library" :on-press #(app-state/navigate [:asset-library])})])))
