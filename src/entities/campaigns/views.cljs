(ns entities.campaigns.views
  (:require [reagent.core :as r]
            ["react-native" :as rn]
            [systems.navigation :as navigation]
            [entities.campaigns.data.interface :as campaign-data]
            [organisms.library :as components]))

(defn campaign-select-list
  [conn {:keys [campaigns-data show-header?]}]
  (components/search-filter-sort-list
   {:column-headers ["Campaign Title" "Campaign Owner"]
    :column-flex-vals [1 1]
    :items campaigns-data
    :item-format-fn (fn [{:keys [title owner id]}]
                      [:> rn/Pressable {:style {:flex-direction :row
                                                :margin-top 5
                                                :margin-bottom 5}
                                        :on-press #(doall
                                                    (campaign-data/set-active-campaign conn id)
                                                    (navigation/navigate! conn [:campaign]))}
                       (components/default-text title {})
                       (components/default-text (or owner "Avis Industries") {})])}
   (str "campaigns")))

(defn campaign-select
  [conn campaigns-data]
  [:> rn/View {:style {:width "100%"}}
   (campaign-select-list conn {:campaigns-data campaigns-data :show-header? true})])

(defn campaign-summary
  [campaign-data]
  [:> rn/View
   (components/default-text (:campaign/title campaign-data) {:font-size 24})
   (components/default-text (str campaign-data))])

(defn campaign
  [conn ^js props]
  (let [active-campaign-data (campaign-data/get-active-campaign conn)
        all-campaigns-data (campaign-data/get-all-campaigns conn)]
    (components/view-frame
     conn
     [:> rn/ScrollView {:style {:flex 1 :width "100%"}
                        :content-container-style {:align-items :center
                                                  :justify-content :space-between
                                                  :height "100%"}}
      (if (empty? active-campaign-data)
        (campaign-select conn all-campaigns-data)
        (campaign-summary active-campaign-data))]
     "campaigns-page")))
