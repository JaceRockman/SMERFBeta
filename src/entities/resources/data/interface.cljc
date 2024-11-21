(ns entities.resources.data.interface
  (:require [entities.resources.data.core :as core]))

(def create-resource core/create-resource)

(def get-resource core/get-resource-by-id)
(def get-resources core/get-resources-by-id)
(def get-all-resources core/get-all-resources)

(def get-all-resource-properties core/get-all-resource-properties)
(def get-resource-actions core/get-resource-actions)

(def get-resource-from-creature-resource core/get-resource-from-creature-resource)
(def get-quantity-from-creature-resource core/get-quantity-from-creature-resource)

(def update-resource)

(def delete-resource)

(def resource-properties core/resource-properties)
(def example-resources core/example-resources)

(def update-creature-resource-quantity core/update-creature-resource-quantity)
