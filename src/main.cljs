(ns main
  (:require
   [reagent.core :as r]
   ["react-native" :as rn]
   [datascript.core :as ds]
   [expo.root :as expo-root]
   [init :as init]
   [systems.navigation :as navigation]
   [entities.views-library :as views])
  (:require-macros
   [main :refer [profile]]))

(def app-conn (ds/create-conn {:realm/children-entities {:db/cardinality :db.cardinality/many
                                                         :db/valueType :db.type/ref
                                                         :db/isComponent true}}))

(defn root [conn]
  (let [main-nav (when (not (nil? conn)) (navigation/get-main-nav-state conn))]
    (case main-nav
      :settings (r/as-element [views/no-page conn {}])
      :asset-library (r/as-element [views/asset-library conn {}])
      :campaigns (r/as-element [views/campaign conn {}])
      :realms (r/as-element [views/realm conn {}])
      :rulesets (r/as-element [views/rules conn {}])
      :creatures (r/as-element [views/creatures conn {}])
      :resources (r/as-element [views/resources conn {}])
      :actions (r/as-element [views/actions conn {}])
      nil [:> rn/Text "Error: No database found"]
      (r/as-element [views/campaign conn {}]))))


(defn render
  [& conn]
  (when (or (empty? conn) (nil? (first conn))) (init/initialize-db app-conn))
  (profile "render"
           (expo-root/render-root (r/as-element [root (or (first conn) app-conn)]))))

;; re-render on every DB change
(ds/listen! app-conn
            (fn [tx-report]
              (render (r/atom (:db-after tx-report)))))

(defn ^:export init []
  (init/initialize-db app-conn)
  (render app-conn))
