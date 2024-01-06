(ns interface.components.navigation
  (:require [reagent.core :as r]
            ["react-native" :as rn]
            ["@expo/vector-icons" :refer [FontAwesome5 Ionicons]]
            [data.app-state :as app-state]
            [data.realms :as realms]
            [interface.widgets.buttons :refer [button]]
            [clojure.string :as str]))

(def menu-expanded? (r/atom false))

(defn menu []
  (let [background-color (when @menu-expanded? :black)
        text-color (if @menu-expanded? :white :black)]
    [:> rn/View {:style {:align-self :flex-end
                         :align-items :flex-end
                         :background-color background-color}}
     (button {:style {:background-color :inherit}
              :on-press (fn [] (swap! menu-expanded? not))}
             [:> Ionicons {:name "menu" :color text-color :size 36}])
     (when @menu-expanded?
       (button {:style {:background-color :inherit}
                :on-press (fn [] (doall
                                  (reset! menu-expanded? false)
                                  (app-state/navigate :home)))}
               "Home"))]))

(defn realm-management-nav-button
  []
  (button {:style {:background-color :inherit}
           :on-press #(app-state/navigate :realm)}
          [:> FontAwesome5 {:name :home :color :black :size 24}]))

(defn tab-bar-button [icon destination]
  (button {:key destination
           :style {:margin 10 :background-color :inherit :align-self :center}
           :on-press (fn [] (app-state/navigate destination))}
          icon))

(defn tab-bar
  [& [icons destinations]]
  [:> rn/View {:style {:display :grid :grid-auto-flow :column :background-color :lavender :justify-content :space-evenly :width "100%" :align-self :flex-end}}
   (if (and (not-empty icons) (not-empty destinations))
     (map tab-bar-button icons destinations)
     (map tab-bar-button
          [[:> FontAwesome5 {:key 1 :name "globe-europe" :size 24 :color :black}]
           [:> FontAwesome5 {:key 2 :name "book" :size 24 :color :black}]
           [:> FontAwesome5 {:key 3 :name "users" :size 24 :color :black}]
           [:> FontAwesome5 {:key 4 :name "coins" :size 24 :color :black}]
           [:> FontAwesome5 {:key 5 :name "running" :size 24 :color :black}]]
          [:setting :rules :creatures :resources :actions]))])

(defn ns-keys->strings [m]
  (reduce (fn [r [k v]] (into r {(str (symbol k)) v})) {} m))

(defn section [items on-press])

(defn section-header
  [section-data]
  (let [{:keys [section]} (js->clj section-data {:keywordize-keys true})
        {:keys [title data]} section
        column-headers (map name (keys (dissoc (first data) :id)))]
    (r/as-element
     [:> rn/View
      [:> rn/Text title]
      (when (< 1 (count column-headers))
        [:> rn/View {:style {:flex-direction :row :justify-content :space-evenly}}
         (map (fn [column-header]
                [:> rn/Text (str/capitalize column-header)])
              column-headers)])])))

(defn list-item [data on-press]
  (r/as-element
   [:> rn/TouchableOpacity {:style {:width "100%"
                                    :background-color :gray
                                    :justify-content :space-evenly
                                    :flex-direction :row}
                            :on-press on-press}
    (map (fn [[k v]]
           [:> rn/Text {:style {:padding 5 :color :white :font-size 18}} v])
         (dissoc (:item data) :id))]))

(defn list-select [items on-press]
  (let [items (map ns-keys->strings items)]
    [:> rn/View
     ;; [:> rn/TextInput {:placeholder "search"}]
     [:> rn/SectionList {:style {:width "100%"}
                         :sections [{:title "Realms" :data items}]
                         ;; :render-section-header section-header
                         :render-item (fn [js-item]
                                        (let [item (js->clj js-item {:keywordize-keys true})]
                                          (list-item item (on-press item))))
                         :key-extractor #(:db-id %)
                         :sticky-section-headers-enabled true}]]))

(defn creature-list-nav-button
  []
  (button {:style {:background-color :inherit}
           :on-press #(println "navigate to creature list")}
          [:> rn/View {:style {:flex-direction :row}}
           [:> FontAwesome5 {:name :chevron-left :color :white :size 16}]
           [:> FontAwesome5 {:name :search :color :white :size 14}]]))

(defn SectionList
  [sections headers flex-vals row-constructor]
  [:> rn/SectionList {:sections (clj->js sections)
                      :render-section-header (fn [section]
                                               (let [clj-section-title (-> (clojure.walk/keywordize-keys (js->clj section)) :section :title)]
                                                 (r/as-element
                                                  [:> rn/View
                                                   [:> rn/Text {:style {:font-size 24}}
                                                    clj-section-title]
                                                   [:> rn/View {:style {:flex-direction :row}}
                                                    (map (fn [header flex]
                                                           [:> rn/Text {:style {:flex flex}} header])
                                                         headers
                                                         flex-vals)]])))
                      :render-item (fn [js-item]
                                     (let [clj-item (js->clj (.-item js-item))]
                                       (r/as-element (row-constructor (clojure.walk/keywordize-keys clj-item)))))
                      :sticky-section-headers-enabled true}])

(defn FlatList
  [items headers flex-vals row-constructor]
  [:> rn/FlatList {:data (clj->js items)
                   :list-header-component (fn []
                                            (r/as-element
                                             [:> rn/View {:style {:flex-direction :row}}
                                              (map (fn [header flex]
                                                     [:> rn/Text {:style {:flex flex}} header])
                                                   headers
                                                   flex-vals)]))
                   :render-item (fn [js-item]
                                  (let [clj-item (js->clj (.-item js-item))]
                                    (r/as-element (row-constructor (clojure.walk/keywordize-keys clj-item)))))}])

(defn search-filter-sort-list
  [{:keys [items column-headers column-flex-vals item-format-fn search-fns filter-fns sort-fns]}]
  (let [full-fn-list (concat search-fns filter-fns sort-fns)
        reduced-items (if (empty? full-fn-list)
                             items
                             (reduce (fn [list function]
                                       (function list))
                                     items
                                     full-fn-list))]
    [:> rn/View {:style {:width "100%"}}
     ((if (empty? sort-fns) FlatList SectionList)
      reduced-items
      column-headers
      column-flex-vals
      item-format-fn)]))
