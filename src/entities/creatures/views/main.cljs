(ns entities.creatures.views.main
  (:require
   ["@expo/vector-icons" :refer [FontAwesome5]]
   ["react-native" :as rn]
   [entities.campaigns.data.interface :as campaign-data]
   [entities.creatures.data.interface :as creature-data]
   [entities.creatures.views.actions :as creature-actions-view]
   [entities.creatures.views.notes :as creature-notes-view]
   [entities.creatures.views.resources :as creature-resources-view]
   [entities.creatures.views.stats :as creature-stats-view]
   [organisms.config :as config]
   [organisms.environments.modals :as modals]
   [organisms.library :as components]
   [systems.navigation :as navigation]))

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
                                                       (:id creature-data))
                                                      (navigation/navigate! conn {:page :creatures :query-params [(:id creature-data)]}))}
                         (components/default-text (:title creature-data)
                                                  {:flex (nth flex-vals 0)})
                         (components/default-text "Avis Industries"
                                                  {:flex (nth flex-vals 1)})])
      :add-item-fn organisms.environments.modals/example-new-item-modal}
     "creatures")))

(defn ruleset-select-modal
  [conn]
  (if-let [active-campaign-rulesets (campaign-data/get-active-campaign-rulesets conn)]
    [:> rn/View {:style {:height "100%"}}
     (doall (map (fn [ruleset]
                   [:> rn/Pressable {:key (str "ruleset-" (:db/id ruleset))
                                     :on-press (fn []
                                                 (campaign-data/set-campaign-active-ruleset conn (:db/id ruleset))
                                                 (reset! components/modal-content nil))}
                    (components/default-text (:title ruleset))]) active-campaign-rulesets))]
    [:> rn/View {:style {:height "100%"}}
     (components/default-text "No rulesets found in active campaign")]))

(defn creature-info [conn creature-details]
  (let [portrait (:creature/portrait creature-details)
        gender (:creature/gender creature-details)
        races (str "Races: " (apply str (interpose " " (creature-data/get-creature-races conn creature-details))))
        description (:creature/description creature-details)]
    [:> rn/View {:style {:width (config/screen-width) :flex-direction :row :align-items :center :height "15%"}}
     [:> rn/Image {:style {:width "25%" :max-height "100%" :aspect-ratio 1}
                   :source (if portrait
                             {:uri portrait}
                             (js/require "../assets/images/character silhouette.png"))}]
     [:> rn/View {:style {:flex 1}}
      (components/default-text gender)
      (components/default-text races)
      (components/default-text description)]
     [:> rn/View {:style {:position :absolute :top 10 :right 10}}
      [:> rn/Pressable {:on-press #(reset! components/modal-content
                                          {:display? true :fn ruleset-select-modal :args [conn]})}
       [:> FontAwesome5 {:name :book :color (:surface-700 @config/palette) :size 20}]]]]))

(defn creature [conn creature-data]
  [:> rn/View {:style {:height "100%"}}
   (creature-info conn creature-data)
   (components/indicated-scroll-view
    components/creature-horizontal-position
    ["Stats" "Resources" "Actions" "Notes"]
    [(creature-stats-view/stats conn (creature-data/get-creature-domains conn creature-data) {})
     (creature-resources-view/resources conn creature-data)
     (creature-actions-view/actions conn creature-data
                                    (creature-data/get-creature-domains conn creature-data)
                                    (creature-data/get-creature-resource-resources conn creature-data))
     (creature-notes-view/notes conn creature-data)])])

(defn creatures-page [conn ^js props]
  (components/view-frame
   conn
   (let [active-campaign-data (campaign-data/get-active-campaign conn)
         active-creature-data (creature-data/get-active-creature conn)]
     (println "active-creature-data:" active-creature-data)
     (cond
       active-creature-data (creature conn active-creature-data)
       active-campaign-data (creature-select conn (campaign-data/get-active-campaign-creatures conn))
       :else (creature-select conn (creature-data/get-all-creatures conn))))
   "creatures-page"))
