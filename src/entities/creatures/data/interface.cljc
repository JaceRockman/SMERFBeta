(ns entities.creatures.data.interface
  (:require [entities.creatures.data.core :as core]))

(def create-creature)

(def get-creature core/get-creature-by-id)
(def get-all-creatures core/get-all-creatures)

(def get-active-creature core/get-active-creature)
(def get-creature-races core/get-creature-races)
(def get-creature-domains core/get-creature-domains)
(def get-creature-domain-damage core/get-creature-domain-damage)
(def get-creature-domain-damage-total core/get-creature-domain-damage-total)
(def get-creature-resources core/get-creature-resources)
(def get-creature-resources-from-data core/get-creature-resources-from-data)
(def get-creature-actions core/get-creature-actions)

(def update-creature)
(def update-wound-value core/update-wound-value)

(def delete-creature)


(def set-active-creature core/set-active-creature)

(def get-creature-race-titles core/get-creature-races)

(def creature-races core/creature-races)
(def example-creatures core/example-creatures)
