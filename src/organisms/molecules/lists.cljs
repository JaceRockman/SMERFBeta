(ns organisms.molecules.lists
  (:require [reagent.core :as r]
            ["react-native" :as rn]
            [organisms.config :refer [palette]]
            [organisms.atoms.text :as text]))

(defn section-separator
  []
  [:> rn/View {:style {:height           2
                       :width            "90%"
                       :background-color (:surface-700 @palette)
                       :align-self       :center}}])

(defn item-separator
  []
  (fn []
    (r/as-element [:> rn/View {:style {:height           1
                                       :width            "80%"
                                       :background-color (:surface-700 @palette)
                                       :align-self       :center}}])))

(defn SectionList
  [{:keys [items headers flex-vals row-constructor]}]
  [:> rn/SectionList
   {:sections
    (clj->js items)

    :render-section-header
    (fn [section]
      (let [clj-section       (clojure.walk/keywordize-keys (js->clj section))
            clj-section-title (-> clj-section :section :title)]
        (r/as-element
         [:> rn/View {:style {:background-color (:surface-100 @palette)}}
          (text/default-text clj-section-title
                             {:font-size  20
                              :padding    10})
          [:> rn/View {:style {:flex-direction :row}}
           (map (fn [index header flex]
                  (text/default-text header {:flex      flex
                                             :font-size 16
                                             :text-align (when (not= 1 index) :center)}))
                (range 1 (inc (count flex-vals)))
                headers
                flex-vals)]
          (section-separator)])))

    :render-item
    (fn [js-item]
      (let [clj-item (js->clj (.-item js-item))]
        (r/as-element (row-constructor (clojure.walk/keywordize-keys clj-item)))))

    #_:SectionSeparatorComponent
    #_(fn []
        (r/as-element [:> rn/View {:style {:height           2
                                           :width            "90%"
                                           :background-color :white
                                           :align-self       :center}}]))

    :ItemSeparatorComponent
    (item-separator)

    :key-extractor
    (fn [js-item]
      (let [clj-item (clojure.walk/keywordize-keys (js->clj js-item))]
        (:id clj-item)))

    :listEmptyComponent
    (fn []
      (r/as-element (text/default-text "No Items")))

    :sticky-section-headers-enabled
    true}])

(defn FlatList
  [{:keys [items headers flex-vals row-constructor]}]
  [:> rn/FlatList
   {:data
    (clj->js items)

    :ListHeaderComponent
    (fn []
      (r/as-element
       [:> rn/View {:style {:flex-direction :row :background-color (:surface-100 @palette)}}
        (map (fn [header flex]
               (text/default-text header {:flex flex}))
             headers
             flex-vals)]))

    :render-item
    (fn [js-item]
      (let [clj-item (js->clj (.-item js-item))]
        (r/as-element (row-constructor (clojure.walk/keywordize-keys clj-item)))))

    :ItemSeparatorComponent
    (item-separator)

    :key-extractor
    (fn [js-item]
      (let [clj-item (clojure.walk/keywordize-keys (js->clj js-item))]
        (:id clj-item)))

    :ListEmptyComponent
    (fn []
      (r/as-element [:> rn/Text {:style {:color (:surface-700 @palette)}} "No Items"]))}])
