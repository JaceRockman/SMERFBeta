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
    (let [content (apply (:fn @modal-content) (:args @modal-content))
          save-button (when (:save-fn @modal-content)
                        (apply (:save-fn @modal-content) (:save-args @modal-content))) ]
      [:> rn/View {:style {:position :absolute :width "100%" :height "100%" :background-color "rgba(0, 0, 0, 0.6)" :justify-content :flex-end}}
       [:> rn/Pressable {:style {:flex 100 :width "100%"}
                        :on-press #(reset! modal-content nil)}]
       [:> rn/View {:style {:border-width 2 :border-color (:surface-700 @palette) :background-color (:surface-100 @palette) :width "100%" :max-height "80%"}}
        content
        [:> rn/View {:style {:position :absolute :right 5 :top 5}}
         save-button]]])))
