(ns interface.views.actions
  (:require [reagent.core :as r]
            ["react-native" :as rn]
            [data.realms :as realms]
            [data.actions :as actions]
            [interface.components.navigation :as navigation]
            [interface.components.organization :as organization]
            [interface.widgets.text :as text]))

(defn screen-width [] (.-width js/screen))

(defn section-divider []
  [:> rn/View {:style {:background-color :lavender :width "80%" :height 2 :align-self :center}}])



(defn sort-by-domain
  [actions]
  (let [filter-by-skills (fn [actions skills]
                          (filter (fn [action]
                                    (some #(= (:action/skill action) %)
                                          skills))
                                  actions))
        physical-actions (filter-by-skills actions ["Coordination" "Reflexes" "Endurance"]) 
        spiritual-actions (filter-by-skills actions ["Exertion" "Instinct" "Perseverance"])
        mental-actions (filter-by-skills actions ["Concentration" "Recognition" "Comprehension"])
        social-actions (filter-by-skills actions ["Persuasion" "Insight" "Connections"])]
    [{:title "Physical" :data physical-actions}
     {:title "Spiritual" :data spiritual-actions}
     {:title "Mental" :data mental-actions}
     {:title "Social" :data social-actions}]))

(defn action-constructor [action-data]
  (println action-data)
  [:> rn/View {:style {:flex-direction :row :padding-top 10 :padding-bottom 10 :width "100%"}}
   (text/default-text {:style {:flex 3 :font-size 16 :align-self :center} :text (:title action-data)})
   (text/default-text {:style {:flex 2 :font-size 16 :align-self :center} :text (actions/dummy-roll-value)})
   [:> rn/Pressable {:style {:flex 1 :font-size 16 :align-self :center}
                     :on-press #(println "Rolled dice!")} (text/default-text {:text "Roll!"})]])

(defn action-list [{:keys [db creature-id actions show-header?]}]
  (navigation/search-filter-sort-list
   {:list-header (when show-header? (text/view-header-text {:style {:color :white} :text "Actions"}))
    :items actions
    :column-headers ["Title" "Roll Value" "Start Roll"]
    :column-flex-vals [3 2 1]
    :item-format-fn action-constructor
    :sort-fns [sort-by-domain]}))

(defn actions-details [db]
  (let [actions (actions/get-all-actions db)]
    [:> rn/View {:style {:flex :1 :width (screen-width) :align-items :center :align-text :center}}
     (action-list {:db db :actions actions})]))

(defn actions [db ^js props]
  (organization/view-frame db (actions-details db)))
