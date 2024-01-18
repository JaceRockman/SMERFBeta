(ns interface.styles.markdown
  (:require [reagent.core :as r]
            [data.app-state :as app-state]
            [interface.widgets.buttons :as buttons]))

(def Markdown (.-default (js/require "react-native-markdown-display")))

(defn link-click [section subsection] (fn [] (app-state/navigate [section (keyword subsection)])))

(defn rules
  [nav-section]
  {:link (fn [node children parent styles]
           (r/as-element
            (buttons/primary-button
             (-> node .-children first .-content)
             (link-click nav-section (-> node .-attributes .-href))
             false)))})
