(ns organisms.environments.modals
  (:require [cljs.reader :as reader]
            [reagent.core :as r]
            ["react-native" :as rn]
            [organisms.config :refer [palette]]
            [systems.navigation :as navigation]))

(def modal-content (r/atom nil))

(defn modal
  []
  (when @modal-content
    (let [content (apply (:fn @modal-content) (:args @modal-content))]
      [:> rn/View {:style {:position :absolute :width "100%" :height "100%" :background-color "rgba(255, 255, 255, 0.4)" :justify-content :flex-end}}
       [:> rn/Pressable {:style {:position :absolute :width "100%" :height "100%" :justify-content :flex-end}
                        :on-press #(reset! modal-content nil)}]
       [:> rn/View {:style {:background-color (:surface-100 @palette) :width "100%" :padding-top "5%" :padding-bottom "5%"}}
        content]])))
