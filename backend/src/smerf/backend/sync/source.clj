(ns smerf.backend.sync.source
  (:require [datomic.client.api :as d]
            [smerf.backend.sync.projection :as projection]
            [smerf.domain.sync :as sync]))

(defn current-through
  [{:keys [connection]}]
  (or (:t (last (d/tx-range connection {:start 0 :end nil})))
      0))

(defn snapshot
  [backend]
  (let [db (d/db (:connection backend))
        current-through (current-through backend)]
    (sync/snapshot current-through
                   (projection/snapshot-facts db))))

(defn- usable-cursor?
  [backend from-t]
  (and (integer? from-t)
       (<= 0 from-t (current-through backend))))

(defn deltas-after
  [backend from-t]
  (when-not (usable-cursor? backend from-t)
    (throw (ex-info "The synchronization cursor is unusable"
                    {:error/type :sync/invalid-cursor
                     :sync/from-t from-t
                     :sync/current-through (current-through backend)})))
  (let [current-through (current-through backend)
        transactions (d/tx-range
                      (:connection backend)
                      {:start (inc from-t)
                       :end nil})
        {:keys [adds retracts]}
        (projection/transaction-facts
         (d/db (:connection backend))
         transactions)]
    (sync/delta from-t current-through adds retracts)))
