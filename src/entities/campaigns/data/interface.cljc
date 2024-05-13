(ns entities.campaigns.data.interface
  (:require [entities.campaigns.data.core :as core]))

(def create-campaign)

(def get-campaign)
(def get-all-campaigns core/get-all-campaigns)
(def get-active-campaign core/get-active-campaign)
(def get-active-campaign-creatures core/get-active-campaign-creatures)
(def get-active-campaign-realms core/get-active-campaign-realms)
(def get-active-campaign-rules core/get-active-campaign-rulesets)

(def update-campaign)
(def delete-campaign)


(def set-active-campaign core/set-active-campaign)


(def init-campaigns core/init-campaigns)
