(ns data.realms
  (:require [datascript.core :as ds]
            [data.conn :refer [conn]]))

(def init-realms
  [{:realm/id #?(:clj (java.util.UUID/randomUUID) :cljs (random-uuid))
    :realm/title "Fantasy"}
   {:realm/id #?(:clj (java.util.UUID/randomUUID) :cljs (random-uuid))
    :realm/title "Science Fiction"}
   {:realm/id #?(:clj (java.util.UUID/randomUUID) :cljs (random-uuid))
    :realm/title "Lovecraftian Horror"}])

(def simple-keys-pull-pattern
  '[[:realm/id :as :id] [:realm/title :as :title]])

(defn get-ids-for-all-realms [db]
  (map first (ds/q '[:find ?e :where [?e :realm/id]] db)))

(defn get-details-for-all-realms
  ([db]
   (get-details-for-all-realms db '[*]))
  ([db pull-pattern]
   (ds/pull-many db pull-pattern (get-ids-for-all-realms db))))

(defn get-realm-details
  ([db realm-id]
   (get-realm-details db realm-id '[*]))
  ([db realm-id pull-pattern]
   (ds/pull db pull-pattern (ffirst (ds/q '[:find ?eid
                                            :in $ ?realm-id
                                            :where [?eid :realm/id ?realm-id]]
                                          db realm-id)))))

(defn get-realm-titles
  [db]
  (ds/pull-many db '[[:realm/title :as :title]] (get-ids-for-all-realms db)))

(defn get-active-realm [db]
  (map first (ds/q '[:find ?realm
                     :where [:active :active/realm ?realm]]
                   db)))

(defn create-new-realm []
  (ds/transact! conn [{:realm/id #?(:clj (java.util.UUID/randomUUID) :cljs (random-uuid))
                       :realm/title "New Realm"}]))

(defn set-active-realm [realm-id]
  (ds/transact! conn [{:db/ident :active :active/realm realm-id}]))
