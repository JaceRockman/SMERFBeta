(ns organisms.atoms.text
  (:require ["react-native" :as rn]))

(def default-text-style
  {:color :white
   :font-size 18})

(def view-header-text-style
  {:text-align :center
   :font-size 24
   :font-weight :bold
   :color :black})

(defn view-header-text
  [{:keys [style text]}]
  [:> rn/Text {:style (merge view-header-text-style style)} text])

(defn default-text
  [{:keys [style text]}]
  [:> rn/Text {:style (merge default-text-style style)}
   text])
