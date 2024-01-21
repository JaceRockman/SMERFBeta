(ns interface.styles.buttons
  (:require [interface.styles.palettes :as palettes :refer [default-palette]]))

(defn primary-button
  [& [variant]]
  (let [base-button-style {:padding 15
                           :background-color (:color-primary-200 default-palette)
                           :width :fit-content
                           :border-radius 5
                           :font-size 24}]
    (case variant
      :small (merge base-button-style
                    {:padding 12
                     :font-size 18})
      :large (merge base-button-style
                    {:padding 18
                     :font-size 30})
      base-button-style)))

(def primary-button-text
  {:color (:color-primary-000 default-palette)
   :font-size 18})

(defn secondary-button
  [& [variant]]
  (let [base-button-style {:padding 10
                           :border-width 2
                           :color (:color-primary-600 default-palette)
                           :border-color (:color-primary-200 default-palette)
                           :width :fit-content
                           :border-radius 5
                           :font-size 18}]
    (case variant
      :small (merge base-button-style
                    {:padding 8
                     :font-size 12})
      :large (merge base-button-style
                    {:padding 12
                     :font-size 20})
      base-button-style)))

(def secondary-button-text
  {:color (:color-primary-600 default-palette)})

(defn tertiary-button
  [& [variant]]
  (let [base-button-style {:padding 10
                           :background-color "rgba(200, 200, 200, 0.05)"
                           :width :fit-content
                           :border-radius 3
                           :font-size 16}]
    (case variant
      :small (merge base-button-style
                    {:padding 8
                     :font-size 12})
      :large (merge base-button-style
                    {:padding 12
                     :font-size 20})
      base-button-style)))

(def tertiary-button-text
  {:color (:color-primary-600 default-palette)})
