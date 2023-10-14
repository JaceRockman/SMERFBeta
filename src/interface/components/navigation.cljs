(ns interface.components.navigation
  (:require [reagent.core :as r]
            ["react-native" :as rn]
            ["@expo/vector-icons" :refer [FontAwesome5 Ionicons]]
            [data.app-state :as app-state]
            [data.realms :as realms]
            [interface.widgets.buttons :refer [button]]))

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

(defn realm-select-view
  []
  (button {:style {:background-color :inherit}
           :on-press #(app-state/navigate :realm)}
          [:> FontAwesome5 {:name :home :color :black :size 24}]))

(defn tab-bar-button [icon destination]
  (button {:key destination
           :style {:background-color :inherit}
           :on-press (fn [] (app-state/navigate destination))}
          icon))

(defn tab-bar
  [& [icons destinations]]
   [:> rn/View {:style {:justify-content :space-evenly :width "100%" :flex-direction :row}}
    (map tab-bar-button
         (or icons
             [[:> FontAwesome5 {:key 1 :name "globe-europe" :size 24 :color :black}]
              [:> FontAwesome5 {:key 2 :name "book" :size 24 :color :black}]
              [:> FontAwesome5 {:key 3 :name "users" :size 24 :color :black}]
              [:> FontAwesome5 {:key 4 :name "coins" :size 24 :color :black}]
              [:> FontAwesome5 {:key 5 :name "running" :size 24 :color :black}]]) 
         (or destinations
             [:setting :rules :creatures :resources :actions]))])

(defn ns-keys->strings [m]
  (reduce (fn [r [k v]] (into r {(str (symbol k)) v})) {} m))

(defn section-header [])

(defn section [items on-press])

(defn list-item [item on-press]
  (r/as-element
   [:> rn/TouchableOpacity {:style {:width "100%" :background-color :gray}
                            :on-press on-press}
    [:> rn/Text {:style {:padding 5 :color :white }}
     (-> item :item :realm/title)]]))

(defn list-select [items on-press]
  (let [items (map ns-keys->strings items)]
    [:> rn/SectionList {:style {:width "100%"}
                        :sections [{:title "Realms" :data items}]
                        ;; :render-section-header (fn [item] (r/as-element [:> rn/Text "Header"]))
                        :render-item (fn [js-item]
                                       (let [item (js->clj js-item {:keywordize-keys true})]
                                         (list-item item (on-press item))))
                        :key-extractor #(:db/id %)}]))
