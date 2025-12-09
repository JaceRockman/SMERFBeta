(ns entities.campaigns.data.interface
  (:require [entities.campaigns.data.core :as core]))

(def create-campaign)

(def get-campaign)
(def get-all-campaigns core/get-all-campaigns)
(def get-active-campaign core/get-active-campaign)
(def get-active-campaign-resources core/get-active-campaign-resources)
(def get-active-campaign-default-domains core/get-active-campaign-default-domains)
(def get-active-campaign-creatures core/get-active-campaign-creatures)
(def get-active-campaign-realms core/get-active-campaign-realms)
(def get-active-campaign-rulesets core/get-active-campaign-rulesets)

(def update-campaign)
(def delete-campaign)

(def get-campaign-active-ruleset core/get-campaign-active-ruleset)
(def set-campaign-active-ruleset core/set-campaign-active-ruleset)
(def set-active-campaign core/set-active-campaign)


(def init-campaigns core/init-campaigns)
