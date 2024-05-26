(ns entities.creatures.views.main
  (:require [reagent.core :as r]
            ["react-native" :as rn]
            [organisms.config :as config]
            [organisms.library :as components]
            [entities.campaigns.data.interface :as campaign-data]
            [entities.creatures.data.interface :as creature-data]
            [entities.creatures.views.stats :as creature-stats-view]
            [entities.creatures.views.resources :as creature-resources-view]
            [entities.creatures.views.actions :as creature-actions-view]
            [entities.creatures.views.notes :as creature-notes-view]))

(defn creature-select
  [conn creatures]
  (let [flex-vals [1 1]]
    (components/search-filter-sort-list
     {:items creatures
      :column-headers ["Name" "Creator"]
      :column-flex-vals flex-vals
      :item-format-fn (fn [creature-data]
                        [:> rn/Pressable {:style {:flex-direction :row}
                                          :on-press (fn []
                                                      (creature-data/set-active-creature
                                                       conn
                                                       (:id creature-data)))}
                         (components/default-text (:title creature-data)
                                                  {:flex (nth flex-vals 0)})
                         (components/default-text "Avis Industries"
                                                  {:flex (nth flex-vals 1)})])}
     "creatures")))

(defn creature-info [conn creature-details]
  (let [portrait (:creature/portrait creature-details)
        gender (:creature/gender creature-details)
        races (str "Races: " (apply str (interpose " " (creature-data/get-creature-races conn creature-details))))
        description (:creature/description creature-details)]
    [:> rn/View {:style {:width (config/screen-width) :flex-direction :row :align-items :center :height "15%"}}
     [:> rn/Image {:style {:width "25%" :max-height "100%" :aspect-ratio 1}
                   :source (if portrait
                             {:uri portrait}
                             (js/require "../assets/character silhouette.png"))}]
     [:> rn/View {:style {:flex 1}}
      (components/default-text gender)
      (components/default-text races)
      (components/default-text description)]]))

(defn creature [conn creature-data]
  [:> rn/View {:style {:height "100%"}}
   (creature-info conn creature-data)
   (components/indicated-scroll-view
    components/creature-horizontal-position
    ["Stats" "Resources" "Actions" "Notes"]
    [(creature-stats-view/stats conn creature-data)
     (creature-resources-view/resources conn creature-data)
     (creature-actions-view/actions conn creature-data)
     (creature-notes-view/notes conn creature-data)])])

(defn creatures-page [conn ^js props]
  (components/view-frame
   conn
   (let [active-campaign-data (campaign-data/get-active-campaign conn)
         active-creature-data (creature-data/get-active-creature conn)]
     (cond
       active-creature-data (creature conn active-creature-data)
       active-campaign-data (creature-select conn (campaign-data/get-active-campaign-creatures conn))
       :else (creature-select conn (creature-data/get-all-creatures conn))))))
