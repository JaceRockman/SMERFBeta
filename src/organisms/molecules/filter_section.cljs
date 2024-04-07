(ns organisms.molecules.filter-section
  (:require [reagent.core :as r]
            ["react-native" :as rn]
            ["@expo/vector-icons" :refer [FontAwesome]]))

(defn filter-button
  []
  [:> rn/Pressable {:style {:width "100%" :align-items :center :justify-content :end :flex-direction :row :gap 5}
                    :on-press #(println "FILTER!")}
   [:> rn/Text {:style {:color :white}} "Filters"]
   [:> FontAwesome {:name "filter" :color :white :size 20}]])
