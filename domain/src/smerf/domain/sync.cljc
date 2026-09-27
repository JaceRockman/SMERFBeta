(ns smerf.domain.sync
  "Minimal logical facts, snapshots, and deltas for the MVP."
  (:require [smerf.domain.identifiers :as identifiers]))

(def fact-operations #{:add :retract})

(defn- scalar-value?
  [value]
  (or (nil? value)
      (string? value)
      (boolean? value)
      (number? value)
      (keyword? value)))

(defn scalar-fact
  "Creates a logical fact whose value is not a database reference."
  [operation entity subject attribute value]
  {:fact/op operation
   :fact/entity entity
   :fact/subject subject
   :fact/attribute attribute
   :fact/value value})

(defn reference-fact
  "Creates a logical fact whose value is another entity's logical ID."
  [operation entity subject attribute reference]
  {:fact/op operation
   :fact/entity entity
   :fact/subject subject
   :fact/attribute attribute
   :fact/ref reference})

(defn fact?
  "Checks the portable shape of a logical scalar or reference fact."
  [fact]
  (if-not (map? fact)
    false
    (let [has-value (contains? fact :fact/value)
          has-reference (contains? fact :fact/ref)]
      (and (contains? fact-operations (:fact/op fact))
           (keyword? (:fact/entity fact))
           (identifiers/canonical-uuid? (:fact/subject fact))
           (keyword? (:fact/attribute fact))
           (not= has-value has-reference)
           (if has-reference
             (identifiers/canonical-uuid? (:fact/ref fact))
             (scalar-value? (:fact/value fact)))))))

(defn snapshot
  "Creates a complete synchronized projection at a Datomic transaction t."
  [current-through facts]
  {:sync/type :snapshot
   :sync/current-through current-through
   :sync/facts facts})

(defn delta
  "Creates changes after from-t through current-through."
  [from-t current-through additions retractions]
  {:sync/type :delta
   :sync/from-t from-t
   :sync/current-through current-through
   :sync/adds additions
   :sync/retracts retractions})

(defn snapshot?
  [value]
  (and (map? value)
       (= :snapshot (:sync/type value))
       (integer? (:sync/current-through value))
       (vector? (:sync/facts value))
       (every? fact? (:sync/facts value))))

(defn delta?
  [value]
  (and (map? value)
       (= :delta (:sync/type value))
       (integer? (:sync/from-t value))
       (integer? (:sync/current-through value))
       (<= (:sync/from-t value) (:sync/current-through value))
       (vector? (:sync/adds value))
       (vector? (:sync/retracts value))
       (every? fact? (:sync/adds value))
       (every? fact? (:sync/retracts value))))
