(ns organisms.stragglers
  (:require ["react-native" :as rn]))

(defn campaigns-page
  [content]
  [:> rn/ScrollView {:style {:flex 1 :width "100%"}
                        :content-container-style {:align-items :center
                                                  :justify-content :space-between
                                                  :height "100%"}}
     content])

(defn full-width-view
  [content]
  [:> rn/View {:style {:width "100%"}}
   content])
