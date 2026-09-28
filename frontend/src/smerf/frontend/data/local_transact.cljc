(ns smerf.frontend.data.local-transact
  (:require [smerf.frontend.data.dartascript :as db]))

(def selected-campaign :local/selected-campaign-id)
(def selected-character :local/selected-character-id)
(def route :local/route)

(defn select-campaign!
  [database campaign-id]
  (db/transact-local! database selected-campaign campaign-id))

(defn select-character!
  [database character-id]
  (db/transact-local! database selected-character character-id))

(defn navigate!
  [database route-name]
  (db/transact-local! database route route-name))

(defn value
  [database operation]
  (db/local-value database operation))
