(ns interface.views.setting
  (:require ["react-native" :as rn]
            [reagent.core :as r]
            [nextjournal.markdown.parser :as md.parser]
            [nextjournal.markdown.transform :as md.transform]
            [data.app-state :as app-state]
            [data.realms :as realms]
            [data.setting :as settings]
            [interface.components.navigation :as navigation]
            [interface.components.organization :as organization]
            [interface.widgets.buttons :as buttons]
            [interface.widgets.text :as text]
            [interface.styles.markdown :as markdown]))

(defn setting-select
  [settings]
  (let [flex-vals [1 1]]
    (navigation/search-filter-sort-list
     {:list-header "Realm Settings"
      :items settings
      :column-headers ["Title" "Complexity"]
      :column-flex-vals flex-vals
      :item-format-fn (fn [setting-data]
                        [:> rn/Pressable {:style {:flex-direction :row}
                                          :on-press (fn [] (settings/set-active-setting-by-name
                                                           (:title setting-data)))}
                         (text/default-text {:style {:flex (nth flex-vals 0)} :text (:title setting-data)})
                         (text/default-text {:style {:flex (nth flex-vals 1)} :text "Simple"})])})))

(defn subsetting-sort
  [setting-entities]
  (let [entity-type-groups (group-by :setting/entity-type setting-entities)]
    (mapv (fn [[entity-type entity-data-list]]
            {:title entity-type :data entity-data-list})
          entity-type-groups)))

(defn subsetting-select
  [db setting-data]
  (let [flex-vals [2 1]]
    (navigation/search-filter-sort-list
     {:list-header "Categories"
      :items (remove #(nil? (:setting/entity-title %)) (settings/recursive-setting-entity-details db (:db/id setting-data)))
      :column-headers ["Title" "Author"]
      :column-flex-vals flex-vals
      :item-format-fn (fn [setting-entity]
                        [:> rn/Pressable {:style {:flex-direction :row}
                                          :on-press (fn [] (settings/set-active-subsetting-by-name
                                                           (:entity-title setting-entity)))}
                         (text/default-text {:style {:flex (nth flex-vals 0)}
                                             :text (:entity-title setting-entity)})
                         (text/default-text {:style {:flex (nth flex-vals 0)}
                                             :text "System"})])
      :sort-fns [subsetting-sort]})))

(defn setting-details [db subsetting-data]
  [:> rn/ScrollView {:style {:flex :1}}
   (markdown/default-setting-markdown (:setting/entity-details subsetting-data))])

(defn setting-home [db]
  (let [active-realm-data (realms/get-active-realm-data db)
        active-setting-data (settings/get-active-setting-data db)
        active-subsetting-data (settings/get-active-subsetting-data db)]
    (cond
      active-subsetting-data (setting-details db active-subsetting-data)
      active-setting-data (subsetting-select db active-setting-data)
      active-realm-data (setting-select (realms/get-active-realm-settings db))
      :else (setting-select (settings/get-all-setting-data db)))))

(defn setting [db ^js props]
  (let [sub-nav (app-state/sub-nav-state db)]
    (organization/view-frame db (setting-home db))))
