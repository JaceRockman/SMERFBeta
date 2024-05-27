(ns entities.actions.views
  (:require [clojure.math :as math]
            [reagent.core :as r]
            ["react-native" :as rn]
            [entities.campaigns.data.interface :as campaign-data]
            [entities.actions.data.interface :as action-data]
            [entities.rulesets.data.interface :as rulesets-data]
            [entities.resources.data.interface :as resources-data]
            [organisms.config :refer [palette screen-width]]
            [organisms.environments.modals :as modals]
            [organisms.library :as components]))

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

(defn stats-selector-row
  [item]
  (fn [conn action-id initiation-item reaction-item continuation-item id flex-vals]
    (let [selected-skill-value-key (action-data/get-selected-skill conn action-id)
          selected-skill (:title (first (filter #(= selected-skill-value-key (name (:quality-key %)))
                                                [initiation-item reaction-item continuation-item])))
          selected-domain (action-data/get-selected-domain conn action-id)]
      [:> rn/Pressable
       {:style {:flex-direction :row :background-color (when (and (= id selected-domain) (= (:title item) selected-skill)) (str (:surface-600 @palette) "80"))}
        :on-press (fn []
                    (action-data/set-selected-domain conn action-id id)
                    (action-data/set-selected-skill conn action-id (name (:quality-key item)))
                    (action-data/set-selected-ability conn action-id (name (:power-key item))))}
       (components/default-text (:title item) {:flex (nth flex-vals 0)})
       (components/default-text (:quality item) {:flex (nth flex-vals 1)})
       (components/default-text (str "d" (:power item)) {:flex (nth flex-vals 2)})])))

(defn stats-selector
  [conn action-id domains]
  [:> rn/View {:style {:width (screen-width)}}
   (map
    (fn [{:keys
          [:db/id
           :title
           :domain/initiation-title :domain/initiation-value
           :domain/reaction-title :domain/reaction-value
           :domain/continuation-title :domain/continuation-value
           :domain/dominance-title :domain/dominance-value
           :domain/competence-title :domain/competence-value
           :domain/resilience-title :domain/resilience-value
           :domain/minor-wounds :domain/moderate-wounds :domain/major-wounds]}]
      (let [flex-vals         [3 1 1]
            initiation-item   {:title initiation-title
                               :quality-key :domain/initiation-value :quality initiation-value
                               :power-key :domain/dominance-value :power dominance-value}
            reaction-item     {:title reaction-title
                               :quality-key :domain/reaction-value :quality reaction-value
                               :power-key :domain/competence-value :power competence-value}
            continuation-item {:title continuation-title
                               :quality-key :domain/continuation-value :quality continuation-value
                               :power-key :domain/resilience-value :power resilience-value}]
        [:> rn/View {:style {:padding "0px 10px 0px 10px" :width (screen-width)}}
         (components/default-text title {:font-size 24})
         (components/flat-list
          {:items           [initiation-item reaction-item continuation-item]
           :headers         ["Title" "Quality" "Power"]
           :flex-vals       flex-vals
           :row-constructor #((stats-selector-row %)
                             conn action-id initiation-item reaction-item continuation-item id flex-vals)})]))
    domains)])

(defn sort-resources-by-type
  [resources]
  (let [type-section-from-resources (fn [type resources]
                                      (let [resource-type-section-data (filter #(= type (:resource/type %))
                                                                               resources)]
                                        (when-not (empty? resource-type-section-data)
                                          {:title type :data resource-type-section-data})))
        equipment (type-section-from-resources "Equipment" resources)
        traits (type-section-from-resources "Trait" resources)
        expertise (type-section-from-resources "Expertise" resources)
        affiliations (type-section-from-resources "Affiliation" resources)
        items (type-section-from-resources "Item" resources)]
    (remove nil? [equipment traits expertise affiliations items])))

