(ns organisms.atoms.text-input
  (:require [reagent.core :as r]
            ["react-native" :as rn]
            [organisms.config :refer [palette]]))

(def text-input-map (r/atom {}))

(defn default-text-input
  [label key]
  (let [text-input (get text-input-map key)]
    [:> rn/View {:style {:flex-direction :row :gap 5}}
     label
     [:> rn/TextInput {:value text-input
                       :style {:color (:surface-700 @palette)
                               :display :flex
                               :width "100%"}
                       :enter-key-hint key
                       :on-change-text (fn [text]
                                         (swap! text-input-map (fn [text-input-map]
                                                                 (assoc text-input-map key text))))}]]))
