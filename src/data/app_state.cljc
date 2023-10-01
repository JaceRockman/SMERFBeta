(ns data.app-state
  (:require [datascript.core :as ds]
            [data.conn :refer [conn]]
            [data.realms :as realms]
            [data.domains :as domains]
            [data.creatures :as creatures]))

(defn initialize-db
  [conn]
  (let [_ (ds/transact! conn creatures/creature-races)
        _ (ds/transact! conn domains/default-domains)
        _ (ds/transact! conn realms/init-realms)
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

(defn navigate [navigation-key]
  (ds/transact! conn [[:db/add 1 :navigator/val navigation-key]]))
