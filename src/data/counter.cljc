(ns data.counter
  (:require
   [data.app-state :as app]
   [datascript.core :as ds]))

(defn get-counter-val
  [db]
  (first (ds/q '[:find ?e ?counter
                 :where [?e :counter/val ?counter]]
               db)))

(defn get-counter-enabled
  [db]
  (ffirst (ds/q '[:find ?counter
                  :where [?e :counter/enabled ?counter]]
                db)))

(defn inc-counter
  [db]
  (let [[eid val] (get-counter-val db)]
    (ds/transact! app/conn [[:db/add eid :counter/val (inc val)]])))