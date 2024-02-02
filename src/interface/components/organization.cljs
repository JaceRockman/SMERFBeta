(ns interface.components.organization
  (:require [clojure.string :as str]
            ["react-native" :as rn]
            [data.app-state :as app-state]
            [data.realms :as realms]
            [interface.components.navigation :as navigation]
            [interface.widgets.text :as text]))

(defn view-header
  [headers]
  [:> rn/View {:style {:background-color :lavender
                       :width "100%"
                       :height "5%"
                       :flex-direction :row
                       :justify-content :space-between}}
   (navigation/realm-management-nav-button)
   [:> rn/View
    (map #(text/view-header-text {:text %}) headers)]
   (navigation/menu)])

(defn screen-height [] (.-height js/screen))
(defn screen-width [] (.-width js/screen))

(defn view-frame
  [db content]
  (let [active-realm-data (first (realms/get-active-realm-data db))
        view-title (str/capitalize (name (first (app-state/navigation-state db))))]
    [:> rn/View {:style {:width (screen-width)
                         :align-items :center
                         :background-color "#121212"
                         :color :white
                         :height (screen-height)}}
     (view-header [(:realm/title active-realm-data) view-title])
     [:> rn/View {:style {:height "90%" :width "100%"}} content] 
     (navigation/tab-bar)]))


