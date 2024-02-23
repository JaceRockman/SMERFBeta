(ns organisms.compounds.tab-bar
  (:require ["react-native" :as rn]
            ["@expo/vector-icons" :refer [FontAwesome5]]
            [systems.navigation :as navigation]
            [organisms.atoms.buttons :refer [button]]))

(defn tab-bar-button
  [conn icon destination]
  (button {:key destination
           :style {:margin 10 :background-color :inherit :align-self :center}
           :on-press (fn [] (navigation/navigate! conn destination))}
          icon))

(defn tab-bar
  ([conn]
   [:> rn/View {:style {:display :grid :grid-auto-flow :column :background-color :lavender :justify-content :space-evenly :width "100%" :height "5%" :align-self :flex-end}}
    (map tab-bar-button
         (repeat conn)
         [[:> FontAwesome5 {:key 1 :name "globe-europe" :size 24 :color :black}]
          [:> FontAwesome5 {:key 2 :name "book" :size 24 :color :black}]
          [:> FontAwesome5 {:key 3 :name "users" :size 24 :color :black}]
          [:> FontAwesome5 {:key 4 :name "coins" :size 24 :color :black}]
          [:> FontAwesome5 {:key 5 :name "running" :size 24 :color :black}]]
         [:realms :rules :creatures :resources :actions])])
  ([conn icons destinations]
   [:> rn/View {:style {:display :grid :grid-auto-flow :column :background-color :lavender :justify-content :space-evenly :width "100%" :height "5%" :align-self :flex-end}}
    (map tab-bar-button (repeat conn) icons destinations)]))
