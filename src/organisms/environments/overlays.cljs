(ns organisms.environments.overlays
  (:require [reagent.core :as r]
            ["react-native" :as rn]
            ["@expo/vector-icons" :refer [Ionicons]]
            [systems.navigation :as navigation]
            [organisms.atoms.buttons :refer [button]]))

(def menu-expanded? (r/atom false))

(defn menu
  [conn]
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
                                  (navigation/navigate! conn :home)))}
               "Home"))]))
