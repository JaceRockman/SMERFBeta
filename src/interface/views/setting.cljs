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
            [interface.styles.markdown :refer [Markdown rules]]))

(defn setting-details [db sub-nav]
  (let [kalashar (settings/setting-details db "Kalashar")]
    [:> rn/ScrollView {:style {:flex :1}}
     (case (first sub-nav)
       :territories [:> Markdown {:style {:body {:color :white}} :rules (rules :setting)}
                     (:setting/home kalashar)]
       :commonlands [:> Markdown {:style {:body {:color :white}} :rules (rules :setting)}
                     (:setting/commonlands kalashar)]
       :outwilds [:> Markdown {:style {:body {:color :white}} :rules (rules :setting)}
                     (:setting/outwilds kalashar)]
       :humans [:> Markdown {:style {:body {:color :white}} :rules (rules :setting)}
                (:setting/humans kalashar)]
       :elves [:> Markdown {:style {:body {:color :white}} :rules (rules :setting)}
                     (:setting/elves kalashar)]
       :dwarves [:> Markdown {:style {:body {:color :white}} :rules (rules :setting)}
                     (:setting/dwarves kalashar)]
       :goblins [:> Markdown {:style {:body {:color :white}} :rules (rules :setting)}
                     (:setting/goblins kalashar)]
       [:> Markdown {:style {:body {:color :white}} :rules (rules :setting)}
        (:setting/home kalashar)])]))

(defn setting [db ^js props]
  (let [sub-nav (app-state/sub-nav-state db)]
    (organization/view-frame db (setting-details db sub-nav))))
