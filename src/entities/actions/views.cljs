(ns entities.actions.views
  (:require [clojure.string :as str]
            [clojure.math :as math]
            [datascript.core :as ds]
            ["@expo/vector-icons" :refer [FontAwesome5]]
            [reagent.core :as r]
            ["react-native" :as rn]
            [entities.campaigns.data.interface :as campaign-data]
            [entities.creatures.views.stats :as creature-stats-view]
            [entities.actions.data.interface :as action-data]
            [entities.rulesets.data.interface :as rulesets-data]
            [entities.resources.data.interface :as resources-data]
            [organisms.config :refer [palette screen-width]]
            [organisms.environments.modals :as modals]
            [organisms.library :as components]))

(defn filter-by-skills
  [actions skills]
  (filter (fn [action]
            (some #(= (:action/skill action) %)
                  skills))
          actions))

(defn sort-by-domain
  [actions]
  (let [physical-actions (filter-by-skills actions ["Coordination" "Reflexes" "Endurance"])
        spiritual-actions (filter-by-skills actions ["Exertion" "Instinct" "Perseverance"])
        mental-actions (filter-by-skills actions ["Concentration" "Recognition" "Comprehension"])
        social-actions (filter-by-skills actions ["Persuasion" "Insight" "Connections"])]
    [{:title "Physical" :data physical-actions}
     {:title "Spiritual" :data spiritual-actions}
     {:title "Mental" :data mental-actions}
     {:title "Social" :data social-actions}]))

(defn row-style-override
  [conn action-id]
  (fn [item]
    (let [selected-skill-domain (action-data/get-selected-skill-domain conn action-id)
          selected-skill-value-key (action-data/get-selected-skill conn action-id)
          selected-ability-domain (action-data/get-selected-ability-domain conn action-id)
          selected-ability-value-key (action-data/get-selected-ability conn action-id)]
      {:flex-direction :row :background-color (when (or
                                                     (and (= (:domain-id item) selected-skill-domain)
                                                          (= (:quality-key item) selected-skill-value-key))
                                                     (and (= (:domain-id item) selected-ability-domain)
                                                          (:type item)
                                                          (= (:power-key item) selected-ability-value-key)))
                                                (str (:surface-600 @palette) "80"))})))

(defn row-press-override
  [conn action-id]
  (fn [item]
    (fn []
      (when (:quality-key item)
        (action-data/set-selected-skill conn action-id (name (:quality-key item)))
        (action-data/set-selected-skill-domain conn action-id (:domain-id item)))
      (when (:power-key item)
        (action-data/set-selected-ability conn action-id (name (:power-key item)))
        (action-data/set-selected-ability-domain conn action-id (:domain-id item))))))






(defn new-resource
  []
  (components/hide-modal-content))

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



(def external-search-text (r/atom {"action-resources" (r/atom "")}))

(defn action-resource-search-fn
  [creature-resources component-key]
  (filter #(str/includes?
            (str/lower-case (apply str (vals %)))
            (str/lower-case
             (if-let [search-text-atom (get @external-search-text component-key)]
               (deref search-text-atom)
               "")))
          creature-resources))

(defn action-resource-list-search
  []
  (components/search-bar external-search-text "action-resources"))

