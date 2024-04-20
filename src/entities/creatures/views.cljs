(ns entities.creatures.views
  (:require
   [clojure.string :as str]
   [datascript.core :as ds]
   ["react-native" :as rn]
   ["@expo/vector-icons" :refer [FontAwesome5]]
   [entities.campaigns.data.interface :as campaign-data]
   [entities.actions.data.interface :as action-data]
   [entities.creatures.data.interface :as creature-data]
   [entities.resources.views :as resources-view]
   [entities.actions.views :as actions-view]
   [organisms.library :as components]))

#_"The Creature page will show the portrait and main details of the creature at the top
like their name, gender, race, and description. Below that will be a section for their stats in each domain and their damage trackers. Below that will be a search bar for viewing their resources that automatically shows their favorites and has a button to show all and a plus button to add a new resource which takes you to the resources tab of the app. Each of the resources will list their name, their quality, their power, and their quantity with the ability to increase or decrease. Below that will be another search bar for viewing their actions that automatically shows their favorites and has a button to show all and a plus button to add a new action which takes you to the action tab of the app. Each of the actions will list their name, their quality, their power, and a button to start a roll with that action."

(defn screen-width [] (.-width js/screen))

(defn creature-list-nav-button
  []
  (components/button {:style {:background-color :inherit}
           :on-press #(println "navigate to creature list")}
          [:> rn/View {:style {:flex-direction :row}}
           [:> FontAwesome5 {:name :chevron-left :color :white :size 16}]
           [:> FontAwesome5 {:name :search :color :white :size 14}]]))

(defn creature-select
  [conn creatures]
  (let [flex-vals [1 1]]
    (components/search-filter-sort-list
     {:list-header "Creatures"
      :items creatures
      :column-headers ["Name" "Creator"]
      :column-flex-vals flex-vals
      :item-format-fn (fn [creature-data]
                        [:> rn/Pressable {:style {:flex-direction :row}
                                          :on-press (fn []
                                                      (creature-data/set-active-creature
                                                       conn
                                                       (:id creature-data)))}
                         (components/default-text {:style {:flex (nth flex-vals 0)} :text (:title creature-data)})
                         (components/default-text {:style {:flex (nth flex-vals 1)} :text "Avis Industries"})])})))

(def card-style
  {:background-color :gray
   :border-radius 10
   :width "95%"
   :height "100%"
   :z-index -1
   :position :absolute})

(defn skill
  [title value]
  [:> rn/View {:style {:flex-direction :horizontal}}
   [:> rn/Text title]
   [:> rn/Text value]])

(defn ability
  [title value]
  [:> rn/View {:style {:flex-direction :horizontal}}
   [:> rn/Text title]
   [:> rn/Text (str "d" value)]])

(def skillbility-style
  {:flex-direction :column
   :flex 1
   :background-color :grey
   :text-align :center
   :border-radius 10})

(defn skillbility
  [title skill-value ability-value]
  [:> rn/View {:style {:width "25%" :align-items :center}}
   (components/tertiary-button {:text (str title "\n" skill-value "d" ability-value)
                             :on-press #(println title "button pressed")})])

(defn damage-severity-tracker
  [conn domain-id {:keys [severity-title damage-quantity]}]
  [:> rn/View {:style {:flex 1}}
   (components/default-text {:style {:flex 1} :text (str severity-title " Wounds")})
   [:> rn/View {:style {:flex-direction :row :align-items :center}}
    [:> rn/Image {:style {:flex 1}}]
    (components/button {:style {:color :white :padding 2 :background-color :inherit} :on-press #(creature-data/update-wound-value conn domain-id severity-title dec)} "-")
    (components/default-text {:text damage-quantity})
    (components/button {:style {:color :white :padding 2 :background-color :inherit} :on-press #(creature-data/update-wound-value conn domain-id severity-title inc)} "+")
    [:> rn/Image {:style {:flex 1}}]]])

(defn domain-damage [conn domain-id minor-wounds major-wounds]
  [:> rn/View
   [:> rn/View {:style {:flex-direction :row}}
    (damage-severity-tracker conn domain-id {:severity-title "Minor" :damage-quantity minor-wounds})
    (damage-severity-tracker conn domain-id {:severity-title "Major" :damage-quantity major-wounds})]
   [:> rn/View {:style {:flex 1}}
    (components/default-text {:style {:flex 1} :text (str "Total Damage: " (+ minor-wounds (* 2 major-wounds)))})]])

(defn stats-domain
  [conn
   {:keys
    [:db/id
     :domain/name
     :domain/initiation-title :domain/initiation-value
     :domain/reaction-title :domain/reaction-value
     :domain/continuation-title :domain/continuation-value
     :domain/dominance-title :domain/dominance-value
     :domain/competence-title :domain/competence-value
     :domain/resilience-title :domain/resilience-value
     :domain/minor-wounds :domain/moderate-wounds :domain/major-wounds]}]
  [:> rn/View
   (components/default-text {:style {:font-size 24} :text name})
   [:> rn/View {:style {:flex-direction :row :gap 5 :padding 5 :justify-content :space-evenly}}
    [skillbility "Initiation" initiation-value dominance-value]
    [skillbility "Reaction" reaction-value competence-value]
    [skillbility "Continuation" continuation-value resilience-value]]
   (domain-damage conn id minor-wounds major-wounds)])

(defn section-divider []
  [:> rn/View {:style {:background-color :lavender :width "80%" :height 2 :align-self :center}}])

(defn stats-section-style []
  {:padding 10 :width (screen-width) :gap 10})

(defn stats [conn creature-details]
  (let [domain-details (creature-data/get-creature-domains conn creature-details)]
    [:> rn/ScrollView {:style (stats-section-style)}
     (components/default-text {:style {:font-size 32} :text "Stats"})
     (interpose (section-divider)
                (map stats-domain (repeat conn) domain-details))]))

(defn resources [conn {:keys [:creature/resources]}]
  (let [resource-details (ds/pull-many @conn ["*"] resources)]
    [:> rn/ScrollView {:style {:width (screen-width)}}
     (resources-view/resource-list conn {:resources resource-details
                                         :quantities (reduce (fn [qtys res]
                                                               (assoc qtys (:db/id res) (rand-int 3)))
                                                             {}
                                                             resource-details)
                                         :show-header? true})]))

(defn actions [conn {:keys [:db/id :creature/actions]}]
  (let [action-details (action-data/get-all-actions conn)]
    [:> rn/ScrollView {:style {:width (screen-width)}}
     (actions-view/action-list {:conn conn :creature-id id :actions action-details :show-header? true})]))

(defn info [conn creature-details]
  (let [portrait (:creature/portrait creature-details)
        gender (:creature/gender creature-details)
        races (str "Races: " (apply str (interpose " " (creature-data/get-creature-races conn creature-details))))
        description (:creature/description creature-details)]
    [:> rn/ScrollView {:style {:width (screen-width)}
                       :content-container-style {:align-items :center}}
     [:> rn/Image {:style {:width "50%" :aspect-ratio 1}
                   :source (if portrait
                             {:uri portrait}
                             (js/require "../assets/character silhouette.png"))}]
     (components/default-text {:text gender})
     (components/default-text {:text races})
     (components/default-text {:text description})]))

(defn notes [{:keys [:creature/notes]}]
  [:> rn/ScrollView {:style {:width (screen-width)}}
   (components/default-text {:text notes})])

(defn creature [conn creature-data]
  [:> rn/ScrollView {:paging-enabled true
                     :horizontal :true
                     :shows-horizontal-scroll-indicator false
                     :shows-vertical-scroll-indicator false}
   (stats conn creature-data)
   (resources conn creature-data)
   (actions conn creature-data)
   (info conn creature-data)
   (notes creature-data)])

(defn creature-details [conn creature-data]
  [:> rn/View {:style {:width "100%" :height "100%" :text-align :center}}
   (creature conn creature-data)])

(defn creatures-home
  [conn]
  (let [active-campaign-data (campaign-data/get-active-campaign conn)
        active-creature-data (creature-data/get-active-creature conn)]
    (cond
      active-creature-data (creature-details conn active-creature-data)
      active-campaign-data (creature-select conn (campaign-data/get-active-campaign-creatures conn))
      :else (creature-select conn (creature-data/get-all-creatures conn)))))

(defn creatures [conn ^js props]
  (components/view-frame conn (creatures-home conn)))
