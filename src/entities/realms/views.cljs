(ns entities.realms.views
  (:require ["react-native" :as rn]
            [reagent.core :as r]
            [nextjournal.markdown.parser :as md.parser]
            [nextjournal.markdown.transform :as md.transform]
            [systems.navigation :as navigation]
            [entities.campaigns.data.interface :as campaign-data]
            [entities.realms.data.interface :as realm-data]
            [organisms.library :as components]))

(defn realm-select
  [conn realms]
  (let [flex-vals [1 1]]
    (components/search-filter-sort-list
     {:list-header "Realms"
      :items realms
      :column-headers ["Title" "Owner"]
      :column-flex-vals flex-vals
      :item-format-fn (fn [realm-data]
                        [:> rn/Pressable {:style {:flex-direction :row}
                                          :on-press (fn [] (realm-data/set-active-realm
                                                           conn
                                                           (:id realm-data)))}
                         (components/default-text {:style {:flex (nth flex-vals 0)} :text (:title realm-data)})
                         (components/default-text {:style {:flex (nth flex-vals 1)} :text "Avis Industries"})])})))

(defn subrealm-sort
  [realm-entities]
  (let [entity-type-groups (group-by :realm/entity-type realm-entities)]
    (mapv (fn [[entity-type entity-data-list]]
            {:title entity-type :data entity-data-list})
          entity-type-groups)))

(defn subrealm-select
  [conn realm-data]
  (let [flex-vals [2 1]]
    (components/search-filter-sort-list
     {:list-header      "Categories"
      :items            (remove #(nil? (:realm/entity-title %)) (realm-data/get-realm conn (:db/id realm-data)))
      :column-headers   ["Title" "Author"]
      :column-flex-vals flex-vals
      :item-format-fn   (fn [realm-entity]
                          [:> rn/Pressable {:style    {:flex-direction :row}
                                            :on-press (fn [] (realm-data/set-active-subrealm
                                                              conn
                                                              (:id realm-entity)))}
                           (components/default-text {:style {:flex (nth flex-vals 0)}
                                                     :text  (:entity-title realm-entity)})
                           (components/default-text {:style {:flex (nth flex-vals 0)}
                                                     :text  "System"})])
      :sort-fns         [subrealm-sort]})))

(defn realm-entity-header
  [conn realm-entity-title]
  [:> rn/View {:style {:flex-direction :row :color :white}}
   [:> rn/Pressable {
                     :on-press #(navigation/nav-back conn)}
    [:> rn/Text {:style {:color :white}} "<"]]
   [:> rn/Text realm-entity-title]
   [:> rn/Text "..."]])

(defn realm-details [conn subrealm-data]
  [:> rn/ScrollView {:style {:flex :1}}
   (realm-entity-header conn (:realm/entity-title subrealm-data))
   (components/default-realm-markdown conn (:realm/entity-details subrealm-data))])

(defn realm-home [conn]
  (let [active-campaign-data (campaign-data/get-active-campaign conn)
        active-realm-data (realm-data/get-active-realm conn)
        active-subrealm-data (realm-data/get-active-subrealm conn)]
    (cond
      active-subrealm-data (realm-details conn active-subrealm-data)
      active-realm-data (subrealm-select conn active-realm-data)
      active-campaign-data (realm-select conn (campaign-data/get-active-campaign-realms conn))
      :else (realm-select conn (realm-data/get-all-realms conn)))))

(defn realm [conn ^js props]
  (components/view-frame conn (realm-home conn)))
