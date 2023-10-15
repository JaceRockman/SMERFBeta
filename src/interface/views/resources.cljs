(ns interface.views.resources
  (:require ["react-native" :as rn]
            [data.realms :as realms]
            [interface.styles.text :refer [view-header-style]]
            [interface.components.navigation :as navigation]
            [interface.components.organization :as organization]))

(defn resources-details []
  [:> rn/View {:style {:flex :1}}
   [:> rn/Text "Resources Details"]])

(defn resources [db ^js props]
  (organization/view-frame db (resources-details)))

