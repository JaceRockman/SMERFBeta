(ns organisms.molecules.scroll-position-indicator
  (:require [clojure.math :as math]
            [reagent.core :as r]
            ["react-native" :as rn]
            ["@expo/vector-icons" :refer [Entypo]]
            [organisms.config :refer [palette]]))

(def ruleset-horizontal-position (r/atom 0))
(def creature-horizontal-position (r/atom 0))
(def roll-horizontal-position (r/atom 0))

(defn scroll-position-indicator
  [position-atom sections]
  [:> rn/View {:key (apply str (interpose "-" sections))
               :style {:width "100%" :height 25 :align-items :center :justify-content :center :flex-direction :row :gap 3}}
   (doall
    (map (fn [section]
           [:> Entypo {:name "dot-single" :color (if (= section (get sections @position-atom)) (:surface-700 @palette) (str (:surface-700 @palette) "50")) :size 20}])
                  sections))])

(defn indicated-scroll-view
  [position-tracker-atom sections children]
  [:> rn/View {:style {:flex 1}}
   (scroll-position-indicator
    position-tracker-atom
    sections)
   (into []
         (concat
          [:> rn/ScrollView {:on-scroll
                             (fn [scroll-data]
                               (reset! position-tracker-atom
                                       (math/round (/
                                                    (get-in (js->clj scroll-data)
                                                            ["nativeEvent" "contentOffset" "x"])
                                                    412))))
                             :scrollEventThrottle             32
                             :paging-enabled                  true
                             :horizontal                      true
                             :showsHorizontalScrollIndicator  false
                             :shows-vertical-scroll-indicator false}
           ]
          children))])
