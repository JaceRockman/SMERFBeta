(ns organisms.config)

(defn screen-height [] (.-height js/screen))
(defn screen-width [] (.-width js/screen))

(def default-palette
  {:color-primary-000 "#000000"
   :color-primary-100 "#673ab7"
   :color-primary-200 "#7a4fbf"
   :color-primary-300 "#8c64c8"
   :color-primary-400 "#9d79d0"
   :color-primary-500 "#ae8fd8"
   :color-primary-600 "#bfa5e0"
   
   :color-surface-100 "#000000"
   :color-surface-200 "#1e1e1e"
   :color-surface-300 "#353535"
   :color-surface-400 "#4e4e4e"
   :color-surface-500 "#696969"
   :color-surface-600 "#858585"
   :color-surface-700 "#ffffff"})
