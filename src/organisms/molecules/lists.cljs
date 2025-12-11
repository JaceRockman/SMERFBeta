(ns organisms.molecules.lists
  (:require
   ["@expo/vector-icons" :refer [FontAwesome5]]
   ["react-native" :as rn]
   [clojure.walk]
   [organisms.atoms.text :as text]
   [organisms.config :refer [palette]]
   [reagent.core :as r]))

(def sort-manager
  (r/atom {}))

(defn simplify-sort-order
  [sort-manager]
  (let [sorts-in-order (sort-by (fn [sort-value]
                                  (:order (last sort-value)))
                                @sort-manager)]
    (reset! sort-manager
            (into {}
                  (map-indexed (fn [idx [k v]] [k (assoc v :order (inc idx))]) sorts-in-order)))))

(defn toggle-sort-manager
  [sort-manager header-key]
  (case (get-in @sort-manager [header-key :asc?])
    nil (swap! sort-manager #(assoc % header-key {:asc? true :order (inc (count @sort-manager))}))
    true (swap! sort-manager #(assoc-in % [header-key :asc?] false))
    false (do (swap! sort-manager #(dissoc % header-key))
              (simplify-sort-order sort-manager))))

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
  [{:keys [items headers flex-vals item-format-fn sort-manager]}]
  (let [sort-state @sort-manager]
    [:> rn/SectionList
     {:sections
      (clj->js (if (not-empty sort-state)
                 (let [ordered-sort-list (sort-by (fn [sort-value]
                                                    (:order (last sort-value)))
                                                  sort-state)
                       column-sort-list (mapv (fn [[k v]]
                                                (let [sort-criteria (get-in headers [k :sort-fn])]
                                                  #(sort-by sort-criteria (if (:asc? v) < >) %)))
                                              ordered-sort-list)]
                   (mapv (fn [section]
                           (update section
                                   :data
                                   (fn [section-data]
                                     (reduce #(%2 %1) section-data (reverse column-sort-list)))))
                         items))
                 items))

      :render-section-header
      (fn [section]
        (let [clj-section       (clojure.walk/keywordize-keys (js->clj section))
              clj-section-title (-> clj-section :section :title)
              sort-manager-ref sort-manager]
          (r/as-element
           [:> rn/View {:style {:background-color (:surface-100 @palette)}}
            (text/default-text clj-section-title
                               {:font-size  20
                                :padding    10})
            [:> rn/View {:style {:flex-direction :row :background-color (:surface-100 @palette)}}
             (doall (map (fn [[header-key header-data] flex]
                           [:> rn/Pressable {:key (str "header-" header-key)
                                             :style {:flex flex :flex-direction :row :padding-left 15 :padding-right 15}
                                             :on-press (fn []
                                                         (toggle-sort-manager sort-manager-ref header-key))}
                            (text/default-text (:header header-data))
                            (let [{:keys [asc? order]} (get @sort-manager-ref header-key)]
                              (case asc?
                                true [:> rn/View
                                      [:> FontAwesome5 {:name :chevron-up :color (:surface-700 @palette) :size "50%"}]
                                      (text/default-text order {:size "30%"})]
                                false [:> rn/View
                                       [:> FontAwesome5 {:name :chevron-down :color (:surface-700 @palette) :size "50%"}]
                                       (text/default-text order {:size "30%"})]
                                nil))])
                         headers
                         flex-vals))]
            (section-separator)])))

    :render-item
    (fn [js-item]
      (let [clj-item (js->clj (.-item js-item))]
        (r/as-element (item-format-fn (clojure.walk/keywordize-keys clj-item)))))

    #_:SectionSeparatorComponent
    #_(fn []
        (r/as-element [:> rn/View {:style {:height           2
                                           :width            "90%"
                                           :background-color :white
                                           :align-self       :center}}]))

    :ItemSeparatorComponent
    (item-separator)

    :key-extractor
    (fn [js-item index]
      (let [clj-item (clojure.walk/keywordize-keys (js->clj js-item))]
        (or (:id clj-item)
            (:db/id clj-item)
            (str "item-" index))))

    :listEmptyComponent
    (fn []
      (r/as-element (text/default-text "No Items")))

    :sticky-section-headers-enabled
    true}]))


(defn FlatList
  [{:keys [items headers flex-vals item-format-fn sort-manager]}]
  (let [sort-state (when sort-manager @sort-manager)]
    [:> rn/FlatList
     {:data
      (clj->js (if (and sort-manager (not-empty sort-state))
                 (let [ordered-sort-list (sort-by (fn [sort-value]
                                                    (:order (last sort-value)))
                                                  sort-state)
                       column-sort-list (mapv (fn [[k v]]
                                               (let [sort-criteria (get-in headers [k :sort-fn])]
                                                 (if sort-criteria
                                                   #(sort-by sort-criteria (if (:asc? v) < >) %)
                                                   identity)))
                                             ordered-sort-list)]
                   (reduce #(%2 %1) items column-sort-list))
                 items))

      :ListHeaderComponent
      (fn []
        (let [sort-manager-ref sort-manager]
          (r/as-element
           [:> rn/View {:style {:flex-direction :row :background-color (:surface-100 @palette)}}
            (doall (map (fn [[header-key header-data] flex]
                          [:> rn/Pressable {:key (str "header-" header-key)
                                            :style {:flex flex}
                                            :on-press (fn [] (when sort-manager-ref (toggle-sort-manager sort-manager-ref header-key)))}
                           (text/default-text (:header header-data))
                           (let [header-toggle-val (when sort-manager-ref (:asc? (get @sort-manager-ref header-key)))]
                             (case header-toggle-val
                               true [:> FontAwesome5 {:name :chevron-up :color (:surface-700 @palette) :size 10}]
                               false [:> FontAwesome5 {:name :chevron-down :color (:surface-700 @palette) :size 10}]
                               nil))])
                        headers
                        flex-vals))])))

    :render-item
    (fn [js-item]
      (let [clj-item (js->clj (.-item js-item))]
        (r/as-element (item-format-fn (clojure.walk/keywordize-keys clj-item)))))

    :ItemSeparatorComponent
    (item-separator)

    :key-extractor
    (fn [js-item index]
      (let [clj-item (clojure.walk/keywordize-keys (js->clj js-item))]
        (or (:id clj-item)
            (:db/id clj-item)
            (str "item-" index))))

    :ListEmptyComponent
    (fn []
      (r/as-element [:> rn/Text {:style {:color (:surface-700 @palette)}} "No Items"]))}]))
