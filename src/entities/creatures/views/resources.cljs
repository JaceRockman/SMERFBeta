(ns entities.creatures.views.resources
  (:require ["react-native" :as rn]
            [organisms.config :refer [palette screen-width screen-height]]
            [entities.resources.data.interface :as resources-data]
            [entities.resources.views :as resources-view]))

(defn resources [conn {:keys [:creature/resources]}]
  (let [resource-details (resources-data/get-resources conn resources)]
    [:> rn/View {:style {:width (screen-width) :flex 1}}
     (resources-view/resource-list conn {:resources resource-details
                                         :quantities (reduce (fn [qtys res]
                                                               (assoc qtys (:db/id res) (rand-int 3)))
                                                             {}
                                                             resource-details)
                                         :header "Resources"})]))
