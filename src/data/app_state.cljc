(ns data.app-state
  (:require [datascript.core :as ds]
            [data.domains :as domains]
            [data.creatures :as creatures]))

(def conn (ds/create-conn))

(defn init-dev-db
  []
  (let [_ (ds/transact! conn creatures/creature-races)
        _ (ds/transact! conn domains/default-domains)
        _ (ds/transact! conn [{:db/ident :active}])
        init-domain-entities (map first (ds/q '[:find ?e
                                                :where [?e :domain/id]]
                                              @conn))
        _ (ds/transact! conn (creatures/example-creatures init-domain-entities))] 
    :success))

(defn navigation-state [db]
  (ffirst (ds/q '[:find ?navigator
                  :where [?eid :navigator/val ?navigator]]
                db)))

(defn navigate-fn [navigation-key]
  (fn [] (ds/transact! conn [[:db/add 1 :navigator/val navigation-key]])))
