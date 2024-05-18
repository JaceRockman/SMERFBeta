(ns entities.resources.data.interface
  (:require [entities.resources.data.core :as core]))

(def create-resource)

(def get-resource core/get-resource-by-id)
(def get-all-resources core/get-all-resources)

(def update-resource)

(def delete-resource)


(def resource-properties core/resource-properties)
(def example-resources core/example-resources)
