(ns organisms.library
  (:require [clojure.string :as str]
            ["react-native" :as rn]
            [systems.navigation :as navigation]
            [organisms.config :as config]
            [organisms.atoms.buttons :as buttons]
            [organisms.atoms.markdown :as markdown]
            [organisms.atoms.text :as text]
            [organisms.molecules.lists :as lists]
            [organisms.compounds.search-filter-sort-list :as sfs-list]
            [organisms.compounds.nav-bar :refer [nav-bar]]
            [organisms.compounds.tab-bar :refer [tab-bar]]
            [organisms.environments.modals :refer [modal]]))

(defn view-frame
  [conn content & campaign-title]
  (let [view-title (str/capitalize (name (first (navigation/get-full-navigation-state conn))))]
    [:> rn/View {:style {:width (config/screen-width)
                         :align-items :center
                         :background-color "#121212"
                         :color :white
                         :height (config/screen-height)}}
     (nav-bar conn [campaign-title view-title])
     [:> rn/View {:style {:height "90%" :width "100%"}} content]
     (tab-bar conn)
     (modal conn)]))

(def button buttons/button)
(def primary-button buttons/primary-button)
(def secondary-button buttons/secondary-button)
(def tertiary-button buttons/tertiary-button)

(def default-text text/default-text)
(def view-header-text text/view-header-text)

(def default-markdown markdown/default-markdown)
(def default-realm-markdown markdown/default-realm-markdown)

(def search-filter-sort-list sfs-list/search-filter-sort-list)

