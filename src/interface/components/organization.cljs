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

(defn view-frame
  [db content]
  (let [active-realm (first (realms/get-active-realm db))
        realm-data (when active-realm (realms/get-realm-details db active-realm))
        view-title (str/capitalize (name (app-state/navigation-state db)))]
    [:> rn/View {:style {:flex 1
                         :align-items :center
                         :background-color :white
                         :height "100%"}}
     (view-header [(:realm/title realm-data) view-title])
     (content db)
     (navigation/tab-bar)]))


