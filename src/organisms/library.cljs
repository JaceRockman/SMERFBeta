(ns organisms.library
  (:require [clojure.string :as str]
            ["react-native" :as rn]
            ["@expo/vector-icons" :refer [FontAwesome5]]
            [systems.navigation :as navigation]
            [organisms.config :as config]
            [organisms.atoms.buttons :as buttons]
            [organisms.atoms.markdown :as markdown]
            [organisms.atoms.text :as text]
            [organisms.molecules.lists :as lists]
            [organisms.molecules.scroll-position-indicator :as spi]
            [organisms.compounds.search-filter-sort-list :as sfs-list]
            [organisms.compounds.nav-bar :refer [nav-bar]]
            [organisms.compounds.tab-bar :refer [tab-bar]]
            [organisms.environments.modals :refer [modal]]))

(defn out-button
  [conn]
  [:> rn/Pressable {:style {:width "5%"}
                    :on-press #(navigation/nav-out conn)}
   [:> FontAwesome5 {:name :arrow-up :color :white :size 20}]])

(defn back-button
  [conn]
  [:> rn/Pressable {:style {:width "5%"}
                    :on-press #(navigation/nav-back conn)}
   [:> FontAwesome5 {:name :chevron-left :color :white :size 20}]])

(defn settings-button
  [conn]
  [:> rn/Pressable {:style {:width "5%"}}
   [:> FontAwesome5 {:name :ellipsis-v :color :white :size 18}]])

(defn view-frame-header
  [conn]
  (let [title (navigation/get-current-nav-state-title conn)]
    [:> rn/View {:style {:flex-direction :row :width "100%" :height "5%" :padding 10 :align-items :center}}
     (back-button conn)
     (out-button conn)
     (text/view-header-text {:text title :style {:width "90%" :color :white}})
     (settings-button conn)]))

(defn view-frame
  [conn content]
  [:> rn/View {:style {:width (config/screen-width)
                       :align-items :center
                       :background-color "#121212"
                       :color :white
                       :height (config/screen-height)}}
   (view-frame-header conn)
   [:> rn/View {:style {:height "90%" :width "100%"}} content]
   (tab-bar conn)
   (modal)])

(def button buttons/button)
(def primary-button buttons/primary-button)
(def secondary-button buttons/secondary-button)
(def tertiary-button buttons/tertiary-button)

(def default-text text/default-text)
(def view-header-text text/view-header-text)

(def default-markdown markdown/default-markdown)
(def default-realm-markdown markdown/default-realm-markdown)

(def search-filter-sort-list sfs-list/search-filter-sort-list)

(def scroll-position-indicator spi/scroll-position-indicator)
(def ruleset-horizontal-position spi/ruleset-horizontal-position)
(def creature-horizontal-position spi/creature-horizontal-position)
