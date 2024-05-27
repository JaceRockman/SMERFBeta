(ns entities.creatures.views.actions
  (:require ["react-native" :as rn]
            [organisms.config :refer [screen-width screen-height]]
            [entities.actions.data.interface :as action-data]
            [entities.actions.views :as actions-view]))

(defn actions [conn {:keys [:db/id :creature/actions]} domains resources]
  (println domains)
  (let [action-details (action-data/get-all-actions conn)]
    [:> rn/View {:style {:width (screen-width) :flex 1}}
     (actions-view/action-list conn
                               {:creature-id id
                                :actions action-details
                                :domains domains
                                :resources resources
                                :header "Actions"})]))
