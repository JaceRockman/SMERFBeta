(ns interface.views.campaigns
  (:require
   [clojure.string :as str]
   [reagent.core :as r]
   ["react-native" :as rn]
   ["expo-status-bar" :refer [StatusBar]]
   ["@expo/vector-icons" :refer [FontAwesome5]]
   [data.app-state :as app-state]
   [data.campaigns :as campaigns]
   [interface.components.organization :as organization]
   [interface.components.navigation :as navigation]
   [interface.widgets.buttons :refer [primary-button secondary-button]]
   [interface.widgets.text :as text]))

(def active-section (r/atom :realms))

(defn campaign-select-list
  [{:keys [campaigns-data show-header?]}]
  (navigation/search-filter-sort-list
   {:list-header (when show-header? (text/view-header-text {:style {:color :white} :text "Select a Campaign"}))
    :column-headers ["Campaign Title" "Campaign Owner"]
    :column-flex-vals [1 1]
    :items campaigns-data
    :item-format-fn (fn [{:keys [owner id title]}]
                      [:> rn/Pressable {:style {:flex-direction :row
                                                :margin-top 5
                                                :margin-bottom 5}
                                        :on-press #(doall
                                                    (campaigns/set-active-campaign id)
                                                    (app-state/navigate [:campaign]))}
                       (text/default-text {:style {:flex 1}
                                           :text title})
                       (text/default-text {:style {:flex 1}
                                           :text (or owner "Avis Industries")})])}))

(defn campaign-select
  [campaigns-data]
  [:> rn/View {:style {:width "100%"}}
   (campaign-select-list {:campaigns-data campaigns-data :show-header? true})])

(defn campaign-summary
  [campaign-data]
  [:> rn/View
   (text/view-header-text {:text (:campaign/title campaign-data)})
   (text/default-text {:text (str campaign-data)})])

(defn campaign
  [db ^js props]
  (let [active-campaign-data (campaigns/get-active-campaign-data db)
        all-campaigns-data (campaigns/get-details-for-all-campaigns db campaigns/simple-keys-pull-pattern)]
    (organization/view-frame
     db
     [:> rn/ScrollView {:style {:flex 1 :width "100%"}
                        :content-container-style {:align-items :center
                                                  :justify-content :space-between
                                                  :height "100%"
                                                  :padding "5%"}}
      (if (empty? active-campaign-data)
        (campaign-select all-campaigns-data)
        (campaign-summary active-campaign-data))
      (primary-button {:text "Asset Library" :on-press #(app-state/navigate [:asset-library])})])))
