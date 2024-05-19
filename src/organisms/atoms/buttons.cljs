(ns organisms.atoms.buttons
  (:require ["react-native" :as rn]
            [organisms.config :refer [palette]]))

(defn test-button
  [{:keys [text text-style button-style on-press disabled?]}]
  [:> rn/Pressable {:style button-style 
                    :on-press on-press
                    :disabled disabled?}
   [:> rn/Text {:style text-style}
    text]])

(defn primary-button-style
  [& [variant]]
  (let [base-button-style {:padding 15
                           :background-color (:primary-200 @palette)
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

(def primary-button-text-style
  {:color (:primary-100 @palette)
   :font-size 18})

(defn primary-button
  [{:keys [text text-style-variant button-variant on-press disabled?]}]
  (test-button {:text text
                :text-style primary-button-text-style
                :button-style (primary-button-style button-variant)
                :on-press on-press
                :disabled? disabled?}))

(defn secondary-button-style
  [& [variant]]
  (let [base-button-style {:padding 10
                           :border-width 2
                           :color (:primary-600 @palette)
                           :border-color (:primary-200 @palette)
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

(def secondary-button-text-style
  {:color (:primary-600 @palette)})

(defn secondary-button
  [{:keys [text text-style button-variant on-press disabled?]}]
  (test-button {:text text
                :text-style secondary-button-text-style
                :button-style (secondary-button-style button-variant)
                :on-press on-press
                :disabled? disabled?}))

(defn tertiary-button-style
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

(def tertiary-button-text-style
  {:color (:primary-600 @palette)})

(defn tertiary-button
  [{:keys [text text-style button-variant on-press disabled?]}]
  (test-button {:text text
                :text-style tertiary-button-text-style
                :button-style (tertiary-button-style button-variant)
                :on-press on-press
                :disabled? disabled?}))

(defn button [{:keys [style text-style on-press
                      disabled? disabled-style disabled-text-style]
               :or {on-press #()}} text]
  [:> rn/Pressable {:style (cond-> {:font-size        18
                                    :padding          6
                                    :border-radius    999
                                    :background-color (:surface-400 @palette)}
                             :always (merge style)
                             disabled? (merge {:background-color "#aaaaaa"}
                                              disabled-style))
                    :on-press on-press
                    :disabled disabled?}
   [:> rn/Text {:style (cond-> {:font-weight   :bold
                                :font-size     18
                                :color         (:surface-700 @palette)}
                         :always (merge text-style)
                         disabled? (merge {:color (:surface-400 @palette)}
                                          disabled-text-style))}
    text]])
