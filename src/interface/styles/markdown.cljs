(ns interface.styles.markdown
  (:require [reagent.core :as r]
            [data.app-state :as app-state]
            [interface.widgets.buttons :refer [button]]))

(def Markdown (.-default (js/require "react-native-markdown-display")))

(defn link-click [section subsection] (fn [] (app-state/navigate [section (keyword subsection)])))

(defn rules
  [nav-section]
  {:link (fn [node children parent styles]
           (r/as-element
            (button {:on-press (link-click nav-section (-> node .-attributes .-href))}
                    (-> node .-children first .-content))))})
