(ns entities.actions.data.interface
  (:require [entities.actions.data.core :as core]))

(def create-action)

(def get-all-actions core/get-all-actions)

(def get-action)

(def update-action)

(def delete-action)

(def get-selected-domain core/get-selected-domain)
(def set-selected-domain core/set-selected-domain)
(def get-selected-skill core/get-selected-skill)
(def set-selected-skill core/set-selected-skill)
(def get-selected-ability core/get-selected-ability)
(def set-selected-ability core/set-selected-ability)

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

(def get-splinters core/get-splinters)
(def update-splinters core/update-splinters)

(def get-combinations)
(def update-combinations core/update-combinations)

(def get-dice-pools core/get-dice-pools)
(def format-dice-pool-text core/format-dice-pool-text)
(def format-dice-pools-text core/format-dice-pools-text)
(def format-dice-pool-icons core/format-dice-pool-icons)
(def format-dice-pools-icons core/format-dice-pools-icons)
(def get-combined-dice-pools core/get-combined-dice-pools)
(def get-fully-formatted-roll core/get-fully-formatted-roll)

(def example-actions core/example-actions)

(def roll-dice-pool core/roll-dice-pool)
