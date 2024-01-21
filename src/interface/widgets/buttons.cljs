(ns interface.widgets.buttons
  (:require ["react-native" :as rn]
            [interface.styles.buttons :as button-styles]))

(defn test-button
  [{:keys [text text-style button-style on-press disabled?]}]
  [:> rn/Pressable {:style button-style 
                    :on-press on-press
                    :disabled disabled?}
   [:> rn/Text {:style text-style}
    text]])

(defn primary-button
  [{:keys [text text-style-variant button-variant on-press disabled?]}]
  (test-button {:text text
                :text-style button-styles/primary-button-text
                :button-style (button-styles/primary-button button-variant)
                :on-press on-press
                :disabled? disabled?}))

(defn secondary-button
  [{:keys [text text-style button-variant on-press disabled?]}]
  (test-button {:text text
                :text-style button-styles/secondary-button-text
                :button-style (button-styles/secondary-button button-variant)
                :on-press on-press
                :disabled? disabled?}))

(defn tertiary-button
  [{:keys [text text-style button-variant on-press disabled?]}]
  (test-button {:text text
                :text-style button-styles/tertiary-button-text
                :button-style (button-styles/tertiary-button button-variant)
                :on-press on-press
                :disabled? disabled?}))

(defn button [{:keys [style text-style on-press
                      disabled? disabled-style disabled-text-style]
               :or {on-press #()}} text]
  [:> rn/Pressable {:style (cond-> {:font-size        18
                                    :padding          6
                                    :border-radius    999
                                    :background-color :gray}
                             :always (merge style)
                             disabled? (merge {:background-color "#aaaaaa"}
                                              disabled-style))
                    :on-press on-press
                    :disabled disabled?}
   [:> rn/Text {:style (cond-> {:padding-left  12
                                :padding-right 12
                                :font-weight   :bold
                                :font-size     18
                                :color         :white}
                         :always (merge text-style)
                         disabled? (merge {:color :white}
                                          disabled-text-style))}
    text]])
