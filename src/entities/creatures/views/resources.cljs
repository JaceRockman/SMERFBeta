(ns entities.creatures.views.resources
  (:require ["react-native" :as rn]
            [organisms.config :refer [palette screen-width screen-height]]
            [entities.resources.data.interface :as resources-data]
            [entities.resources.views :as resources-view]))

(defn resources [conn {:keys [:creature/resources :db/id]}]
  (let [resource-details (map (fn [creature-resource-id]
                                {:resource-data (resources-data/get-resource-from-creature-resource conn creature-resource-id)
                                 :resource-quantity (resources-data/get-quantity-from-creature-resource conn creature-resource-id)
                                 :creature-resource-id creature-resource-id
                                 :creature-id id})
                              resources)]
    [:> rn/View {:style {:width (screen-width) :flex 1}}
     (resources-view/creature-resource-list conn {:resources resource-details
                                                  :header "Resources"})]))
