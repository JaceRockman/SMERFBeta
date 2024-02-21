(ns organisms.atoms.markdown
  (:require [reagent.core :as r]
            [systems.navigation :as navigation]
            [entities.realms.data.interface :as realm-data]
            [organisms.atoms.buttons :as buttons]))

(def Markdown (.-default (js/require "react-native-markdown-display")))

(defn link-click [conn section subsection] (fn [] (navigation/navigate! conn [section (keyword subsection)])))

(defn rules
  [conn nav-section]
  {:link (fn [node children parent styles]
           (r/as-element
            (buttons/primary-button
             {:text (-> node .-children first .-content)
              :on-press (link-click conn nav-section (-> node .-attributes .-href))
              :button-variant :small})))})

(defn default-markdown
  [conn input & variant]
  [:> Markdown {:style {:body {:color :white :padding-left 20 :padding-right 20}} :rules (rules conn :realm)}
   input])

(defn realm-nav-rules
  [conn]
  {:link (fn [node children parent styles]
           (let [button-text (-> node .-children first .-content)]
             (r/as-element
              (buttons/primary-button
               {:text button-text
                :on-press #(realm-data/set-active-subrealm-by-name conn button-text)
                :button-variant :small}))))})

(defn default-realm-markdown
  [conn input]
  [:> Markdown {:style {:body {:color :white :padding-left 20 :padding-right 20}} :rules (realm-nav-rules conn)}
   input])
