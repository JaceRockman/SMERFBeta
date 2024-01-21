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

(defn setting-details [db sub-nav]
  (let [kalashar (settings/setting-details db "Kalashar")]
    [:> rn/ScrollView {:style {:flex :1}}
     (case (first sub-nav)
       :territories (markdown/default-markdown (:setting/home kalashar))
       :commonlands (markdown/default-markdown (:setting/commonlands kalashar))
       :outwilds (markdown/default-markdown (:setting/outwilds kalashar))
       :humans (markdown/default-markdown (:setting/humans kalashar))
       :elves (markdown/default-markdown (:setting/elves kalashar))
       :dwarves (markdown/default-markdown (:setting/dwarves kalashar))
       :goblins (markdown/default-markdown (:setting/goblins kalashar))
       (markdown/default-markdown (:setting/home kalashar)))]))

(defn setting [db ^js props]
  (let [sub-nav (app-state/sub-nav-state db)]
    (organization/view-frame db (setting-details db sub-nav))))
