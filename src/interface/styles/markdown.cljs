(ns interface.styles.markdown
  (:require [reagent.core :as r]
            [data.app-state :as app-state]
            [interface.widgets.buttons :as buttons]
            [interface.styles.buttons :as button-styles]))

(def Markdown (.-default (js/require "react-native-markdown-display")))

(defn link-click [section subsection] (fn [] (app-state/navigate [section (keyword subsection)])))

(defn rules
  [nav-section]
  {:link (fn [node children parent styles]
           (r/as-element
            (buttons/primary-button
             {:text (-> node .-children first .-content)
              :on-press (link-click nav-section (-> node .-attributes .-href))
              :button-variant :small})))})

(defn default-markdown
  [input & variant]
  [:> Markdown {:style {:body {:color :white :padding-left 20 :padding-right 20}} :rules (rules :setting)}
   input])
