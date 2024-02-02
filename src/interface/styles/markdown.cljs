(ns interface.styles.markdown
  (:require [reagent.core :as r]
            [data.app-state :as app-state]
            [data.setting :as settings]
            [interface.widgets.buttons :as buttons]
            [interface.styles.buttons :as button-styles]))

(def Markdown (.-default (js/require "react-native-markdown-display")))

(defn link-click [section subsection] (fn [] (app-state/navigate [section (keyword subsection)])))

(defn rules
  [nav-section]
  {:link (fn [node children parent styles]
           (r/as-element
            (buttons/primary-button
             {:text (-> node .-children first .-content)
              :on-press (link-click nav-section (-> node .-attributes .-href))
              :button-variant :small})))})

(defn default-markdown
  [input & variant]
  [:> Markdown {:style {:body {:color :white :padding-left 20 :padding-right 20}} :rules (rules :setting)}
   input])

(defn setting-nav-rules
  []
  {:link (fn [node children parent styles]
           (let [button-text (-> node .-children first .-content)]
             (r/as-element
              (buttons/primary-button
               {:text button-text
                :on-press #(settings/set-active-subsetting-by-name button-text)
                :button-variant :small}))))})

(defn default-setting-markdown
  [input]
  [:> Markdown {:style {:body {:color :white :padding-left 20 :padding-right 20}} :rules (setting-nav-rules)}
   input])
