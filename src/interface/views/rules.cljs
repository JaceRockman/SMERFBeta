(ns interface.views.rules
  (:require ["react-native" :as rn]
            [data.realms :as realms]
            [interface.styles.text :refer [view-header-style]]
            [interface.components.navigation :as navigation]
            [interface.components.organization :as organization]))

(defn rules-details []
  [:> rn/View {:style {:flex :1}}
   [:> rn/Text "Rules Details"]])

(defn rules [db ^js props]
  (organization/view-frame db (rules-details)))
