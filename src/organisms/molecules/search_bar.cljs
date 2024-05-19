(ns organisms.molecules.search-bar
  (:require [reagent.core :as r]
            ["react-native" :as rn]
            ["@expo/vector-icons" :refer [Ionicons]]
            [organisms.config :refer [palette]]))

(def highlighted? (r/atom false))

(defn search-bar
  [search-text-map key]
  (let [search-text-atom (get @search-text-map key)]
    [:> rn/View {:style {:border-width 1
                         :border-radius 2
                         :border-color (:surface-400 @palette)
                         :flex-direction :row
                         :align-items :end
                         :padding 2}}
     [:> Ionicons {:name "search" :color (:surface-400 @palette) :size 16}]
     [:> rn/TextInput {:value @search-text-atom
                       :style {:color (:surface-700 @palette)
                               :display :flex
                               :width "100%"}
                       :enter-key-hint "search"
                       :on-change-text (fn [text]
                                         (reset! search-text-atom text))}]
     [:> rn/Pressable {:on-press #(reset! search-text-atom "")}
      [:> Ionicons {:name "close-outline" :color (:surface-400 @palette) :size 16}]]]))
