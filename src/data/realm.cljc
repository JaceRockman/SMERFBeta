(ns data.realm
  (:require [datascript.core :as ds]
            [data.app-state :as app-state]))

(defn get-all-realms [db]
  (map first (ds/q '[:find ?realm
                     :where [?realm :realm/id]]
                   db)))

(defn get-active-realm [db]
  (map first (ds/q '[:find ?realm
                     :where [:active :active/realm ?realm]]
                   db)))

(defn create-new-realm []
  (ds/transact! app-state/conn [{:realm/id 1}]))

(defn set-active-realm [realm-id]
  (ds/transact! app-state/conn [{:db/ident :active
                                 :active/realm realm-id}]))
