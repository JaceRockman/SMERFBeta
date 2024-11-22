(ns entities.creatures.views.resources
  (:require ["react-native" :as rn]
            [organisms.config :refer [palette screen-width screen-height]]
            [entities.resources.data.interface :as resource-data]
            [entities.resources.views :as resources-view]))

(defn resources [conn {:keys [:creature/resources]}]
  (let [resource-details (map (fn [creature-resource-id]
                                #_{:resource-data (resources-data/get-resource-from-creature-resource conn creature-resource-id)
                                   :resource-quantity (resources-data/get-quantity-from-creature-resource conn creature-resource-id)
                                   :creature-resource-id creature-resource-id
                                   :creature-id id}
                                (resource-data/get-creature-resource conn creature-resource-id))
                              resources)]
    [:> rn/View {:style {:width (screen-width) :flex 1}}
     (resources-view/creature-resource-list-2 conn resource-details)]))
