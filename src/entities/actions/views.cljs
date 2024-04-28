(ns entities.actions.views
  (:require [reagent.core :as r]
            ["react-native" :as rn]
            [entities.actions.data.interface :as action-data]
            [organisms.library :as components]))

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

(defn action-constructor [flex-vals]
  (fn [action-data] [:> rn/View {:style {:flex-direction :row :padding-top 10 :padding-bottom 10 :width "100%"}}
                    (components/default-text {:style {:flex (nth flex-vals 0) :font-size 16 :align-self :center}
                                        :text (:title action-data)})
                    (components/default-text {:style {:flex (nth flex-vals 1) :font-size 16 :align-self :center}
                                        :text (action-data/dummy-roll-value)})
                    [:> rn/Pressable {:style {:flex (nth flex-vals 2) :font-size 16 :align-self :center}
                                      :on-press #(println "Rolled dice!")}
                     (components/default-text {:text "Roll!"})]]))

(defn action-list [conn {:keys [creature-id actions header]}]
  (let [flex-vals [2 1 1]]
    (components/search-filter-sort-list
     {:list-header      header
      :items            actions
      :column-headers   ["Title" "Roll Value" "Start Roll"]
      :column-flex-vals flex-vals
      :item-format-fn   (action-constructor flex-vals)
      :sort-fns         [sort-by-domain]}
     (str creature-id "actions"))))

(defn actions-details [conn]
  (let [actions (action-data/get-all-actions conn)]
    [:> rn/View {:style {:flex :1 :width (screen-width) :align-items :center :align-text :center}}
     (action-list conn {:actions actions})]))

(defn actions [conn ^js props]
  (components/view-frame conn (actions-details conn)))
