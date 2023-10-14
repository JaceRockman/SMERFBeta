(ns interface.views.setting
  (:require ["react-native" :as rn]
            [data.realms :as realms]
            [interface.styles.text :refer [view-header-style]]
            [interface.components.navigation :as navigation]
            [interface.components.organization :as organization]))

(def Markdown (.-default (js/require "react-native-markdown-display")))

(defn setting-details [db]
  [:> rn/View {:style {:flex :1}}
   [:> Markdown "# Setting Details Markdown!"]])

(defn setting [db ^js props]
  (organization/view-frame db setting-details))
