(ns organisms.compounds.search-filter-sort-list
  (:require [reagent.core :as r]
            ["react-native" :as rn]
            [organisms.molecules.lists :refer [SectionList FlatList]]
            [organisms.atoms.text :as text]))

(defn search-filter-sort-list
  [{:keys [list-header column-headers column-flex-vals
           items item-format-fn
           init-search-fns init-filter-fns init-sort-fns]}]
  (let [search-fns (r/atom (or init-search-fns []))
        search-bar [:> rn/TextInput]
        filter-fns (r/atom (or init-filter-fns []))
        filter-select [:> rn/View]
        sort-fns (r/atom (or init-sort-fns []))
        sort-select [:> rn/View]
        full-fn-list (concat @search-fns @filter-fns @sort-fns)
        reduced-items (if (empty? full-fn-list)
                             items
                             (reduce (fn [list function]
                                       (function list))
                                     items
                                     full-fn-list))]
    [:> rn/View {:style {:width "100%" :padding 10}}
     (text/default-text {:style {:color :white
                                 :font-size 24
                                 :text-align :center}
                         :text list-header})
     search-bar
     filter-select
     sort-select
     ((if (empty? @sort-fns) FlatList SectionList)
      {:items reduced-items
       :headers column-headers
       :flex-vals column-flex-vals
       :row-constructor item-format-fn})]))
