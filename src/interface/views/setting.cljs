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
            [interface.styles.markdown :as markdown]))

(defn setting-category-select
  [db]
  (let [flex-vals [2 1]]
    (navigation/search-filter-sort-list
     {:list-header "Categories"
      :items []
      :column-headers ["Title" "Author"]
      :column-flex-vals flex-vals
      :item-format-fn #()})))

(defn setting-details [db sub-nav]
  (let [{:keys [setting/territories]} (settings/setting-details db "Kalashar")
        kalashar {}]
    (println territories)
    [:> rn/ScrollView {:style {:flex :1}}
     (case sub-nav
       :commonlands (markdown/default-markdown (:setting/commonlands kalashar))
       :outwilds (markdown/default-markdown (:setting/outwilds kalashar))
       :humans (markdown/default-markdown (:setting/humans kalashar))
       :elves (markdown/default-markdown (:setting/elves kalashar))
       :dwarves (markdown/default-markdown (:setting/dwarves kalashar))
       :goblins (markdown/default-markdown (:setting/goblins kalashar))
       (markdown/default-markdown (:setting/home kalashar)))]))

(defn setting-home [db]
  (if-let [sub-nav (first (app-state/sub-nav-state db))]
    (setting-details db sub-nav)
    (setting-category-select db)))

(defn setting [db ^js props]
  (let [sub-nav (app-state/sub-nav-state db)]
    (organization/view-frame db (setting-details db sub-nav))))
