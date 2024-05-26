(ns entities.actions.data.interface
  (:require [entities.actions.data.core :as core]))

(def create-action)

(def get-all-actions core/get-all-actions)

(def get-action)

(def update-action)

(def delete-action)

(def get-selected-skill core/get-selected-skill)
(def set-selected-skill core/set-selected-skill)

(def toggle-resource-selection core/toggle-resource-selection)
(def get-selected-resources core/get-selected-resources)

(def dummy-roll-value core/dummy-roll-value)


(def example-actions core/example-actions)
