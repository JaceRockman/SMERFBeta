(ns interface.views.creatures
  (:require
   [datascript.core :as ds]
   ["react-native" :as rn]
   [data.creatures :as creatures]
   [data.domains :as domains]
   [interface.components.organization :as organization]
   [interface.views.resources :as resources-view]
   [interface.views.actions :as actions-view]))

#_"The Creature page will show the portrait and main details of the creature at the top
like their name, gender, race, and description. Below that will be a section for their stats in each domain and their damage trackers. Below that will be a search bar for viewing their resources that automatically shows their favorites and has a button to show all and a plus button to add a new resource which takes you to the resources tab of the app. Each of the resources will list their name, their quality, their power, and their quantity with the ability to increase or decrease. Below that will be another search bar for viewing their actions that automatically shows their favorites and has a button to show all and a plus button to add a new action which takes you to the action tab of the app. Each of the actions will list their name, their quality, their power, and a button to start a roll with that action."

(def card-style
  {:background-color :gray
   :border-radius 10
   :width "95%"
   :height "100%"
   :z-index -1
   :position :absolute})

(defn info [creature-details]
  (let [name (:creature/name creature-details)
        gender (:creature/gender creature-details)
        race (:creature/race creature-details)
        description (:creature/description creature-details)]
    [:> rn/View
     [:> rn/Image {:style card-style}]
     [:> rn/Text name]
     [:> rn/Text gender]
     [:> rn/Text (str race)]
     [:> rn/Text description]]))

(defn skill
  [title value]
  [:> rn/View {:style {:flex-direction :horizontal}}
   [:> rn/Text title]
   [:> rn/Text value]])

(defn ability
  [title value]
  [:> rn/View {:style {:flex-direction :horizontal}}
   [:> rn/Text title]
   [:> rn/Text value]])

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

(def stats-style
  {:background-color :black
   :border-radius 10})

(defn domain-damage [minor-wounds major-wounds]
  [:> rn/View
   [:> rn/View {:style {:flex-direction :row}}
    [:> rn/View {:style {:flex 1}}
     [:> rn/Text {:style {:color :white :flex 1}} "Minor Wounds"]
     [:> rn/View {:style {:flex-direction :row}}
      [:> rn/Text {:style {:color :white :flex 1}} "-"]
      [:> rn/Text {:style {:color :white :flex 1}} minor-wounds]
      [:> rn/Text {:style {:color :white :flex 1}} "+"]]] 
    [:> rn/View {:style {:flex 1}}
     [:> rn/Text {:style {:color :white :flex 1}} "Major Wounds"]
     [:> rn/View {:style {:flex-direction :row}}
      [:> rn/Text {:style {:color :white :flex 1}} "-"]
      [:> rn/Text {:style {:color :white :flex 1}} major-wounds]
      [:> rn/Text {:style {:color :white :flex 1}} "+"]]]]
   [:> rn/View {:style {:flex 1}}
    [:> rn/Text {:style {:color :white :flex 1}} "Total Damage: " (+ minor-wounds (* 2 major-wounds))]]])

(defn stats-domain
  [{:keys
    [:domain/name
     :domain/initiation-title :domain/initiation-value
     :domain/reaction-title :domain/reaction-value
     :domain/continuation-title :domain/continuation-value
     :domain/dominance-title :domain/dominance-value
     :domain/competence-title :domain/competence-value
     :domain/resilience-title :domain/resilience-value]}]
  [:> rn/View {:style stats-style}
   [:> rn/Text {:style {:color :white :font-size 24}} name]
   [:> rn/View {:style {:flex-direction :row :gap 5 :padding 5}}
    [skillbility "Initiation" initiation-value dominance-value]
    [skillbility "Reaction" reaction-value competence-value]
    [skillbility "Continuation" continuation-value resilience-value]]
   (domain-damage (rand-int 5) (rand-int 3))])

(def stats-section-style
  {:padding 10 :gap 10 :background-color :grey :border-radius 10})

(defn stats [db {:keys [:creature/domains]}]
  (let [domain-details (map #(domains/get-domain-by-id db %) domains)]
    [:> rn/View {:style stats-section-style}
     [:> rn/Text {:style {:font-size 32}} "Stats"]
     (map stats-domain domain-details)]))

(defn resources [db {:keys [:creature/resources]}]
  (let [resource-details (ds/pull-many db ["*"] resources)]
    [:> rn/View {:style {:background-color :grey}}
     [:> rn/Text {:style {:font-size 24}} "Resources"]
     [resources-view/resource-list resource-details (reduce (fn [qtys res]
                                                              (assoc qtys (:db/id res) (rand-int 3)))
                                                            {}
                                                            resource-details)]]))

(defn actions [db {:keys [:db/id :creature/actions]}]
  (let [action-details (ds/pull-many db ["*"] actions)]
    [:> rn/View {:style {:background-color :grey}}
     [:> rn/Text {:style {:font-size 24}} "Actions"]
     (actions-view/action-list db id action-details)]))

(defn notes [{:keys [:creature/notes]}]
  [:> rn/View
   [:> rn/Text notes]])

(defn creature [db creature-details]
  [:> rn/View {:style {:gap 5 :padding 5}}
   (info creature-details)
   (stats db creature-details)
   (resources db creature-details)
   (actions db creature-details)
   (notes creature-details)])

(defn creature-stats
  [db creature-info]
  (let [creature-domains (creatures/creature-domains db creature-info)]
    [:> rn/View
     [:> rn/Text "Hello"]
     [:> rn/Text (str creature-domains)]]))

(defn creatures-details [db]
  (let [creature-info (creatures/creature-info db "aleksander")]
    [:> rn/ScrollView {:style {:flex :1 :width "100%" :text-align :center}}
     [:> rn/Text "Creatures Details"]
     (creature db creature-info)]))

(defn creatures [db ^js props]
  (organization/view-frame db (creatures-details db)))
