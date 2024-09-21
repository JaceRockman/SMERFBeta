(ns entities.creatures.views.resources
  (:require ["react-native" :as rn]
            [organisms.config :refer [palette screen-width screen-height]]
            [entities.resources.data.interface :as resources-data]
            [entities.resources.views :as resources-view]))

(defn resources [conn {:keys [:creature/resources]}]
  (let [resource-details (map (fn [resource]
                                {:resource-data (resources-data/get-resource conn (first resource))
                                 :resource-quantity (last resource)}) resources)]
    [:> rn/View {:style {:width (screen-width) :flex 1}}
     (resources-view/creature-resource-list conn {:resources resource-details
                                         :header "Resources"})]))
