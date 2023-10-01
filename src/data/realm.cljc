(ns data.realms
  (:require [datascript.core :as ds]
            [data.app-state :as app-state]))

(def init-realms
  [{:realm/id #?(:clj (java.util.UUID/randomUUID) :cljs random-uuid)
    :realm/title "Fantasy"}
   {:realm/id #?(:clj (java.util.UUID/randomUUID) :cljs random-uuid)
    :realm/title "Science Fiction"}
   {:realm/id #?(:clj (java.util.UUID/randomUUID) :cljs random-uuid)
    :realm/title "Lovecraftian Horror"}])

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
