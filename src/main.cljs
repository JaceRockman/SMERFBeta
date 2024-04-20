(ns main
  (:require
   [reagent.core :as r]
   [datascript.core :as ds]
   [expo.root :as expo-root]
   [init :as init]
   [systems.navigation :as navigation]
   [entities.views-library :as views])
  (:require-macros
   [main :refer [profile]]))

(def conn (ds/create-conn {:realm/children-entities {:db/cardinality :db.cardinality/many
                                                     :db/valueType :db.type/ref
                                                     :db/isComponent true}}))

(defn root [conn]
  (let [main-nav (navigation/get-main-nav-state conn)]
    (case main-nav
      :settings (r/as-element [views/no-page conn {}])
      :asset-library (r/as-element [views/asset-library conn {}])
      :campaigns (r/as-element [views/campaign conn {}])
      :realms (r/as-element [views/realm conn {}])
      :rulesets (r/as-element [views/rules conn {}])
      :creatures (r/as-element [views/creatures conn {}])
      :resources (r/as-element [views/resources conn {}])
      :actions (r/as-element [views/actions conn {}])
      (r/as-element [views/campaign conn {}]))))

(defn render
  {:dev/after-load true}
  [conn]
  (profile "render"
           (expo-root/render-root (r/as-element [root conn]))))

;; re-render on every DB change
(ds/listen! conn :render
            (fn [tx-report] 
              (render (r/atom (:db-after tx-report)))))

(defn ^:export init []
  (init/initialize-db conn)
  (render conn))
