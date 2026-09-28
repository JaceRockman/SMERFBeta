(ns smerf.frontend.data.sync-applier
  (:require [smerf.frontend.data.dartascript :as db]))

(defn apply-snapshot!
  [database snapshot]
  (db/replace-synchronized! database snapshot))

(defn apply-delta!
  [database delta]
  (db/apply-delta! database delta))

(defn cursor
  [database]
  (db/current-through database))

(defn facts
  [database]
  (db/synchronized-facts database))
