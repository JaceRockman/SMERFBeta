(ns interface.views.actions
  (:require ["react-native" :as rn]
            [data.realms :as realms]
            [interface.styles.text :refer [view-header-style]]
            [interface.components.navigation :as navigation]
            [interface.components.organization :as organization]))

(defn actions-details [db]
  [:> rn/Text "Actions Details"])

(defn actions [db ^js props]
  (organization/view-frame db actions-details))

