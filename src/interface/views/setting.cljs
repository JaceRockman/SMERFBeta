(ns interface.views.setting
  (:require ["react-native" :as rn]
            [reagent.core :as r]
            ;; [nextjournal.markdown :refer [parse ->hiccup]]
            [nextjournal.markdown.parser :as md.parser] ;; I'd like to find some way to parse the markdown into a structured document for transformation and storage and stuff. It's not working though, not sure why.
            [nextjournal.markdown.transform :as md.transform]
            [data.app-state :as app-state]
            [data.realms :as realms]
            [data.setting :as settings]
            [interface.styles.text :refer [view-header-style]]
            [interface.components.navigation :as navigation]
            [interface.components.organization :as organization]
            [interface.widgets.buttons :refer [button]]))

(def Markdown (.-default (js/require "react-native-markdown-display")))

(defn link-click [text] (fn [] (app-state/navigate [:setting (keyword text)])))

(def setting-rules
  {:link (fn [node children parent styles]
           (r/as-element
            (button {:on-press (link-click (-> node .-attributes .-href))}
                    (-> node .-children first .-content))))})

(defn setting-details [db sub-nav]
  (let [kalashar (settings/setting-details db "Kalashar")]
    [:> rn/View {:style {:flex :1}}
     (case (first sub-nav)
       :territories [:> Markdown {:rules setting-rules}
                     (:setting/home kalashar)]
       :commonlands [:> Markdown {:rules setting-rules}
                     (:setting/commonlands kalashar)]
       :outwilds [:> Markdown {:rules setting-rules}
                     (:setting/outwilds kalashar)]
       :humans [:> Markdown {:rules setting-rules}
                (:setting/humans kalashar)]
       :elves [:> Markdown {:rules setting-rules}
                     (:setting/elves kalashar)]
       :dwarves [:> Markdown {:rules setting-rules}
                     (:setting/dwarves kalashar)]
       :goblins [:> Markdown {:rules setting-rules}
                     (:setting/goblins kalashar)]
       [:> Markdown {:rules setting-rules}
        (:setting/home kalashar)])]))

(defn setting [db ^js props]
  (let [sub-nav (app-state/sub-nav-state db)]
    (organization/view-frame db (setting-details db sub-nav))))
