(ns entities.resources.data.interface
  (:require [entities.resources.data.core :as core]))

(def create-resource core/create-resource)

(def get-resource core/get-resource-by-id)
(def get-resources core/get-resources-by-id)
(def get-all-resources core/get-all-resources)

(def get-all-resource-properties core/get-all-resource-properties)

(def update-resource)

(def delete-resource)

(def resource-properties core/resource-properties)
(def example-resources core/example-resources)
