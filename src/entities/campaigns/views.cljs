(ns entities.campaigns.views
  (:require [reagent.core :as r]
            ["react-native" :as rn]
            [systems.navigation :as navigation]
            [entities.campaigns.data.interface :as campaign-data]
            [organisms.library :as components]))

(defn campaign-select-list-item
  [conn {:keys [title owner id]}]
  [:> rn/Pressable {:style {:flex-direction :row
                            :margin-top 5
                            :margin-bottom 5}
                    :on-press #(doall
                                (campaign-data/set-active-campaign conn id)
                                (navigation/navigate! conn [:campaign]))}
   (components/default-text title {:color :white})
   (components/default-text (or owner "Avis Industries") {})])

(defn add-campaign-fn
  []
  (reset! organisms.environments.modals/modal-content
          {:fn organisms.environments.modals/new-item-modal
           :args [organisms.environments.modals/example-schema]
           :display? true}))

(defn campaign-select-list
  [conn {:keys [campaigns-data show-header?]}]
  (components/search-filter-sort-list
   {:column-headers ["Campaign Title" "Campaign Owner"]
    :column-flex-vals [1 1]
    :items campaigns-data
    :item-format-fn #(campaign-select-list-item conn %)
    :add-item-fn add-campaign-fn}
   (str "campaigns")))

(defn campaign-select
  [conn campaigns-data]
  [:> rn/View {:style {:width "100%"}}
   (campaign-select-list conn {:campaigns-data campaigns-data :show-header? true})])

(defn campaign-summary
  [conn campaign-data]
  (components/view-frame
   conn
   [:> rn/View
    (components/default-text (:campaign/title campaign-data) {:font-size 24})
    (components/default-text (str campaign-data))]
   "campaign-page"))

(defn campaign
  [conn ^js props]
  (let [active-campaign-data (campaign-data/get-active-campaign conn)
        all-campaigns-data (campaign-data/get-all-campaigns conn)]
    (if (empty? active-campaign-data)
      [:> rn/View {:style {:background-color :black
                           :width "100%"}}
       (components/default-text "Campaigns" {:font-size 24 :text-align :center :flex nil})
       [:> rn/ScrollView {:style {:flex 1 :width "100%"}
                          :content-container-style {:align-items :center
                                                    :justify-content :space-between
                                                    :height "100%"}}
        (campaign-select conn all-campaigns-data)]]
      (campaign-summary conn active-campaign-data))))
