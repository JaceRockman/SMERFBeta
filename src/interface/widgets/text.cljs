(ns interface.widgets.text
  (:require ["react-native" :as rn]
            [interface.styles.text :as text-styles]))

(defn view-header-text
  [{:keys [style text]}]
  [:> rn/Text {:style (merge text-styles/view-header-text style)} text])

(defn default-text
  [{:keys [style text]}]
  [:> rn/Text {:style (merge text-styles/default-text style)}
   text])
