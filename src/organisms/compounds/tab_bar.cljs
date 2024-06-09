(ns organisms.compounds.tab-bar
  (:require ["react-native" :as rn]
            ["@expo/vector-icons" :refer [FontAwesome5]]
            [systems.navigation :as navigation]
            [organisms.config :refer [palette]]
            [organisms.atoms.buttons :refer [button]]))

(defn tab-bar-button
  [conn icon destination]
  (let [current-nav-state (keyword (first (navigation/get-main-nav-state-list conn)))
        deselect (= current-nav-state destination)
        final-destination (if deselect :campaigns destination)]
    (button {:key destination
             :style (if deselect
                      {:width "100%" :height "100%" :background-color (:surface-100 @palette) :align-self :center
                       :padding 0 :border-radius 0 :justify-content :center :align-items :center}
                      {:width "100%" :height "100%" :background-color (:surface-700 @palette) :align-self :center
                       :padding 0 :border-radius 0 :justify-content :center :align-items :center})
             :on-press (fn [] (navigation/navigate! conn final-destination))}
            (icon (if deselect (:surface-700 @palette) (:surface-100 @palette))))))

(defn tab-bar
  ([conn]
   [:> rn/View {:style {:display :grid :grid-auto-flow :column :background-color (:surface-600 @palette) :align-items :center :justify-content :stretch :width "100%" :height "5%" :align-self :flex-end}}
    (map tab-bar-button
         (repeat conn)
         [(fn [color] [:> FontAwesome5 {:key 1 :name "globe-europe" :size 24 :color color}])
          (fn [color] [:> FontAwesome5 {:key 2 :name "book" :size 24 :color color}])
          (fn [color] [:> FontAwesome5 {:key 3 :name "users" :size 24 :color color}])
          (fn [color] [:> FontAwesome5 {:key 4 :name "coins" :size 24 :color color}])
          (fn [color] [:> FontAwesome5 {:key 5 :name "dice-d20" :size 24 :color color}])]
         [:realms :rulesets :creatures :resources :actions])])
  ([conn icons destinations]
   [:> rn/View {:style {:display :grid :grid-auto-flow :column :background-color (:surface-500 @palette) :justify-content :space-evenly :width "100%" :height "5%" :align-self :flex-end}}
    (map tab-bar-button (repeat conn) icons destinations)]))
