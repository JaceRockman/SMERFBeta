(ns interface.views.creatures
  (:require
   [datascript.core :as ds]
   ["react-native" :as rn]
   [data.creatures :as creatures]
   [data.domains :as domains]
   [interface.components.organization :as organization]))

#_"The Creature page will show the portrait and main details of the creature at the top
like their name, gender, race, and description. Below that will be a section for their stats in each domain and their damage trackers. Below that will be a search bar for viewing their resources that automatically shows their favorites and has a button to show all and a plus button to add a new action which takes you to the resources tab of the app. Each of the resources will list their name, their quality, their power, and their quantity with the ability to increase or decrease. Below that will be another search bar for viewing their actions that automatically shows their favorites and has a button to show all and a plus button to add a new action which takes you to the action tab of the app. Each of the actions will list their name, their quality, their power, and a button to start a roll with that action."


(defn details-query [creature-eid db]
  (ds/q '[:find ?name ?race
          :in $db ?creature-eid
          :where [$db ?creature-eid :creature/name ?name]
          [$db ?creature-eid :creature/race ?race]]
        db creature-eid))

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

(defn stat [{:keys [:domain/name]}]
  [:> rn/View
   [:> rn/Text name]])

(defn stats [db {:keys [:creature/domains]}]
  (let [domain-details (ds/pull-many db ["*"] domains)]
    [:> rn/View
     (map stat domain-details)]))

(defn resource [{:keys [:resource/title]}]
  [:> rn/View
   [:> rn/Text title]])

(defn resources [db {:keys [:creature/resources]}]
  (let [resource-details (ds/pull-many db ["*"] resources)]
    [:> rn/View
     (map resource resource-details)]))

(defn action [{:keys [:action/title]}]
  [:> rn/View
   [:> rn/Text title]])

(defn actions [db {:keys [:creature/actions]}]
  (let [action-details (ds/pull-many db ["*"] actions)]
    [:> rn/View
     (map action action-details)]))

(defn notes [{:keys [:creature/notes]}]
  [:> rn/View
   [:> rn/Text notes]])

(defn creature [db creature-details]
  [:> rn/View
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
    [:> rn/View {:style {:flex :1}}
     [:> rn/Text "Creatures Details"]
     (creature db creature-info)]))

(defn creatures [db ^js props]
  (organization/view-frame db (creatures-details db)))
