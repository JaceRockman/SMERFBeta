(ns interface.views.resources
  (:require ["react-native" :as rn]
            [data.realms :as realms]
            [interface.styles.text :refer [view-header-style]]
            [interface.components.navigation :as navigation]
            [interface.components.organization :as organization]))

(def section-divider
  [:> rn/View {:style {:background-color :lavender :width "80%" :height 2 :align-self :center}}])

(defn resource [{:keys [:resource/title :resource/quality-value :resource/power-value]} quantity]
  [:> rn/Pressable {:style {:flex-direction :row :padding-top 10 :padding-bottom 10}
                    :on-press #(println "button pressed")}
   [:> rn/Text {:style {:flex 3 :font-size 16 :color :white}} title]
   [:> rn/Text {:style {:flex 1 :font-size 16 :color :white}} quality-value]
   [:> rn/Text {:style {:flex 1 :font-size 16 :color :white}} power-value]
   [:> rn/Text {:style {:flex 2 :font-size 16 :color :white}} quantity]])

(defn search-sort-scroll-list [headers list-items sort-parameters filter-parameters])

(def resource-list-headers
  [:> rn/View {:style {:flex-direction :row}}
   [:> rn/Text {:style {:flex 3 :font-size 16 :color :white}} "Title"]
   [:> rn/Text {:style {:flex 1 :font-size 16 :color :white}} "Quality"]
   [:> rn/Text {:style {:flex 1 :font-size 16 :color :white}} "Power"]
   [:> rn/Text {:style {:flex 2 :font-size 16 :color :white}} "Quantity"]])

(defn resource-list-sorted-group [resources quantities sorted-group-name]
  [:> rn/View {:style {:background-color :black :padding 5}}
   [:> rn/Text {:style {:flex 1 :font-size 24 :text-align :start :color :white}} sorted-group-name]
   resource-list-headers
   section-divider
   (interpose section-divider (map (fn [resource-data] (resource resource-data (get quantities (:db/id resource-data)))) resources))
   section-divider])

(defn resource-list [resources quantities]
  (let [equipment (filter #(= "Equipment" (:resource/type %)) resources)
        traits (filter #(= "Trait" (:resource/type %)) resources)
        expertise (filter #(= "Expertise" (:resource/type %)) resources)
        affiliations (filter #(= "Affiliation" (:resource/type %)) resources)
        items (filter #(= "Item" (:resource/type %)) resources)]
    [:> rn/View
     (when (not-empty equipment) (resource-list-sorted-group equipment quantities "Equipment"))
     (when (not-empty traits) (resource-list-sorted-group traits quantities "Traits"))
     (when (not-empty expertise) (resource-list-sorted-group expertise quantities "Expertise"))
     (when (not-empty affiliations) (resource-list-sorted-group affiliations quantities "Affiliations"))
     (when (not-empty items) (resource-list-sorted-group items quantities "Items"))]))

(defn resources-details []
  [:> rn/View {:style {:flex :1}}
   [:> rn/Text "Resources Details"]])

(defn resources [db ^js props]
  (organization/view-frame db (resources-details)))

