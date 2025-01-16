(ns organisms.atoms.text-input
  (:require [reagent.core :as r]
            ["react-native" :as rn]
            [organisms.config :refer [palette]]))

(def text-input-map (r/atom {}))

(def text-input-error-map (r/atom {}))

(defn default-text-input
  ([label key]
   (default-text-input label key nil))
  ([label key preds]
   (let [text-input (get @text-input-map key)
         error (get @text-input-error-map key)]
     [:> rn/View {:style {:flex-direction :row :gap 5}}
      (if (coll? label)
        label
        [:> rn/Text {:style {:color :white}} (str label)])
      [:> rn/TextInput {:value          text-input
                        :style          {:color   (:surface-700 @palette)
                                         :display :flex
                                         :width   "100%"}
                        :enter-key-hint key
                        :on-change-text (fn [text]
                                          (swap! text-input-error-map (fn [error-map]
                                                                        (assoc error-map key (not (preds text)))))
                                          (swap! text-input-map (fn [text-input-map]
                                                                  (assoc text-input-map key text))))}]
      (when error
        [:> rn/Text {:style {:color :red}}
         "invalid input"])])))
