(ns organisms.environments.modals
  (:require [cljs.reader :as reader]
            [reagent.core :as r]
            ["react-native" :as rn]
            [organisms.config :refer [screen-height screen-width]]
            [systems.navigation :as navigation]))

(def modal-content (r/atom nil))

(defn modal
  []
  (when @modal-content
    (let [content (apply (:fn @modal-content) (:args @modal-content))]
      [:> rn/View {:style {:position :absolute :width "100%" :height "100%" :background-color "rgba(0, 0, 0, 0.6)" :justify-content :flex-end}}
       [:> rn/View {:style {:background-color :white :height "50%" :width "100%"}}
        [:> rn/Pressable {:on-press #(reset! modal-content nil)} [:> rn/Text "X"]]
        content]])))