(def resource-multiselect-column-headers
  {:title {:header "Title"
           :sort-fn #(get % :title)}
   :quality {:header "Quality"
             :sort-fn #(get % :resource/quality-value)}
   :power {:header "Power"
           :sort-fn #(get % :resource/power-value)}})

(def action-resource-list-filters
  (r/atom
   {"Equipment"   {:icon   :fist-raised
                   :filter ['?resource-id :resource/type "Equipment"]}
    "Trait"       {:icon   :eye
                   :filter ['?resource-id :resource/type "Trait"]}
    "Expertise"   {:icon   :brain
                   :filter ['?resource-id :resource/type "Expertise"]}
    "Affiliation" {:icon   :user-friends
                   :filter ['?resource-id :resource/type "Affiliation"]}
    "Item"        {:icon   :suitcase
                   :filter ['?resource-id :resource/type "Item"]}}))

(def active-action-resource-list-filters
  (r/atom []))

(defn type-section-from-resources
  [type resources]
  (let [resource-type-section-data (filter #(= type (:resource/type %))
                                           resources)]
    (when-not (empty? resource-type-section-data)
      {:title type :data resource-type-section-data})))

(defn sort-resources-by-type
  [resources]
  (let [equipment (type-section-from-resources "Equipment" resources)
        traits (type-section-from-resources "Trait" resources)
        expertise (type-section-from-resources "Expertise" resources)
        affiliations (type-section-from-resources "Affiliation" resources)
        items (type-section-from-resources "Item" resources)]
    (remove nil? [equipment traits expertise affiliations items])))

(def action-resource-list-sorts
  (r/atom [sort-resources-by-type]))

(defn toggle-action-resource-type-filter-button
  [resource-type]
  (let [filter-on? (some (fn [filter] (= resource-type filter)) @active-action-resource-list-filters)]
    [:> rn/Pressable {:style {:background-color (when filter-on? (:surface-700 @palette))
                              :align-items :center :width "20%"}
                      :on-press #(swap! active-action-resource-list-filters
                                        (fn [filters]
                                          (if filter-on?
                                            (remove (fn [filter] (= resource-type filter)) filters)
                                            (conj filters resource-type))))}
     [:> FontAwesome5 {:name (get-in @action-resource-list-filters [resource-type :icon])
                       :color (if filter-on? (:surface-100 @palette) (:surface-700 @palette))
                       :size 20}]]))

(defn action-resource-list-simple-filters
  []
  [:> rn/View {:style {:flex-direction :row}}
   (toggle-action-resource-type-filter-button "Equipment")
   (toggle-action-resource-type-filter-button "Trait")
   (toggle-action-resource-type-filter-button "Expertise")
   (toggle-action-resource-type-filter-button "Affiliation")
   (toggle-action-resource-type-filter-button "Item")])

(defn action-resource-list-search-filter-sort-component
  [flex-vals]
  [:> rn/View {:style {:flex "auto"}}
   (action-resource-list-search)
   (action-resource-list-simple-filters)])

(defn resource-multiselect-list-query
  [conn]
  (let [where-vector
        (vec (concat [['?resource-id :entity-type "resource"]]
                     (when (not-empty @active-action-resource-list-filters)
                       [(concat ['or]
                                (vec (map #(get-in @action-resource-list-filters [% :filter])
                                          @active-action-resource-list-filters)))])))
        _ (println where-vector)
        resource-ids (map first (ds/q {':find '[?resource-id]
                                       ':where where-vector}
                                      @conn))
        resources (ds/pull-many @conn '[*] resource-ids)]
    (reduce #(%2 %1)
            (action-resource-search-fn resources "resources")
            @action-resource-list-sorts)))

(def action-resource-sort-manager
  (r/atom {:title {:asc? true :order 1}}))

(defn resource-multi-select
  [conn action-id resources]
  (let [flex-vals [3 1 1]
        selected-resources (action-data/get-selected-resources conn action-id)]
    [:> rn/View {:style {:width (screen-width) :flex 1}}
     (components/default-text "Select Resources" {:font-size 24 :text-align :center})
     (components/search-filter-sort-list-2
      {:list-header      "Resources"
       :column-flex-vals flex-vals
       :column-headers   resource-multiselect-column-headers
       :items            (resource-multiselect-list-query conn)
       :item-format-fn   (fn [resource-data] ((resource conn flex-vals action-id selected-resources) resource-data))
       :search-filter-sort-component (action-resource-list-search-filter-sort-component flex-vals)
       :sort-manager     action-resource-sort-manager}
      "resources")]))

(defn roll-modifiers-tab
  [conn action-id]
  [:> rn/View {:style {:width (screen-width) :flex 1 :gap 20 :padding-bottom 20}}
   (components/default-text "Circumstantial Modifiers" {:font-size 24 :text-align :center :flex 0})
   [:> rn/View
    (components/default-text (str "Dice Modifier: " (action-data/get-dice-modifier conn action-id))
                             {:flex 0 :text-align :center :font-size 20})
    [:> rn/View {:style {:flex-direction :row :justify-content :space-evenly}}
     (components/decrementor-and-incrementor "Penalties"
                                             (action-data/get-dice-penalties conn action-id)
                                             #(action-data/update-dice-penalties conn action-id dec)
                                             #(action-data/update-dice-penalties conn action-id inc))
     (components/decrementor-and-incrementor "Bonuses"
                                             (action-data/get-dice-bonuses conn action-id)
                                             #(action-data/update-dice-bonuses conn action-id dec)
                                             #(action-data/update-dice-bonuses conn action-id inc))]]
   [:> rn/View
    (components/default-text (str "Flat Modifier: " (action-data/get-flat-modifier conn action-id))
                             {:flex 0 :text-align :center :font-size 20})
    [:> rn/View {:style {:flex-direction :row :justify-content :space-evenly}}
     (components/decrementor-and-incrementor "Penalties"
                                  (action-data/get-flat-penalties conn action-id)
                                  #(action-data/update-flat-penalties conn action-id dec)
                                  #(action-data/update-flat-penalties conn action-id inc))
     (components/decrementor-and-incrementor "Bonuses"
                                  (action-data/get-flat-bonuses conn action-id)
                                  #(action-data/update-flat-bonuses conn action-id dec)
                                  #(action-data/update-flat-bonuses conn action-id inc))]]])

(defn roll-splinters-tab
  [conn action-id]
  [:> rn/View {:style {:width (screen-width) :flex 1}}
   (components/decrementor-and-incrementor "Select Dice Pools"
                                (action-data/get-splinters conn action-id)
                                #(action-data/update-splinters conn action-id dec)
                                #(action-data/update-splinters conn action-id inc))])

(defn pool-format
  [index {:keys [conn action-id pool careful-or-reckless?]}]
  (let [pool-roll-button [:> rn/Pressable
                          {:style {:background-color (:surface-400 @palette) :padding 5
                                   :border-width 2 :border-color (:surface-500 @palette) :border-radius 4}
                           :on-press #(println (action-data/roll-dice-pool pool))}
                          (into [] (concat [:> rn/View {:style {:flex-direction :row}}] (action-data/format-dice-pool-icons pool)))]]
    [:> rn/View {:style {:width "33%" :margin-bottom 25}}
     (if careful-or-reckless?
       (components/decrementor-and-incrementor
        nil
        pool-roll-button
        #(action-data/update-combinations conn action-id index dec)
        #(action-data/update-combinations conn action-id index inc)
        true)
       [:> rn/View {:style {:align-items :center}}
        pool-roll-button])]))

(defn pools-tab
  [conn action-id careful-or-reckless?]
  (let [pools (action-data/get-combined-dice-pools conn action-id)]
    [:> rn/View
     (components/default-text (if careful-or-reckless? "Combine and Split Dice" "Roll Dice") {:font-size 24 :text-align :center})
     [:> rn/View {:style {:width (screen-width) :flex-wrap :wrap :flex-direction :row :justify-content :center}}
      (if (nil? pools)
        (components/default-text "No Dice Pools Found")
        (map-indexed pool-format (map (fn [pool] {:conn conn :action-id action-id :pool pool :careful-or-reckless? careful-or-reckless?}) pools)))]]))

(defn construct-roll
  [conn action-data ruleset domains resources]
  (let [stats        {:header    "Stats"
                      :component (creature-stats-view/stats conn domains {:damage-hidden? true
                                                                          :row-press-override (row-press-override conn (:id action-data))
                                                                          :row-style-override (row-style-override conn (:id action-data))})}
        resources    {:header    "Resources"
                      :component (resource-multi-select conn (:id action-data) resources)}
        modifiers    {:header    "Modifiers"
                      :component (roll-modifiers-tab conn (:id action-data))}
        splinters    (when (:ruleset/splintering ruleset)
                       {:header    "Shards"
                        :component (roll-splinters-tab conn (:id action-data))})
        pools        (let [careful-or-reckless? (:ruleset/careful-or-reckless ruleset)]
                       {:header    "SplitOrMerge"
                        :component (pools-tab conn (:id action-data) careful-or-reckless?)})
        action-pages (remove nil? [stats resources modifiers splinters pools])]
    [:> rn/View {:style {:height "100%"}}
     (components/default-text (:title action-data) {:flex 0 :font-size 24 :text-align :center})
     (components/default-text (action-data/get-fully-formatted-roll conn (:id action-data)) {:flex 0 :text-align :center})
     (components/indicated-scroll-view
      components/roll-horizontal-position
      (mapv :header action-pages)
      (mapv :component action-pages))]))

(defn save-action-roll
  [conn action-data]
  [:> rn/Pressable {:on-press #(println "Saved Action!")}
   (components/default-text "Save!" {:flex 0})])

(defn action-constructor [conn flex-vals ruleset domains resources]
  (fn [action-data]
    [:> rn/Pressable {:style {:flex-direction :row :padding-top 10 :padding-bottom 10 :width "100%"}
                      :on-press #(reset! modals/modal-content
                                         {:display? true
                                          :fn construct-roll
                                          :args [conn action-data ruleset domains resources]
                                          :save-fn save-action-roll
                                          :save-args [conn action-data]})}
     (components/default-text (:title action-data)
                              {:flex (nth flex-vals 0) :font-size 16 :align-self :center})
     (components/default-text (action-data/get-fully-formatted-roll conn (:id action-data))
                              {:flex (nth flex-vals 1) :font-size 16 :align-self :center})]))

(defn action-list
  [conn {:keys [id actions header collapsed? domains resources]}]
  (let [active-campaign?  (some? (campaign-data/get-active-campaign conn))
        ruleset           (if active-campaign?
                            (campaign-data/get-campaign-active-ruleset conn)
                            (rulesets-data/get-default-ruleset conn))
        default-domains   (if active-campaign?
                            (campaign-data/get-active-campaign-default-domains conn)
                            (rulesets-data/get-default-domains conn))
        default-resources (if active-campaign?
                            (campaign-data/get-active-campaign-resources conn)
                            (resources-data/get-all-resources conn))
        flex-vals         [2 2 1]]
    (components/search-filter-sort-list-2
     {:list-header      header
      :column-flex-vals flex-vals
      :column-headers   ["Title" "Roll Value" "Start Roll"]
      :collapsed?       collapsed?
      :items            (sort-by-domain actions)
      :item-format-fn   (action-constructor conn flex-vals ruleset (or domains default-domains) (or resources default-resources))}
     (str id "actions"))))

(defn actions-details [conn]
  (let [actions (action-data/get-all-actions conn)]
    [:> rn/View {:style {:flex :1 :width (screen-width) :align-items :center :align-text :center}}
     (action-list conn {:actions actions})]))

(defn actions [conn ^js props]
  (components/view-frame conn (actions-details conn) "actions-page"))
