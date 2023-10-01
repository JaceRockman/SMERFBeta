(ns interface.components.organization
  (:require ["react-native" :as rn]))

(defn card [contents]
  [:> rn/View {:style {:background-color :red}}
   contents])
