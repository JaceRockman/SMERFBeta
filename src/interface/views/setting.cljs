(ns interface.views.setting
  (:require ["react-native" :as rn]
            [reagent.core :as r]
            ;; [nextjournal.markdown :refer [parse ->hiccup]]
            [nextjournal.markdown.parser :as md.parser] ;; I'd like to find some way to parse the markdown into a structured document for transformation and storage and stuff. It's not working though, not sure why.
            [nextjournal.markdown.transform :as md.transform]
            [data.app-state :as app-state]
            [data.realms :as realms]
            [data.setting :as settings]
            [interface.components.navigation :as navigation]
            [interface.components.organization :as organization]
            [interface.widgets.buttons :refer [button]]
            [interface.widgets.text :as text]
            [interface.styles.markdown :as markdown]))

(defn realm-setting-select
  [settings]
  (let [flex-vals [1 1]]
    (navigation/search-filter-sort-list
     {:list-header "Realm Settings"
      :items settings
      :column-headers ["Title" "Complexity"]
      :column-flex-vals flex-vals
      :item-format-fn (fn [setting-data]
                        [:> rn/Pressable {:style {:flex-direction :row}
                                          :on-press (fn [] (realms/set-realm-setting (:id setting-data)))}
                         (text/default-text {:style {:flex (nth flex-vals 0)} :text (:title setting-data)})
                         (text/default-text {:style {:flex (nth flex-vals 1)} :text "Simple"})])})))

(defn setting-category-select
  [db setting]
  (let [flex-vals [2 1]]
    (navigation/search-filter-sort-list
     {:list-header "Categories"
      :items (settings/recursive-setting-entity-details db (:active/realm-setting setting))
      :column-headers ["Title" "Author"]
      :column-flex-vals flex-vals
      :item-format-fn (fn [setting-entity]
                        [:> rn/Pressable {:style {:flex-direction :row} :on-press (fn [] (realms/set-realm-sub-setting (:id setting-entity)))}
                         (text/default-text {:style {:flex (nth flex-vals 0)} :text (:entity-title setting-entity)})
                         (text/default-text {:style {:flex (nth flex-vals 0)} :text "System"})])})))

(defn setting-details [db setting-id]
  (println setting-id)
  [:> rn/ScrollView {:style {:flex :1}}
   (markdown/default-markdown (:setting/entity-details (settings/setting-details-by-id db setting-id)))])

(defn setting-home [db]
  (if-let [setting-id (settings/get-active-setting db)]
    (let [setting-data (settings/setting-details-by-id db setting-id)]
      (if-let [subsetting (settings/get-active-subsetting db)]
        (setting-details db subsetting)
        (setting-category-select db setting-data)))
    (let [realm-settings (realms/get-active-realm-settings db)]
      (if (< 1 (count realm-settings))
        (realm-setting-select realm-settings)
        (realms/set-realm-setting (:id (first realm-settings)))))))

(defn setting [db ^js props]
  (let [sub-nav (app-state/sub-nav-state db)]
    (organization/view-frame db (setting-home db))))
