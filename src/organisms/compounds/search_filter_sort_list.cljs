(ns organisms.compounds.search-filter-sort-list
  (:require [clojure.string :as str]
            [reagent.core :as r]
            ["react-native" :as rn]
            [organisms.molecules.lists :refer [SectionList FlatList]]
            [organisms.molecules.search-bar :refer [search-bar]]
            [organisms.molecules.filter-section :refer [filter-button]]
            [organisms.atoms.text :as text]))

(def external-search-text (r/atom {}))

(defn search-filter-sort-list
  [{:keys [list-header column-headers column-flex-vals
           items item-format-fn
           init-search-fns init-filter-fns init-sort-fns]}]
  (if (nil? (get @external-search-text (or list-header "search")))
    (swap! external-search-text #(assoc % (or list-header "search") (r/atom ""))))
  (let [search-fns
        (r/atom (or init-search-fns
                    [(fn [items]
                       (filter #(str/includes?
                                 (str/lower-case (apply str (vals %)))
                                 (str/lower-case
                                  (if-let [search-text-atom (get @external-search-text (or list-header "search"))]
                                    (deref search-text-atom)
                                    "")))
                               items))]))
        full-fn-list (concat @search-fns init-filter-fns init-sort-fns)
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
     (search-bar external-search-text (or list-header "search"))
     ((if (empty? init-sort-fns) FlatList SectionList)
      {:items reduced-items
       :headers column-headers
       :flex-vals column-flex-vals
       :row-constructor item-format-fn})]))
