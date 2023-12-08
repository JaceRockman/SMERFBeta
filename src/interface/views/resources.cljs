(ns interface.views.resources
  (:require ["react-native" :as rn]
            [data.realms :as realms]
            [interface.styles.text :refer [view-header-style]]
            [interface.components.navigation :as navigation]
            [interface.components.organization :as organization]))



(defn resource [{:keys [:resource/title :resource/quality-value :resource/power-value]} quantity]
  [:> rn/View {:style {:flex-direction :row :background-color :grey}}
   [:> rn/Text {:style {:flex 3}} title]
   [:> rn/Text {:style {:flex 1}} quality-value]
   [:> rn/Text {:style {:flex 1}} power-value]
   [:> rn/Text {:style {:flex 2}} quantity]])

(defn search-sort-scroll-list [headers list-items sort-parameters filter-parameters])

(defn resource-list-sorted-group [resources quantities sorted-group-name]
  [:> rn/View {:style {:background-color :black :padding 5}}
   [:> rn/View {:style {:background-color :grey}}
    [:> rn/Text {:style {:flex 1 :font-size 14 :text-align :start}} sorted-group-name]]
   (map (fn [resource-data] (resource resource-data (get quantities (:db/id resource-data)))) resources)])

(defn resource-list [resources quantities]
  (let [equipment (filter #(= "Equipment" (:resource/type %)) resources)
        traits (filter #(= "Trait" (:resource/type %)) resources)
        expertise (filter #(= "Expertise" (:resource/type %)) resources)
        affiliations (filter #(= "Affiliation" (:resource/type %)) resources)
        items (filter #(= "Item" (:resource/type %)) resources)]
    [:> rn/View
     [:> rn/View {:style {:flex-direction :row :background-color :grey}}
      [:> rn/Text {:style {:flex 3 :font-size 16}} "Title"]
      [:> rn/Text {:style {:flex 1 :font-size 16}} "Quality"]
      [:> rn/Text {:style {:flex 1 :font-size 16}} "Power"]
      [:> rn/Text {:style {:flex 2 :font-size 16}} "Quantity"]]
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

