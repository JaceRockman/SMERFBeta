(ns organisms.compounds.search-filter-sort-list
  (:require [clojure.string :as str]
            [datascript.core :as ds]
            [reagent.core :as r]
            ["react-native" :as rn]
            ["@expo/vector-icons" :refer [FontAwesome5]]
            [organisms.config :refer [palette]]
            [organisms.molecules.lists :refer [SectionList FlatList]]
            [organisms.molecules.search-bar :refer [search-bar]]
            [organisms.molecules.filter-section :refer [filter-button]]
            [organisms.atoms.text :as text]
            [organisms.atoms.buttons :as buttons]))

(def external-search-text (r/atom {}))
(def collapse-state (r/atom {}))

(defn collapse-chevron-down
  []
  [:> FontAwesome5 {:name :chevron-down
                    :color (:surface-700 @palette)
                    :size 20}])

(defn collapse-chevron-up
  []
  [:> FontAwesome5 {:name :chevron-up
                    :color (:surface-700 @palette)
                    :size 20}])

(defn list-collapse-button
  [component-key header-text]
  (buttons/button {:style {:background-color :inherit :align-items :center :justify-content :center}
                   :on-press #(swap! collapse-state (fn [collapse-map]
                                                      (update collapse-map component-key not)))}
                  [:> rn/View {:style {:flex-direction :row :align-items :center :justify-content :center}}
                   header-text
                   [:> rn/View {:style {:padding-left 5}}
                    (if (get @collapse-state component-key)
                      (collapse-chevron-down)
                      (collapse-chevron-up))]]))

(def default-sort-manager
  (r/atom {"Title" {:asc? true :order 1}}))

(defn new-item-button
  [new-item-fn]
  (buttons/button {:style {:background-color (:surface-200 @palette)
                           :align-items :center
                           :justify-content :center}
                   :on-press new-item-fn}
                  [:> FontAwesome5 {:name :plus :color (:surface-700 @palette) :size 20}]))

(defn search-filter-sort-list
  [{:keys [list-header column-flex-vals column-headers
           collapsed?
           items item-format-fn new-item-fn add-item-fn
           search-filter-sort-component sort-manager]}
   component-key]
  (when (and (some? collapsed?)
             (not (contains? @collapse-state component-key)))
    (swap! collapse-state #(assoc % component-key collapsed?)))
  (let [header-text (text/default-text list-header
                                       {:font-size 24
                                        :flex 0
                                        :text-align :center})]
    [:> rn/View {:style {:width "100%" :max-height "100%" :flex 100 :padding 10}}
     (if (not (nil? collapsed?))
       (list-collapse-button component-key header-text)
       header-text)
     (when-not (get @collapse-state component-key)
       [:> rn/View
        [:> rn/View {:style {:flex-direction :row :justify-content :center :width "100%"}}
         search-filter-sort-component
         (when add-item-fn
           [:> rn/Pressable {:style {:padding-left 10}
                             :on-press add-item-fn}
            [:> FontAwesome5 {:name :plus :color (:surface-700 @palette) :size 20}]])]])
     (when-not (get @collapse-state component-key)
       (let [list-function (if (:data (first items)) SectionList FlatList)]
         (list-function
          {:items items
           :headers (if (string? (first column-headers))
                      (into {} (map (fn [header-text]
                                      [header-text {:header header-text
                                                    :sort-fn (fn [_] nil)}])
                                    column-headers))
                      column-headers)
           :flex-vals column-flex-vals
           :item-format-fn item-format-fn
           :sort-manager (or sort-manager default-sort-manager)})))
     (when new-item-fn (new-item-button new-item-fn))]))
