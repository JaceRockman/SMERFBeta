(ns interface.components.organization
  (:require [clojure.string :as str]
            ["react-native" :as rn]
            [data.app-state :as app-state]
            [data.realms :as realms]
            [interface.styles.text :refer [view-header-style]]
            [interface.components.navigation :as navigation]))

(defn view-header-text
  [text]
  [:> rn/Text {:style view-header-style} text])

(defn view-header
  [headers]
  [:> rn/View {:style {:background-color :lavender
                       :width "100%" 
                       :flex-direction :row
                       :justify-content :space-between}}
   (navigation/realm-management-nav-button)
   [:> rn/View
    (map view-header-text headers)]
   (navigation/menu)])

(defn card [contents]
  [:> rn/View {:style {:background-color :red}}
   contents])

(defn screen-height [] (.-height js/screen))
(defn screen-width [] (.-width js/screen))

(defn view-frame
  [db content]
  (let [active-realm-data (first (realms/get-active-realm-data db))
        view-title (str/capitalize (name (first (app-state/navigation-state db))))]
    [:> rn/View {:style {:width (screen-width)
                         :align-items :center
                         :background-color :white
                         :height (screen-height)}}
     (view-header [(:realm/title active-realm-data) view-title])
     content 
     (navigation/tab-bar)]))


