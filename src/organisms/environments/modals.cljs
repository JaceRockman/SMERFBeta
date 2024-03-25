(ns organisms.environments.modals
  (:require [cljs.reader :as reader]
            ["react-native" :as rn]
            [organisms.config :refer [screen-height screen-width]]
            [systems.navigation :as navigation]))

(defn modal
  [conn]
  (let [content (:modal/content (navigation/get-modal-content conn))]
    (when content
      [:> rn/View {:style {:position :absolute :width "100%" :height "100%" :background-color "rgba(0, 0, 0, 0.6)"
                           :justify-content :flex-end}}
       [:> rn/View {:style {:background-color :white :height "50%" :width "100%"}}
        [:> rn/Pressable {:on-press #(navigation/clear-modal-content conn)} [:> rn/Text "X"]]
        content]])))