(defn resource
  [conn flex-vals action-id selected-resources]
  (fn [{:keys [id title quality-value power-value]}]
    [:> rn/Pressable {:key (str "resource-" id)
                      :style {:flex-direction :row :padding-top 10 :padding-bottom 10 :width "100%"
                              :background-color (when (some #(= id %) selected-resources)
                                                  (str (:surface-600 @palette) "80"))}
                      :on-press (fn [] (action-data/toggle-resource-selection conn id action-id))}
     (components/default-text title {:flex (nth flex-vals 0) :font-size 16})
     (components/default-text quality-value {:flex (nth flex-vals 1) :font-size 16})
     (components/default-text power-value {:flex (nth flex-vals 2) :font-size 16})]))

(defn resource-multi-select
  [conn action-id resources]
  (let [flex-vals [3 1 1]
        selected-resources (action-data/get-selected-resources conn action-id)]
    [:> rn/View {:style {:width (screen-width) :flex 1}}
     (components/search-filter-sort-list
      {:list-header      "Resources"
       :items            resources
       :column-headers   ["Title" "Quality" "Power"]
       :column-flex-vals flex-vals
       :item-format-fn   (fn [resource-data] ((resource conn flex-vals action-id selected-resources) resource-data))
       :section-sort-fns [sort-resources-by-type]}
      "resources")]))

(defn decrementor-and-incrementor
  [label number dec-fn inc-fn & [vertical?]]
  [:> rn/View {:style {:align-items :center}}
   (when-not vertical? (components/default-text label {:align-self :center}))
   [:> rn/View {:style {:flex-direction (if vertical? :column :row) :align-content :center :gap 10}}
    [:> rn/Pressable {:on-press (if vertical? inc-fn dec-fn)}
     (components/default-text (if vertical? "^" "-") {:text-align :center})]
    (components/default-text number {:text-align :center :flex 0})
    [:> rn/Pressable {:on-press (if vertical? dec-fn inc-fn)}
     (components/default-text (if vertical? "v" "+") {:text-align :center})]]])

(defn roll-modifiers-tab
  [conn action-id]
  [:> rn/View {:style {:width (screen-width) :flex 1 :gap 20 :padding-bottom 20}}
   [:> rn/View
    (components/default-text (str "Dice Modifier: " (action-data/get-dice-modifier conn action-id)) {:flex 0 :text-align :center :font-size 20})
    [:> rn/View {:style {:flex-direction :row :justify-content :space-evenly}}
     (decrementor-and-incrementor "Penalties"
                                  (action-data/get-dice-penalties conn action-id)
                                  #(action-data/update-dice-penalties conn action-id dec)
                                  #(action-data/update-dice-penalties conn action-id inc))
     (decrementor-and-incrementor "Bonuses"
                                  (action-data/get-dice-bonuses conn action-id)
                                  #(action-data/update-dice-bonuses conn action-id dec)
                                  #(action-data/update-dice-bonuses conn action-id inc))]]
   [:> rn/View
    (components/default-text (str "Flat Modifier: " (action-data/get-flat-modifier conn action-id)) {:flex 0 :text-align :center :font-size 20})
    [:> rn/View {:style {:flex-direction :row :justify-content :space-evenly}}
     (decrementor-and-incrementor "Penalties"
                                  (action-data/get-flat-penalties conn action-id)
                                  #(action-data/update-flat-penalties conn action-id dec)
                                  #(action-data/update-flat-penalties conn action-id inc))
     (decrementor-and-incrementor "Bonuses"
                                  (action-data/get-flat-bonuses conn action-id)
                                  #(action-data/update-flat-bonuses conn action-id dec)
                                  #(action-data/update-flat-bonuses conn action-id inc))]]])

(defn roll-splinters-tab
  [conn action-id]
  [:> rn/View {:style {:width (screen-width) :flex 1}}
   (decrementor-and-incrementor "Dice Pools"
                                (action-data/get-splinters conn action-id)
                                #(action-data/update-splinters conn action-id dec)
                                #(action-data/update-splinters conn action-id inc))])

(defn pool-combinations
  [index pool]
  [:> rn/View {:style {:flex 1}}
   (decrementor-and-incrementor
    nil
    (components/default-text (action-data/format-dice-pool pool) {:align-text :center})
    #(println "Dec")
    #(println "Inc")
    true)])

(defn pool-combinations-tab
  [conn action-id]
  (let [pools (action-data/get-dice-pools conn action-id)]
    [:> rn/View {:style {:width (screen-width) :flex 1 :flex-direction :row :justify-content :flex-start}}
     (if (nil? pools)
       (components/default-text "No Domain Found")
       (map-indexed pool-combinations pools))]))

(defn construct-roll
  [conn action-data domains resources]
  (let [stats (stats-selector conn (:id action-data) domains)
        ;; _ (println "stats complete")
        resources (resource-multi-select conn (:id action-data) resources)
        ;; _ (println "resources complete")
        modifiers (roll-modifiers-tab conn (:id action-data))
        ;; _ (println "modifiers complete")
        splinters (roll-splinters-tab conn (:id action-data))
        ;; _ (println "splinters complete")
        pools (pool-combinations-tab conn (:id action-data))
        ;; _ (println "pools complete")
        ]
    [:> rn/View
   (components/default-text (:title action-data) {:flex 0 :font-size 24 :text-align :center})
   (components/default-text (action-data/derive-roll-value conn (:id action-data)) {:flex 0})
   (components/indicated-scroll-view
    components/roll-horizontal-position
    ["Stats" "Resources" "Modifiers" "Shards" "SplitOrMerge"]
    [stats resources modifiers splinters pools])]))

(defn action-constructor [conn flex-vals domains resources]
  (fn [action-data] [:> rn/View {:style {:flex-direction :row :padding-top 10 :padding-bottom 10 :width "100%"}}
                     (components/default-text (:title action-data)
                                              {:flex (nth flex-vals 0) :font-size 16 :align-self :center})
                     (components/default-text (action-data/dummy-roll-value)
                                              {:flex (nth flex-vals 1) :font-size 16 :align-self :center})
                     [:> rn/Pressable {:style {:flex (nth flex-vals 2) :font-size 16 :align-self :center}
                                       :on-press #(reset! modals/modal-content {:fn construct-roll :args [conn action-data domains resources]})}
                      (components/default-text "Roll!")]]))

(defn action-list
  [conn {:keys [id actions header collapsed? domains resources]}]
  (let [flex-vals [2 1 1]]
    (components/search-filter-sort-list
     {:list-header      header
      :collapsed?       collapsed?
      :items            actions
      :column-headers   ["Title" "Roll Value" "Start Roll"]
      :column-flex-vals flex-vals
      :item-format-fn   (action-constructor conn flex-vals domains resources)
      :sort-fns         [sort-by-domain]}
     (str id "actions"))))

(defn actions-details [conn]
  (let [actions (action-data/get-all-actions conn)]
    [:> rn/View {:style {:flex :1 :width (screen-width) :align-items :center :align-text :center}}
     (action-list conn {:actions actions
                        :domains (campaign-data/get-active-campaign-default-domains conn)
                        :resources (campaign-data/get-active-campaign-resources conn)})]))

(defn actions [conn ^js props]
  (components/view-frame conn (actions-details conn)))
