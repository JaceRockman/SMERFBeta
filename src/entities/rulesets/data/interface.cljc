(ns entities.rulesets.data.interface
  (:require [entities.rulesets.data.core :as core]))

(def create-ruleset)

(def get-ruleset)
(def get-all-rulesets core/get-all-rulesets)

(def update-ruleset)

(def delete-ruleset)

(def get-simple-domain-skill-value core/get-simple-domain-skill-value)
(def get-simple-domain-ability-value core/get-simple-domain-ability-value)

(def get-active-ruleset core/get-active-ruleset)
(def get-default-ruleset core/get-default-ruleset)

(def set-active-ruleset core/set-active-ruleset)

(def get-domains-data core/get-domains-data)
(def get-all-domains core/get-all-domains)
(def get-default-domains core/get-default-domains)
(def default-domains core/default-domains)
(def example-rulesets core/example-rulesets)
