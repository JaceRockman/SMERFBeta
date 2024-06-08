(ns organisms.library
  (:require [clojure.string :as str]
            ["react-native" :as rn]
            ["@expo/vector-icons" :refer [FontAwesome5]]
            [systems.navigation :as navigation]
            [organisms.config :as config :refer [palette]]
            [organisms.atoms.buttons :as buttons]
            [organisms.atoms.markdown :as markdown]
            [organisms.atoms.text :as text]
            [organisms.molecules.lists :as lists]
            [organisms.molecules.scroll-position-indicator :as spi]
            [organisms.compounds.search-filter-sort-list :as sfs-list]
            [organisms.compounds.nav-bar :refer [nav-bar]]
            [organisms.compounds.tab-bar :refer [tab-bar]]
            [organisms.environments.modals :as modals]))

(defn out-button
  [conn]
  [:> rn/Pressable {:style {:width "5%"}
                    :on-press #(navigation/nav-out conn)}
   [:> FontAwesome5 {:name :arrow-up :color (:surface-700 @palette) :size 20}]])

(defn back-button
  [conn]
  [:> rn/Pressable {:style {:width "5%"}
                    :on-press #(navigation/nav-back conn)}
   [:> FontAwesome5 {:name :chevron-left :color (:surface-700 @palette) :size 20}]])

(defn settings-button
  [conn]
  [:> rn/Pressable {:style {:width "5%"}}
   [:> FontAwesome5 {:name :ellipsis-v :color (:surface-700 @palette) :size 18}]])

(defn view-frame-header
  [conn]
  (let [title (navigation/get-current-nav-state-title conn)]
    [:> rn/View {:style {:flex-direction :row :width "100%" :height "5%" :padding 10 :align-items :center}}
     (back-button conn)
     (out-button conn)
     (text/view-header-text {:text title :style {:width "90%" :color (:surface-700 @palette)}})
     (settings-button conn)]))

(defn view-frame
  [conn content]
  [:> rn/View {:style {:width (config/screen-width)
                       :align-items :center
                       :background-color (:surface-100 @palette)
                       :color (:surface-700 @palette)
                       :height (config/screen-height)}}
   (view-frame-header conn)
   [:> rn/View {:style {:height "90%" :width "100%"}} content]
   (tab-bar conn)
   (modals/modal)])

(def modal-content modals/modal-content)
(def hide-modal-content modals/hide-modal-content)
(def show-modal-content modals/show-modal-content)

(def button buttons/button)
(def primary-button buttons/primary-button)
(def secondary-button buttons/secondary-button)
(def tertiary-button buttons/tertiary-button)

(def default-text text/default-text)
(def inverted-text text/inverted-text)
(def view-header-text text/view-header-text)

(def default-markdown markdown/default-markdown)
(def default-realm-markdown markdown/default-realm-markdown)

(def flat-list lists/FlatList)
(def search-filter-sort-list sfs-list/search-filter-sort-list)

(def scroll-position-indicator spi/scroll-position-indicator)
(def ruleset-horizontal-position spi/ruleset-horizontal-position)
(def creature-horizontal-position spi/creature-horizontal-position)
(def roll-horizontal-position spi/roll-horizontal-position)
(def indicated-scroll-view spi/indicated-scroll-view)
