(ns interface.views.setting
  (:require ["react-native" :as rn]
            [reagent.core :as r]
            ;; [nextjournal.markdown :refer [parse ->hiccup]]
            [nextjournal.markdown.parser :as md.parser] ;; I'd like to find some way to parse the markdown into a structured document for transformation and storage and stuff. It's not working though, not sure why.
            [nextjournal.markdown.transform :as md.transform]
            [data.app-state :as app-state]
            [data.realms :as realms]
            [interface.styles.text :refer [view-header-style]]
            [interface.components.navigation :as navigation]
            [interface.components.organization :as organization]
            [interface.widgets.buttons :refer [button]]))

(def Markdown (.-default (js/require "react-native-markdown-display")))

(defn link-click [text] (fn [] (app-state/navigate :setting (keyword text))))

(defn setting-details [sub-nav]
  [:> rn/View {:style {:flex :1}}
   (case sub-nav
     :civilizations [:> Markdown {:rules {:link (fn [node children parent styles]
                                                  (r/as-element
                                                   (button {:on-press (link-click (-> node .-attributes .-href))}
                                                           (-> node .-children first .-content))))}}
                     "# Civilizations\n[Territories](territories)"]
     [:> Markdown {:rules {:link (fn [node children parent styles]
                                   (r/as-element
                                    (button {:on-press (link-click (-> node .-attributes .-href))}
                                            (-> node .-children first .-content))))}}
      "# Territories\n[Civlizations](civilizations)"])])

(defn setting [db ^js props]
  (let [sub-nav (app-state/sub-nav-state db)]
    (organization/view-frame db (setting-details sub-nav))))
