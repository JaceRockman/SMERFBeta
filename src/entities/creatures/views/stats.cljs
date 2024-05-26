(ns entities.creatures.views.stats
  (:require ["react-native" :as rn]
            ["@expo/vector-icons" :refer [FontAwesome5]]
            [organisms.config :refer [palette screen-width]]
            [organisms.library :as components]
            [organisms.environments.modals :as modals]
            [entities.creatures.data.interface :as creature-data]))

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
   :background-color (:surface-400 @palette)
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
   (components/default-text (str severity-title " Wounds"))
   [:> rn/View {:style {:flex-direction :row :align-items :center}}
    [:> rn/Image {:style {:flex 1}}]
    (components/button {:style {:padding 2 :background-color :inherit}
                        :text-style {:color (:surface-700 @palette)}
                        :on-press #(creature-data/update-wound-value conn domain-id severity-title dec)} "-")
    (components/default-text damage-quantity {:flex 0})
    (components/button {:style {:padding 2 :background-color :inherit}
                        :text-style {:color (:surface-700 @palette)}
                        :on-press #(creature-data/update-wound-value conn domain-id severity-title inc)} "+")
    [:> rn/Image {:style {:flex 1}}]]])

(defn domain-damage-modal
  [conn domain-id]
  [:> rn/View {:style {:flex-direction :row}}
   (damage-severity-tracker
    conn
    domain-id
    {:severity-title "Minor" :damage-quantity (creature-data/get-creature-domain-damage conn domain-id "minor")})
   (damage-severity-tracker
    conn
    domain-id
    {:severity-title "Major" :damage-quantity (creature-data/get-creature-domain-damage conn domain-id "major")})])

(defn domain-damage [conn domain-id]
  (let [minor-wounds (creature-data/get-creature-domain-damage conn domain-id "minor")
        major-wounds (creature-data/get-creature-domain-damage conn domain-id "major")
        update-damage-fn #(reset! modals/modal-content {:fn domain-damage-modal :args [conn domain-id]})]
    [:> rn/View {:style {:flex-direction :row :align-items :center}}
     (components/button {:style {:background-color :none}
                         :on-press update-damage-fn}
                        (str "Damage: " (+ minor-wounds (* 2 major-wounds))))
     [:> rn/Pressable {:style {:top -6}
                       :on-press update-damage-fn}
      [:> FontAwesome5 {:name :edit :color (:surface-700 @palette) :size 12}]]]))


(defn stats-domain
  [conn
   {:keys
    [:db/id
     :title
     :domain/initiation-title :domain/initiation-value
     :domain/reaction-title :domain/reaction-value
     :domain/continuation-title :domain/continuation-value
     :domain/dominance-title :domain/dominance-value
     :domain/competence-title :domain/competence-value
     :domain/resilience-title :domain/resilience-value
     :domain/minor-wounds :domain/moderate-wounds :domain/major-wounds]}]
  #_[:> rn/View
     (components/default-text {:style {:font-size 24} :text name})
     [:> rn/View {:style {:flex-direction :row :gap 5 :padding 5 :justify-content :space-evenly}}
      [skillbility "Initiation" initiation-value dominance-value]
      [skillbility "Reaction" reaction-value competence-value]
      [skillbility "Continuation" continuation-value resilience-value]]
     (domain-damage conn id)]
  (let [flex-vals [3 1 1]
        initiation-item {:title initiation-title :quality initiation-value :power dominance-value}
        reaction-item {:title reaction-title :quality reaction-value :power competence-value}
        continuation-item {:title continuation-title :quality continuation-value :power resilience-value}]
    [:> rn/View {:style {:padding "0px 10px 0px 10px"}}
     (components/default-text title {:font-size 24})
     (components/flat-list {:items [initiation-item reaction-item continuation-item]
                            :headers ["Title" "Quality" "Power"]
                            :flex-vals flex-vals
                            :row-constructor (fn [item]
                                               [:> rn/Pressable {:style {:flex-direction :row}
                                                                 :on-press (fn [])}
                                                (components/default-text (:title item)
                                                                         {:flex (nth flex-vals 0)})
                                                (components/default-text (:quality item)
                                                                         {:flex (nth flex-vals 1)})
                                                (components/default-text (str "d" (:power item))
                                                                         {:flex (nth flex-vals 1)})])})
     (domain-damage conn id)]))

(defn section-divider []
  [:> rn/View {:style {:background-color (:surface-700 @palette) :width "80%" :height 2 :align-self :center}}])

(defn stats-section-style []
  {:padding 10 :width (screen-width) :gap 10})

(defn stats [conn creature-details]
  (let [domain-details (creature-data/get-creature-domains conn creature-details)]
    [:> rn/ScrollView {:style (stats-section-style)}
     (components/default-text "Stats" {:font-size 32})
     (interpose (section-divider)
                (map stats-domain (repeat conn) domain-details))]))
