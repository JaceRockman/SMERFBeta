(ns main
  (:require
   ["react-native" :as rn]
   [datascript.core :as ds]
   [entities.views-library :as views]
   [expo.root :as expo-root]
   [init :as init]
   [reagent.core :as r]
   [systems.navigation :as navigation]))

(def app-conn (ds/create-conn {:realm/children-entities {:db/cardinality :db.cardinality/many
                                                         :db/valueType :db.type/ref
                                                         :db/isComponent true}
                               :resource/actions {:db/cardinality :db.cardinality/many
                                                  :db/valueType :db.type/ref
                                                  :db/isComponent true}
                               :action/resources {:db/cardinality :db.cardinality/many
                                                  :db/valueType :db.type/ref
                                                  :db/isComponent true}
                               ;; :creature/resources {:db/cardinality :db.cardinality/many
                               ;; :db/valueType :db.type/ref}
                               :creature-resource/resource {:db/cardinality :db.cardinality/one
                                                            :db/valueType :db.type/ref
                                                            :db/isComponent true}}))

(defn root [conn]
  (let [nav-state (when (not (nil? conn)) (navigation/get-nav-state conn))]
    (println "nav-state" nav-state)
    (case (:page nav-state)
      :settings (views/no-page conn {})
      :asset-library (views/asset-library conn {})
      :campaigns (views/campaign conn {})
      :realms (views/realm conn {})
      :rulesets (views/rules conn {})
      :creatures (views/creatures conn {})
      :resources (views/resources conn {})
      :actions (views/actions conn {})
      nil [:> rn/Text "Error: No database found"]
      (views/campaign conn {}))))


(defn render
  [conn]
  (expo-root/render-root (r/as-element (root conn))))


;; re-render on every DB change
(ds/listen! app-conn
            (fn [tx-report]
              ;; Use app-conn directly since it's already been updated by transact!
              (render app-conn)))

(defn ^:export init []
  (init/initialize-db app-conn)
  (render app-conn))