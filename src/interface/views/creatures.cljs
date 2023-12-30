(ns interface.views.creatures
  (:require
   [clojure.string :as str]
   [datascript.core :as ds]
   ["react-native" :as rn]
   ["@expo/vector-icons" :refer [FontAwesome5 Ionicons]]
   [data.creatures :as creatures]
   [data.domains :as domains]
   [interface.widgets.buttons :refer [button]]
   [interface.components.organization :as organization]
   [interface.components.navigation :as navigation]
   [interface.views.resources :as resources-view]
   [interface.views.actions :as actions-view]))

#_"The Creature page will show the portrait and main details of the creature at the top
like their name, gender, race, and description. Below that will be a section for their stats in each domain and their damage trackers. Below that will be a search bar for viewing their resources that automatically shows their favorites and has a button to show all and a plus button to add a new resource which takes you to the resources tab of the app. Each of the resources will list their name, their quality, their power, and their quantity with the ability to increase or decrease. Below that will be another search bar for viewing their actions that automatically shows their favorites and has a button to show all and a plus button to add a new action which takes you to the action tab of the app. Each of the actions will list their name, their quality, their power, and a button to start a roll with that action."

(defn screen-width [] (.-width js/screen))

(def card-style
  {:background-color :gray
   :border-radius 10
   :width "95%"
   :height "100%"
   :z-index -1
   :position :absolute})

(defn skill
  [title value]
  [:> rn/View {:style {:flex-direction :horizontal}}
   [:> rn/Text title]
   [:> rn/Text value]])

(defn ability
  [title value]
  [:> rn/View {:style {:flex-direction :horizontal}}
   [:> rn/Text title]
   [:> rn/Text (str "d" value)]])

(def skillbility-style
  {:flex-direction :column
   :flex 1
   :background-color :grey
   :text-align :center
   :border-radius 10})

(defn skillbility
  [title skill-value ability-value]
  [:> rn/View {:style skillbility-style}
   [:> rn/Text title]
   [:> rn/Text skill-value "d" ability-value]])

(defn damage-severity-tracker
  [db domain-id {:keys [severity-title damage-quantity]}]
  [:> rn/View {:style {:flex 1}}
     [:> rn/Text {:style {:color :white :flex 1}} (str severity-title " Wounds")]
     [:> rn/View {:style {:flex-direction :row :align-items :center}}
      [:> rn/Image {:style {:flex 1}}]
      (button {:style {:color :white :padding 2 :background-color :inherit} :on-press #(domains/update-wound-value db domain-id severity-title dec)} "-")
      [:> rn/Text {:style {:color :white}} damage-quantity]
      (button {:style {:color :white :padding 2 :background-color :inherit} :on-press #(domains/update-wound-value db domain-id severity-title inc)} "+")
      [:> rn/Image {:style {:flex 1}}]]])

(defn domain-damage [db domain-id minor-wounds major-wounds]
  [:> rn/View
   [:> rn/View {:style {:flex-direction :row}}
    (damage-severity-tracker db domain-id {:severity-title "Minor" :damage-quantity minor-wounds}) 
    (damage-severity-tracker db domain-id {:severity-title "Major" :damage-quantity major-wounds})]
   [:> rn/View {:style {:flex 1}}
    [:> rn/Text {:style {:color :white :flex 1}} "Total Damage: " (+ minor-wounds (* 2 major-wounds))]]])

(defn stats-domain
  [db
   {:keys
    [:db/id
     :domain/name
     :domain/initiation-title :domain/initiation-value
     :domain/reaction-title :domain/reaction-value
     :domain/continuation-title :domain/continuation-value
     :domain/dominance-title :domain/dominance-value
     :domain/competence-title :domain/competence-value
     :domain/resilience-title :domain/resilience-value
     :domain/minor-wounds :domain/moderate-wounds :domain/major-wounds]}]
  [:> rn/View
   [:> rn/Text {:style {:color :white :font-size 24}} name]
   [:> rn/View {:style {:flex-direction :row :gap 5 :padding 5}}
    [skillbility "Initiation" initiation-value dominance-value]
    [skillbility "Reaction" reaction-value competence-value]
    [skillbility "Continuation" continuation-value resilience-value]]
   (domain-damage db id minor-wounds major-wounds)])

(defn section-divider []
  [:> rn/View {:style {:background-color :lavender :width "80%" :height 2 :align-self :center}}])

(defn stats-section-style []
  {:padding 10 :width (screen-width) :gap 10 :border-radius 10})

(defn stats [db {:keys [:creature/domains]}]
  (let [domain-details (map #(domains/get-domain-by-id db %) domains)]
    [:> rn/View {:style (stats-section-style)}
     [:> rn/Text {:style {:font-size 32 :color :white}} "Stats"]
     (interpose (section-divider)
      (map stats-domain (repeat db) domain-details))]))

(defn resources [db {:keys [:creature/resources]}]
  (let [resource-details (ds/pull-many db ["*"] resources)]
    [:> rn/View {:style {:width (screen-width)}}
     [:> rn/Text {:style {:font-size 24 :color :white}} "Resources"]
     [resources-view/resource-list resource-details (reduce (fn [qtys res]
                                                              (assoc qtys (:db/id res) (rand-int 3)))
                                                            {}
                                                            resource-details)]]))

(defn actions [db {:keys [:db/id :creature/actions]}]
  (let [action-details (ds/pull-many db ["*"] actions)]
    [:> rn/View {:style {:width (screen-width)}}
     [:> rn/Text {:style {:font-size 24 :color :white}} "Actions"]
     (actions-view/action-list db id action-details)]))

(defn info [db creature-details]
  (let [name (:creature/name creature-details)
        portrait (:creature/portrait creature-details)
        gender (:creature/gender creature-details)
        races (str "Races: " (apply str (interpose " " (creatures/race-titles db (:creature/race creature-details)))))
        description (:creature/description creature-details)]
    [:> rn/View {:style {:width (screen-width)
                         :align-items :center}}
     [:> rn/Image {:style {:width "50%" :aspect-ratio 1}
                   :source (if portrait
                             {:uri portrait}
                             (js/require "../assets/character silhouette.png"))}]
     [:> rn/Text gender]
     [:> rn/Text races]
     [:> rn/Text description]]))

(defn notes [{:keys [:creature/notes]}]
  [:> rn/View {:style {:width (screen-width)}}
   [:> rn/Text {:style {:color :white}} notes]])

(defn creature [db creature-details]
  [:> rn/ScrollView {:paging-enabled true
                     :horizontal :true
                     :shows-horizontal-scroll-indicator false
                     :shows-vertical-scroll-indicator false}
   (stats db creature-details)
   (resources db creature-details)
   (actions db creature-details)
   (info db creature-details)
   (notes creature-details)])

(defn creatures-details [db]
  (let [creature-info (creatures/creature-info db "aleksander")]
    [:> rn/ScrollView {:style {:background-color :black :width "100%" :text-align :center}}
     [:> rn/View {:style {:flex-direction :row :width "100%" :justify-content :space-between :align-items :center}}
      (navigation/creature-list-nav-button)
      [:> rn/Text {:style {:color :white}}
       (str/capitalize (:creature/name creature-info))]
      (button {:style {:background-color :inherit}
               :on-press (fn [] (println "button pressed"))}
              [:> FontAwesome5 {:name :ellipsis-v :color :white :size 18}])]
     (creature db creature-info)]))

(defn creatures [db ^js props]
  (organization/view-frame db (creatures-details db)))
