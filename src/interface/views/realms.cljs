(ns interface.views.realms
  (:require ["react-native" :as rn]
            [reagent.core :as r]
            [nextjournal.markdown.parser :as md.parser]
            [nextjournal.markdown.transform :as md.transform]
            [data.app-state :as app-state]
            [data.campaigns :as campaigns]
            [data.realms :as realms]
            [interface.components.navigation :as navigation]
            [interface.components.organization :as organization]
            [interface.widgets.buttons :as buttons]
            [interface.widgets.text :as text]
            [interface.styles.markdown :as markdown]))

(defn realm-select
  [realms]
  (let [flex-vals [1 1]]
    (navigation/search-filter-sort-list
     {:list-header "Realms"
      :items realms
      :column-headers ["Title" "Owner"]
      :column-flex-vals flex-vals
      :item-format-fn (fn [realm-data]
                        [:> rn/Pressable {:style {:flex-direction :row}
                                          :on-press (fn [] (realms/set-active-realm-by-name
                                                           (:title realm-data)))}
                         (text/default-text {:style {:flex (nth flex-vals 0)} :text (:title realm-data)})
                         (text/default-text {:style {:flex (nth flex-vals 1)} :text "Avis Industries"})])})))

(defn subrealm-sort
  [realm-entities]
  (let [entity-type-groups (group-by :realm/entity-type realm-entities)]
    (mapv (fn [[entity-type entity-data-list]]
            {:title entity-type :data entity-data-list})
          entity-type-groups)))

(defn subrealm-select
  [db realm-data]
  (let [flex-vals [2 1]]
    (navigation/search-filter-sort-list
     {:list-header "Categories"
      :items (remove #(nil? (:realm/entity-title %)) (realms/recursive-realm-entity-details db (:db/id realm-data)))
      :column-headers ["Title" "Author"]
      :column-flex-vals flex-vals
      :item-format-fn (fn [realm-entity]
                        [:> rn/Pressable {:style {:flex-direction :row}
                                          :on-press (fn [] (realms/set-active-subrealm-by-name
                                                           (:entity-title realm-entity)))}
                         (text/default-text {:style {:flex (nth flex-vals 0)}
                                             :text (:entity-title realm-entity)})
                         (text/default-text {:style {:flex (nth flex-vals 0)}
                                             :text "System"})])
      :sort-fns [subrealm-sort]})))

(defn realm-details [db subrealm-data]
  [:> rn/ScrollView {:style {:flex :1}}
   (markdown/default-realm-markdown (:realm/entity-details subrealm-data))])

(defn realm-home [db]
  (let [active-campaign-data (campaigns/get-active-campaign-data db)
        active-realm-data (realms/get-active-realm-data db)
        active-subrealm-data (realms/get-active-subrealm-data db)]
    (cond
      active-subrealm-data (realm-details db active-subrealm-data)
      active-realm-data (subrealm-select db active-realm-data)
      active-campaign-data (realm-select (campaigns/get-active-campaign-realms db))
      :else (realm-select (realms/get-all-realms-data db)))))

(defn realm [db ^js props]
  (organization/view-frame db (realm-home db)))
