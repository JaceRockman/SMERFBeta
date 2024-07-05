(ns entities.creatures.views.stats
  (:require [reagent.core :as r]
            ["react-native" :as rn]
            ["@expo/vector-icons" :refer [FontAwesome5]]
            [entities.creatures.data.interface :as creature-data]
            [entities.campaigns.data.interface :as campaigns-data]
            [organisms.config :refer [palette screen-width]]
            [organisms.library :as components]
            [organisms.environments.modals :as modals]))

(defn section-divider []
  [:> rn/View {:style {:background-color (:surface-700 @palette) :width "80%" :height 2 :align-self :center}}])

(defn stats-section-style []
  {:padding 10 :width (screen-width) :gap 10})

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
        moderate-wounds (creature-data/get-creature-domain-damage conn domain-id "moderate")
        major-wounds (creature-data/get-creature-domain-damage conn domain-id "major")
        update-damage-fn #(reset! modals/modal-content {:display? true
                                                        :fn domain-damage-modal
                                                        :args [conn domain-id]})]
    [:> rn/View {:style {:flex-direction :row :align-items :center}}
     (components/button {:style {:background-color :none}
                         :on-press update-damage-fn}
                        (str (+ minor-wounds (* 2 moderate-wounds) (* 3 major-wounds))))
     [:> rn/Pressable {:style {:top -6}
                       :on-press update-damage-fn}
      [:> FontAwesome5 {:name :edit :color (:surface-700 @palette) :size 12}]]]))

(def selected-ability
  (r/atom nil))

(def selected-skill
  (r/atom nil))

(defn domain-stat
  [conn domain-details]
  (let [flex-vals [3 1 1 1]
        derive-item (fn [domain-title]
                      (let [{:keys [:db/id
                                    :domain/initiation-value
                                    :domain/reaction-value
                                    :domain/continuation-value
                                    :domain/dominance-value
                                    :domain/competence-value
                                    :domain/resilience-value
                                    :domain/minor-wounds]}
                            (first (filter #(= domain-title (:title %)) domain-details))]
                        {:title domain-title
                         :quality (/ (+ initiation-value reaction-value continuation-value) 3)
                         :power (/ (+ dominance-value competence-value resilience-value) 3)
                         :id id}))
        physical-item (derive-item "Physical")
        spiritual-item (derive-item "Spiritual")
        mental-item (derive-item "Mental")
        social-item (derive-item "Social")]
    [:> rn/ScrollView {:style (stats-section-style)}
     (components/default-text "Stats" {:font-size 32})
     (components/flat-list {:items [physical-item spiritual-item mental-item social-item]
                            :headers ["Title" "Quality" "Power" "Damage"]
                            :flex-vals flex-vals
                            :row-constructor (fn [item]
                                               [:> rn/Pressable {:style {:flex-direction :row}
                                                                 :on-press (fn [])}
                                                (components/default-text (:title item)
                                                                         {:flex (nth flex-vals 0)})
                                                (components/default-text (:quality item)
                                                                         {:flex (nth flex-vals 1)})
                                                (components/default-text (str "d" (:power item))
                                                                         {:flex (nth flex-vals 2)})
                                                [:> rn/View {:style {:flex (nth flex-vals 3)}}
                                                 (domain-damage conn (:id item))]])})]))

(defn skillbility-stat
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
     [:> rn/Text {:style {:color :white}} "Damage: " (domain-damage conn id)]]))

(defn skill-and-ability-stat
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
  (let [flex-vals         [3 2]
        initiation-item   {:title initiation-title :value initiation-value :type :skill}
        reaction-item     {:title reaction-title :value reaction-value :type :skill}
        continuation-item {:title continuation-title :value continuation-value :type :skill}
        skill-section     {:title "Skills"
                           :data  [initiation-item reaction-item continuation-item]}
        dominance-item    {:title dominance-title :value dominance-value :type :ability}
        competence-item   {:title competence-title :value competence-value :type :ability}
        resilience-item   {:item resilience-title :value resilience-value :type :ability}
        ability-section   {:title "Abilities"
                           :data  [dominance-item competence-item resilience-item]}]
    [:> rn/View {:style {:padding "0px 10px 0px 10px"}}
     (components/default-text title {:font-size 28})
     (components/section-list {:items           [skill-section ability-section]
                               :headers         ["Title" "Value"]
                               :flex-vals       flex-vals
                               :row-constructor (fn [item]
                                                  [:> rn/Pressable {:style    {:flex-direction :row}
                                                                    :on-press (fn []
                                                                                (println (:type item)))}
                                                   (components/default-text (:title item)
                                                                            {:flex (nth flex-vals 0)})
                                                   (components/default-text (str (when (= "ability" (:type item)) "d") (:value item))
                                                                            {:flex (nth flex-vals 1)})])})
     [:> rn/Text {:style {:color :white}} "Damage: " (domain-damage conn id)]]))

(defn stats-domain
  [conn domain-data]
  (let [ruleset (campaigns-data/get-campaign-active-ruleset conn)]
    (case (:ruleset/stat-granularity ruleset)
      "domain" (domain-stat conn domain-data)
      "skillbility" (skillbility-stat conn domain-data)
      "stats" (skill-and-ability-stat conn domain-data))))



#_(defn stats-picker
  [conn creature-details action-id]
  (let [domain-details (creature-data/get-creature-domains conn creature-details)]
    [:> rn/ScrollView {:style (stats-section-style)}
     (components/default-text "Stats" {:font-size 32})
     (interpose (section-divider)
                (map stats-picker-domain (repeat conn) domain-details (repeat action-id)))]))

(defn stats [conn domains]
  (let [ruleset (campaigns-data/get-campaign-active-ruleset conn)]
    (let [domain-stats (domain-stat conn domains)
          skillbility-stats [:> rn/ScrollView {:style (stats-section-style)}
                     (components/default-text "Stats" {:font-size 32})
                             (map skillbility-stat (repeat conn) domains)]
          skill-and-ability-stats [:> rn/ScrollView {:style (stats-section-style)}
                     (components/default-text "Stats" {:font-size 32})
                     (map skill-and-ability-stat (repeat conn) domains)]]
      (case (:ruleset/stat-granularity ruleset)
      "domain"      domain-stats
      "skillbility" skillbility-stats
      "stats"       skill-and-ability-stats
      skillbility-stats))))
