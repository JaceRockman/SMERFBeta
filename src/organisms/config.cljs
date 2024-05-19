(ns organisms.config
  (:require [reagent.core :as r]))

(defn screen-height [] (.-height js/screen))
(defn screen-width [] (.-width js/screen))

(def dark-palette
  {:primary-000 "#000000"
   :primary-100 "#673ab7"
   :primary-200 "#7a4fbf"
   :primary-300 "#8c64c8"
   :primary-400 "#9d79d0"
   :primary-500 "#ae8fd8"
   :primary-600 "#bfa5e0"
   
   :surface-100 "#000000"
   :surface-200 "#1e1e1e"
   :surface-300 "#353535"
   :surface-400 "#4e4e4e"
   :surface-500 "#696969"
   :surface-600 "#858585"
   :surface-700 "#eeeeee"})

(def light-palette
  {:surface-700 "#000000"
   :surface-600 "#1e1e1e"
   :surface-500 "#353535"
   :surface-400 "#4e4e4e"
   :surface-300 "#696969"
   :surface-200 "#858585"
   :surface-100 "#eeeeee"})

(def palette (r/atom dark-palette))
