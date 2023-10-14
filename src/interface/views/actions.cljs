(ns interface.views.actions
  (:require [reagent.core :as r]
            ["react-native" :as rn]
            [data.realms :as realms]
            [interface.styles.text :refer [view-header-style]]
            [interface.components.navigation :as navigation]
            [interface.components.organization :as organization]))

(defn actions-details [db]
  [:> rn/View {:style {:flex :1}}
   [:> rn/Text "Actions Details"]])

(defn actions [db ^js props]
  (organization/view-frame db actions-details))
