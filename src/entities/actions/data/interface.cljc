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

(def get-dice-penalties core/get-dice-penalties)
(def get-dice-bonuses core/get-dice-bonuses)
(def get-dice-modifier core/get-dice-modifier)
(def get-flat-penalties core/get-flat-penalties)
(def get-flat-bonuses core/get-flat-bonuses)
(def get-flat-modifier core/get-flat-modifier)
(def update-dice-penalties core/update-dice-penalties)
(def update-dice-bonuses core/update-dice-bonuses)
(def update-flat-penalties core/update-flat-penalties)
(def update-flat-bonuses core/update-flat-bonuses)

(def dummy-roll-value core/dummy-roll-value)


(def example-actions core/example-actions)
