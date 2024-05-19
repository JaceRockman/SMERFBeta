(ns organisms.compounds.nav-bar
  (:require ["react-native" :as rn]
            ["@expo/vector-icons" :refer [FontAwesome5]]
            [systems.navigation :as navigation]
            [organisms.config :refer [palette]]
            [organisms.environments.overlays :refer [menu]]
            [organisms.atoms.text :refer [view-header-text]]
            [organisms.atoms.buttons :refer [button]]))

(defn home-button
  [conn]
  (button {:style {:background-color :inherit}
           :on-press #(navigation/navigate! conn [:campaign])}
          [:> FontAwesome5 {:name :home :color (:surface-100 @palette) :size 24}]))

(defn nav-bar
  [conn headers]
  [:> rn/View {:style {:background-color (:surface-600 @palette)
                       :width "100%"
                       :height "5%"
                       :flex-direction :row
                       :justify-content :space-between}}
   (home-button conn)
   [:> rn/View
    (map #(view-header-text {:text %}) headers)]
   (menu conn)])
