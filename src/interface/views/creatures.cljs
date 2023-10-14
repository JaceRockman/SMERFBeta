(ns interface.views.creatures
  (:require
   [datascript.core :as ds]
   ["react-native" :as rn]
   [interface.components.organization :as organization]))

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

(defn details [db creature-id]
  (let [details (details-query creature-id db)]
    [:> rn/View
     [:> rn/Image {:style card-style}]
     [:> rn/Text details]]))

(defn stats [])

(defn resources [])

(defn actions [])

(defn creature [db creature-id ^js props]
  [:> rn/View
   (details db creature-id)
   (details db creature-id )])

(defn creatures-details [db]
  [:> rn/View {:style {:flex :1}}
   [:> rn/Text "Creatures Details"]])

(defn creatures [db ^js props]
  (organization/view-frame db creatures-details))
