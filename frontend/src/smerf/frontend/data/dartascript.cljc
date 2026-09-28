(ns smerf.frontend.data.dartascript
  "The frontend database seam.

  The synchronized and local maps model the two ownership zones explicitly.
  The physical Dartascript adapter can replace this state representation
  without changing SyncApplier, LocalTransact, or ProjectionQuery."
  (:require [smerf.domain.sync :as sync]))

(defn database
  []
  (atom {:sync/facts #{}
         :sync/current-through 0
         :local/state {}}))

(defn- stored-fact
  [fact]
  (assoc fact :fact/op :add))

(defn- retractable-fact
  [fact]
  (stored-fact fact))

(defn replace-synchronized!
  [db snapshot]
  (when-not (sync/snapshot? snapshot)
    (throw (ex-info "Cannot apply an invalid synchronization snapshot"
                    {:error/type :sync/invalid-snapshot})))
  (swap! db
         (fn [state]
           (assoc state
                  :sync/facts (set (map stored-fact (:sync/facts snapshot)))
                  :sync/current-through (:sync/current-through snapshot)))))

(defn apply-delta!
  [db delta]
  (when-not (sync/delta? delta)
    (throw (ex-info "Cannot apply an invalid synchronization delta"
                    {:error/type :sync/invalid-delta})))
  (swap! db
         (fn [{:keys [sync/current-through] :as state}]
           (when-not (= current-through (:sync/from-t delta))
             (throw (ex-info "Synchronization delta does not continue locally"
                             {:error/type :sync/cursor-mismatch
                              :local/current-through current-through
                              :delta/from-t (:sync/from-t delta)})))
           (let [facts (reduce disj
                               (:sync/facts state)
                               (map retractable-fact
                                    (:sync/retracts delta)))]
             (assoc state
                    :sync/facts
                    (into facts (map stored-fact (:sync/adds delta)))
                    :sync/current-through
                    (:sync/current-through delta))))))

(defn synchronized-facts
  [db]
  (->> (:sync/facts @db)
       (sort-by pr-str)
       vec))

(defn current-through
  [db]
  (:sync/current-through @db))

(defn transact-local!
  [db operation value]
  (when-not (keyword? operation)
    (throw (ex-info "Local operation must be a keyword"
                    {:error/type :local/invalid-operation})))
  (swap! db assoc-in [:local/state operation] value))

(defn local-value
  [db operation]
  (get-in @db [:local/state operation]))
