(ns organisms.molecules.lists
  (:require [reagent.core :as r]
            ["react-native" :as rn]
            [organisms.config :as config]
            [organisms.atoms.text :as text]))

(defn section-separator
  []
  [:> rn/View {:style {:height           2
                       :width            "90%"
                       :background-color :white
                       :align-self       :center}}])

(defn item-separator
  []
  (fn []
    (r/as-element [:> rn/View {:style {:height           1
                                       :width            "80%"
                                       :background-color :white
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
         [:> rn/View {:style {:background-color (:color-surface-100 config/default-palette)}}
          (text/default-text {:style {:font-size  24
                                      :text-align :center
                                      :padding    10}
                              :text  clj-section-title})
          [:> rn/View {:style {:flex-direction :row}}
           (map (fn [header flex]
                  (text/default-text {:style {:flex      flex
                                              :font-size 16}
                                      :text  header}))
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
    (fn []
      (r/as-element [:> rn/View {:style {:height           1
                                         :width            "80%"
                                         :background-color :white
                                         :align-self       :center}}]))

    :key-extractor
    (fn [js-item]
      (let [clj-item (clojure.walk/keywordize-keys (js->clj js-item))]
        (:id clj-item)))

    :listEmptyComponent
    (fn []
      (r/as-element (text/default-text {:text "No Items"})))

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
       [:> rn/View {:style {:flex-direction :row :background-color (:color-surface-100 config/default-palette)}}
        (map (fn [header flex]
               (text/default-text {:style {:flex flex}
                                   :text  header}))
             headers
             flex-vals)]))

    :render-item
    (fn [js-item]
      (let [clj-item (js->clj (.-item js-item))]
        (r/as-element (row-constructor (clojure.walk/keywordize-keys clj-item)))))

    :ItemSeparatorComponent
    (fn []
      (r/as-element [:> rn/View {:style {:height           1
                                         :width            "80%"
                                         :background-color :white
                                         :align-self       :center}}]))

    :key-extractor
    (fn [js-item]
      (let [clj-item (clojure.walk/keywordize-keys (js->clj js-item))]
        (:id clj-item)))

    :ListEmptyComponent
    (fn []
      (r/as-element [:> rn/Text {:style {:color :white}} "No Items"]))}])
