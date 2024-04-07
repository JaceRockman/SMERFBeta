(ns organisms.molecules.search-bar
  (:require [reagent.core :as r]
            ["react-native" :as rn]
            ["@expo/vector-icons" :refer [Ionicons]]))

(def highlighted? (r/atom false))

(defn search-bar
  [search-text-atom]
  [:> rn/View {:style {:border-width 1
                       :border-radius 2
                       :border-color :gray
                       :flex-direction :row
                       :align-items :end
                       :padding 2}}
   [:> Ionicons {:name "search" :color :gray :size 16}]
   [:> rn/TextInput {:value @search-text-atom
                     :style {:color :white
                             :display :flex
                             :width "100%"}
                     :enter-key-hint "search"
                     :on-change-text (fn [text]
                                       (reset! search-text-atom text))}]
   [:> rn/Pressable {:on-press #(reset! search-text-atom "")}
    [:> Ionicons {:name "close-outline" :color :gray :size 16}]]])
