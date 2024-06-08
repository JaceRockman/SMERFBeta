(ns organisms.compounds.search-filter-sort-list
  (:require [clojure.string :as str]
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

(defn search-filter-sort-list
  [{:keys [list-header column-headers column-flex-vals
           collapsed?
           items item-format-fn
           init-search-fns init-filter-fns item-sort-fns section-sort-fns]}
   component-key]
  (when (nil? (get @external-search-text component-key))
    (swap! external-search-text #(assoc % component-key (r/atom "")))
    (when (not (nil? collapsed?)) (swap! collapse-state #(assoc % component-key collapsed?))))
  (let [item-sort-fns* (if (empty? item-sort-fns) [#(sort-by :title %)] item-sort-fns)
        search-fns
        (r/atom (or init-search-fns
                    [(fn [items]
                       (filter #(str/includes?
                                 (str/lower-case (apply str (vals %)))
                                 (str/lower-case
                                  (if-let [search-text-atom (get @external-search-text component-key)]
                                    (deref search-text-atom)
                                    "")))
                               items))]))
        full-fn-list (concat @search-fns init-filter-fns item-sort-fns* section-sort-fns)
        reduced-items (if (empty? full-fn-list)
                        items
                        (reduce (fn [list function]
                                  (function list))
                                items
                                full-fn-list))
        header-text (text/default-text list-header
                                       {:font-size 24
                                        :flex 0
                                        :text-align :center})]
    [:> rn/View {:style {:width "100%" :max-height "100%" :flex 100 :padding 10}}
     (if (not (nil? collapsed?))
       (buttons/button {:style {:background-color :inherit :align-items :center :justify-content :center}
                        :on-press #(swap! collapse-state (fn [collapse-map]
                                                           (update collapse-map component-key not)))}
                       [:> rn/View {:style {:flex-direction :row :align-items :center :justify-content :center}}
                        header-text
                        [:> FontAwesome5 {:name (if (get @collapse-state component-key) :chevron-down :chevron-up) :color (:surface-700 @palette) :size 20}]])
       header-text)
     (when-not (get @collapse-state component-key) (search-bar external-search-text component-key))
     (when-not (get @collapse-state component-key)
       ((if (empty? section-sort-fns) FlatList SectionList)
        {:items reduced-items
         :headers column-headers
         :flex-vals column-flex-vals
         :row-constructor item-format-fn}))]))
