(ns interface.views.setting
  (:require ["react-native" :as rn]
            [data.realms :as realms]
            [interface.styles.text :refer [view-header-style]]
            [interface.components.navigation :as navigation]
            [interface.components.organization :as organization]))

(defn setting-details [db]
  [:> rn/View {:style {:flex :1}}
   [:> rn/Text "Setting Details"]])

(defn setting [db ^js props]
  (organization/view-frame db setting-details))
