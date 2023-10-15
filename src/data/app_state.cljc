(ns data.app-state
  (:require [datascript.core :as ds]
            [data.conn :refer [conn]]
            [data.realms :as realms]
            [data.domains :as domains]
            [data.creatures :as creatures]))

(defn initialize-db
  [conn]
  (let [_ (ds/transact! conn [[:db/add 1 :navigator/main :realm]
                              [:db/add 1 :navigator/sub :none]])
        _ (ds/transact! conn creatures/creature-races)
        _ (ds/transact! conn domains/default-domains)
        _ (ds/transact! conn realms/init-realms)
        _ (ds/transact! conn [{:db/ident :active}])
        init-domain-entities (map first (ds/q '[:find ?e
                                                :where [?e :domain/id]]
                                              @conn))
        _ (ds/transact! conn (creatures/example-creatures init-domain-entities))]
    :success))

(defn main-nav-state [db]
  (ffirst (ds/q '[:find ?main
                  :where [1 :navigator/main ?main]]
                db)))

(defn sub-nav-state [db]
  (ffirst (ds/q '[:find ?sub
                  :where [1 :navigator/sub ?sub]]
                db)))

(defn navigation-state [db]
  (ds/q '[:find [?main ?sub]
          :where [1 :navigator/main ?main]
          [1 :navigator/sub ?sub]]
        db))

(defn navigate
  ([main-key]
   (ds/transact! conn [[:db/add 1 :navigator/main main-key]]))
  ([main-key sub-key]
   (ds/transact! conn [[:db/add 1 :navigator/main main-key]
                       (when sub-key [:db/add 1 :navigator/sub sub-key])])))
