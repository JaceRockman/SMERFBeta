(ns entities.creatures.views.resources
  (:require ["react-native" :as rn]
            [organisms.config :refer [palette screen-width screen-height]]
            [entities.resources.data.interface :as resource-data]
            [entities.resources.views :as resources-view]))

(defn resources [conn {:keys [:db/id]}]
  [:> rn/View {:style {:width (screen-width) :flex 1}}
   (resources-view/creature-resource-list-2 conn id)])
