(ns organisms.atoms.icons
  (:require ["@expo/vector-icons" :refer [FontAwesome5]]))

(defn icon
  [size on? name]
  [:> FontAwesome5 {:name name
                    :color (if on? (:surface-100 @palette) (:surface-700 @palette))
                    :size size}])

(defn physical-icon
  [size on?]
  (icon size on? :fist-raised))

(defn spiritual-icon
  [size on?]
  (icon size on? :eye))

(defn mental-icon
  [size on?]
  (icon size on? :brain))

(defn social-icon
  [size on?]
  (icon size on? :user-friends))

(defn item-icon
  [size on?]
  (icon size on? :suitcase))
