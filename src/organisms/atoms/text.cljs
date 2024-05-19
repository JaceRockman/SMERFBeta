(ns organisms.atoms.text
  (:require ["react-native" :as rn]
            [organisms.config :refer [palette]]))

(def default-text-style
  {:flex 1
   :color (:surface-700 @palette)
   :font-size 18})

(def view-header-text-style
  {:text-align :center
   :font-size 24
   :font-weight :bold
   :color (:surface-700 @palette)})

(defn view-header-text
  [{:keys [style text]}]
  [:> rn/Text {:style (merge view-header-text-style style)} text])

(defn default-text
  [text & [style]]
  [:> rn/Text {:style (merge default-text-style style)}
   text])

(defn inverted-text
  [text & [style]]
  [:> rn/Text {:style (merge default-text-style {:color (:surface-100 @palette)} style)}
   text])
