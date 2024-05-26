(ns entities.rulesets.data.interface
  (:require [entities.rulesets.data.core :as core]))

(def create-ruleset)

(def get-ruleset)
(def get-all-rulesets core/get-all-rulesets)

(def update-ruleset)

(def delete-ruleset)


(def get-active-ruleset core/get-active-ruleset)

(def set-active-ruleset core/set-active-ruleset)

(def get-domains-data core/get-domains-data)
(def default-domains core/default-domains)
(def example-rulesets core/example-rulesets)

(def get-stat-value-from-title core/get-stat-value-from-title)
