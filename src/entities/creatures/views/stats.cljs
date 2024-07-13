(ns entities.creatures.views.stats
  (:require [clojure.math :as math]
            [reagent.core :as r]
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
  [:> rn/View {:style {:flex 1 }}
   (components/default-text (str severity-title " Wounds") {:text-align :center})
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
  (let [stat-granularity (:ruleset/stat-granularity (campaigns-data/get-campaign-active-ruleset conn))]
    [:> rn/View {:style {:margin-top 20 :margin-bottom 20 :gap 20}}
     (damage-severity-tracker
      conn
      domain-id
      {:severity-title "Minor" :damage-quantity (creature-data/get-creature-domain-damage conn domain-id "minor")})
     (when (or (= stat-granularity "skillbility") (= stat-granularity "stats"))
       (damage-severity-tracker
        conn
        domain-id
        {:severity-title "Moderate" :damage-quantity (creature-data/get-creature-domain-damage conn domain-id "moderate")}))
     (when (= stat-granularity "stats")
       (damage-severity-tracker
        conn
        domain-id
        {:severity-title "Major" :damage-quantity (creature-data/get-creature-domain-damage conn domain-id "major")}))]))

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
  [conn domain-details {:keys [damage-hidden? row-style-override row-press-override]}]
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
                         :domain-id id
                         :quality-key :domain/initiation-value
                         :quality (math/round (/ (+ initiation-value reaction-value continuation-value) 3))
                         :power-key :domain/dominance-value
                         :power (* 2 (math/round (/ (+ (quot dominance-value 2) (quot competence-value 2) (quot resilience-value 2)) 3)))}))
        physical-item (derive-item "Physical")
        spiritual-item (derive-item "Spiritual")
        mental-item (derive-item "Mental")
        social-item (derive-item "Social")]
    [:> rn/ScrollView {:style (stats-section-style)}
     (components/default-text "Stats" {:font-size 32})
     (components/flat-list {:items [physical-item spiritual-item mental-item social-item]
                            :headers (remove nil? ["Title" "Quality" "Power" (when-not damage-hidden? "Damage")])
                            :flex-vals flex-vals
                            :row-constructor (fn [item]
                                               (let [row-style (when row-style-override (row-style-override item))
                                                     row-press (when row-press-override (row-press-override item))]
                                                 [:> rn/Pressable {:style (or row-style {:flex-direction :row})
                                                                   :on-press (or row-press (fn []))}
                                                  (components/default-text (:title item)
                                                                           {:flex (nth flex-vals 0)})
                                                  (components/default-text (:quality item)
                                                                           {:flex (nth flex-vals 1)})
                                                  (components/default-text (str "d" (:power item))
                                                                           {:flex (nth flex-vals 2)})
                                                  (when-not damage-hidden?
                                                    [:> rn/View {:style {:flex (nth flex-vals 3)}}
                                                     (domain-damage conn (:domain-id item))])]))})]))

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
     :domain/minor-wounds :domain/moderate-wounds :domain/major-wounds]}
   {:keys [damage-hidden? row-style-override row-press-override]}]
  (let [flex-vals [3 1 1]
        initiation-item {:title initiation-title
                         :domain-id id
                         :quality-key :domain/initiation-value
                         :quality initiation-value
                         :power-key :domain/dominance-value
                         :power dominance-value}
        reaction-item {:title reaction-title
                       :domain-id id
                       :quality-key :domain/reaction-value
                       :quality reaction-value
                       :power-key :domain/competence-value
                       :power competence-value}
        continuation-item {:title continuation-title
                           :domain-id id
                           :quality-key :domain/continuation-value
                           :quality continuation-value
                           :power-key :domain/resilience-value
                           :power resilience-value}]
    [:> rn/View {:style {:padding "0px 10px 0px 10px"}}
     (components/default-text title {:font-size 24})
     (components/flat-list {:items [initiation-item reaction-item continuation-item]
                            :headers ["Title" "Quality" "Power"]
                            :flex-vals flex-vals
                            :row-constructor (fn [item]
                                               (let [row-style (when row-style-override (row-style-override item))
                                                     row-press (when row-press-override (row-press-override item))]
                                                 [:> rn/Pressable {:style (or row-style {:flex-direction :row})
                                                                   :on-press (or row-press (fn []))}
                                                  (components/default-text (:title item)
                                                                           {:flex (nth flex-vals 0)})
                                                  (components/default-text (:quality item)
                                                                           {:flex (nth flex-vals 1)})
                                                  (components/default-text (str "d" (:power item))
                                                                           {:flex (nth flex-vals 1)})]))})
     (when-not damage-hidden? [:> rn/Text {:style {:color :white}} "Damage: " (domain-damage conn id)])]))

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
     :domain/minor-wounds :domain/moderate-wounds :domain/major-wounds]}
   {:keys [damage-hidden? row-press-override row-style-override]}]
  (let [flex-vals         [3 2]
        initiation-item   {:title initiation-title :domain-id id :quality-key :domain/initiation-value :value initiation-value :type :skill}
        reaction-item     {:title reaction-title :domain-id id :quality-key :domain/reaction-value :value reaction-value :type :skill}
        continuation-item {:title continuation-title :domain-id id :quality-key :domain/continuation-value :value continuation-value :type :skill}
        skill-section     {:title "Skills"
                           :data  [initiation-item reaction-item continuation-item]}
        dominance-item    {:title dominance-title :domain-id id :power-key :domain/dominance-value :value dominance-value :type :ability}
        competence-item   {:title competence-title :domain-id id :power-key :domain/competence-value :value competence-value :type :ability}
        resilience-item   {:title resilience-title :domain-id id :power-key :domain/resilience-value :value resilience-value :type :ability}
        ability-section   {:title "Abilities"
                           :data  [dominance-item competence-item resilience-item]}]
    [:> rn/View {:style {:padding "0px 10px 0px 10px"}}
     (components/default-text title {:font-size 28})
     (components/section-list {:items           [skill-section ability-section]
                               :headers         ["Title" "Value"]
                               :flex-vals       flex-vals
                               :row-constructor (fn [item]
                                                  (let [row-style (when row-style-override (row-style-override item))
                                                        row-press (when row-press-override (row-press-override item))]
                                                    [:> rn/Pressable {:style    (or row-style {:flex-direction :row})
                                                                      :on-press (or row-press
                                                                                    (fn []
                                                                                      (println (:type item))))}
                                                     (components/default-text (:title item)
                                                                              {:flex (nth flex-vals 0)})
                                                     (components/default-text (str (when (= "ability" (:type item)) "d") (:value item))
                                                                              {:flex (nth flex-vals 1)})]))})
     (when-not damage-hidden? [:> rn/Text {:style {:color :white}} "Damage: " (domain-damage conn id)])]))

#_(defn stats-picker
  [conn creature-details action-id]
  (let [domain-details (creature-data/get-creature-domains conn creature-details)]
    [:> rn/ScrollView {:style (stats-section-style)}
     (components/default-text "Stats" {:font-size 32})
     (interpose (section-divider)
                (map stats-picker-domain (repeat conn) domain-details (repeat action-id)))]))

(defn stats
  [conn domains {:keys [damage-hidden? row-press-override row-style-override] :as options}]
  (let [ruleset (campaigns-data/get-campaign-active-ruleset conn)]
    (case (or (:ruleset/stat-granularity ruleset) "skillbility")
      "domain"      (domain-stat conn domains options)
      "skillbility" [:> rn/ScrollView {:style (stats-section-style)}
                     (components/default-text "Stats" {:font-size 32})
                     (map skillbility-stat (repeat conn) domains (repeat options))]
      "stats"       [:> rn/ScrollView {:style (stats-section-style)}
                     (components/default-text "Stats" {:font-size 32})
                     (map skill-and-ability-stat (repeat conn) domains (repeat options))])))
