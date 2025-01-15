(ns entities.realms.views
  (:require [clojure.string :as str]
            ["react-native" :as rn]
            [reagent.core :as r]
            ["@expo/vector-icons" :refer [FontAwesome5]]
            [nextjournal.markdown.parser :as md.parser]
            [nextjournal.markdown.transform :as md.transform]
            [systems.navigation :as navigation]
            [entities.campaigns.data.interface :as campaign-data]
            [entities.realms.data.interface :as realm-data]
            [organisms.library :as components]))



(defn realm-select
  [conn realms]
  (println "realm-select")
  (let [flex-vals [1 1]]
    (components/search-filter-sort-list
     {:list-header "Realms"
      :column-flex-vals flex-vals
      :column-headers ["Title" "Owner"]
      :items realms
      :item-format-fn (fn [realm-data]
                        [:> rn/Pressable {:style {:flex-direction :row}
                                          :on-press (fn [] (realm-data/set-active-realm
                                                            conn
                                                            (:id realm-data)))}
                         (components/default-text (:title realm-data) {:flex (nth flex-vals 0)})
                         (components/default-text "Avis Industries" {:flex (nth flex-vals 1)})])}
     "realms")))

(defn subrealm-sort
  [realm-entities]
  (let [entity-type-groups (group-by :entity-type realm-entities)]
    (mapv (fn [[entity-type entity-data-list]]
            {:title (str/capitalize entity-type) :data entity-data-list})
          entity-type-groups)))

(defn set-active-subrealm
  [conn realm-data]
  (fn []
    (if (= "realm" (:entity-type realm-data))
      (realm-data/set-active-realm
       conn
       (:id realm-data))
      (realm-data/set-active-subrealm
       conn
       (:id realm-data)))))

(defn subrealm-entity-row
  [conn flex-vals realm-entity]
  [:> rn/Pressable {:style    {:flex-direction :row}
                    :on-press (set-active-subrealm conn realm-entity)}
   (components/default-text (:title realm-entity)
                            {:flex (nth flex-vals 0)})
   (components/default-text "System"
                            {:flex (nth flex-vals 0)})])

(defn subrealm-select
  ([conn subrealm-data]
   (subrealm-select conn subrealm-data {}))
  ([conn subrealm-data {:keys [realm-data list-overrides]}]
   (let [flex-vals [2 1]]
     [:> rn/View
      (when realm-data (components/default-text (:realm/entity-details realm-data)))
      (components/search-filter-sort-list
       (merge
        {:list-header "Realms"
         :column-flex-vals flex-vals
         :column-headers ["Title" "Author"]
         :items (subrealm-sort subrealm-data)
         :item-format-fn #(subrealm-entity-row conn flex-vals %)}
        list-overrides)
       (str (:title subrealm-data) (:list-header list-overrides)))])))



(defn realm-details
  [conn subrealm-data]
  [:> rn/ScrollView {:style {:height "100%"}}
   (components/default-realm-markdown conn (:realm/entity-details subrealm-data))
   (let [parents (realm-data/get-realm-entity-parents conn (:db/id subrealm-data))
         children (realm-data/get-realm-entity-children conn (:db/id subrealm-data))]
     [:> rn/View
      [:> rn/View
       (when-not (empty? parents)
        (subrealm-select conn parents {:list-overrides {:list-header "Parents"
                                                        :collapsed? true}}))]
      [:> rn/View
       (when-not (empty? children)
        (subrealm-select conn children {:list-overrides {:list-header "Children"
                                                         :collapsed? true}}))]])])

(defn realm-home [conn]
  (let [active-campaign-data (campaign-data/get-active-campaign conn)
        active-realm-data (realm-data/get-active-realm conn)
        active-subrealm-data (realm-data/get-active-subrealm conn)]
    (cond
      active-subrealm-data (realm-details conn active-subrealm-data)
      active-realm-data (let [subrealms (realm-data/get-realm-entity-children conn (:db/id active-realm-data))]
                          (subrealm-select conn subrealms {:realm-data active-realm-data}))
      active-campaign-data (realm-select conn (campaign-data/get-active-campaign-realms conn))
      :else (realm-select conn (realm-data/get-all-realms conn)))))

(defn realm [conn ^js props]
  (components/view-frame conn (realm-home conn) "realms-page"))
