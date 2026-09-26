(ns smerf.fixtures.registry
  (:require [smerf.domain.registry :as registry]))

(def campaign-id
  (registry/attribute-descriptor
   :campaign/id
   :entity/campaign
   :scalar/uuid-string
   :one
   {:attribute/required? true
    :attribute/identity? true
    :attribute/unique? true
    :attribute/immutable? true
    :attribute/nullable? false
    :attribute/sync? true}))

(def campaign-name
  (registry/attribute-descriptor
   :campaign/name
   :entity/campaign
   :scalar/string
   :one
   {:attribute/required? true
    :attribute/sync? true}))

(def character-id
  (registry/attribute-descriptor
   :character/id
   :entity/character
   :scalar/uuid-string
   :one
   {:attribute/required? true
    :attribute/identity? true
    :attribute/unique? true
    :attribute/immutable? true
    :attribute/nullable? false
    :attribute/sync? true}))

(def character-status
  (registry/attribute-descriptor
   :character/status
   :entity/character
   :scalar/keyword
   :one
   {:attribute/constraints {:constraint/enum :enum/character-status}
    :attribute/sync? true}))

(def character-campaign
  (registry/attribute-descriptor
   :character/campaign
   :entity/character
   :reference
   :one
   {:attribute/reference :entity/campaign
    :attribute/sync? true}))

(def character-resources
  (registry/attribute-descriptor
   :character/resources
   :entity/character
   :reference
   :many
   {:attribute/reference :entity/resource
    :attribute/sync? true}))

(def character-backend-note
  (registry/attribute-descriptor
   :character/backend-note
   :entity/character
   :scalar/string
   :one
   {:attribute/ownership :backend}))

(def character-local-selection
  (registry/attribute-descriptor
   :character/local-selection
   :entity/character
   :scalar/boolean
   :one
   {:attribute/ownership :local}))

(def resource-id
  (registry/attribute-descriptor
   :resource/id
   :entity/resource
   :scalar/uuid-string
   :one
   {:attribute/required? true
    :attribute/identity? true
    :attribute/unique? true
    :attribute/immutable? true
    :attribute/nullable? false
    :attribute/sync? true}))

(def resource-name
  (registry/attribute-descriptor
   :resource/name
   :entity/resource
   :scalar/string
   :one
   {:attribute/required? true
    :attribute/sync? true}))

(def character-status-enum
  (registry/enum-descriptor
   :enum/character-status
   #{:active :retired}
   {:enum/labels {:active "Active"
                  :retired "Retired"}}))

(def campaign
  (registry/entity-descriptor
   :entity/campaign
   :campaign/id
   [:campaign/id
    :campaign/name]))

(def character
  (registry/entity-descriptor
   :entity/character
   :character/id
   [:character/id
    :character/status
    :character/campaign
    :character/resources
    :character/backend-note
    :character/local-selection]))

(def resource
  (registry/entity-descriptor
   :entity/resource
   :resource/id
   [:resource/id
    :resource/name]))

(def registry
  (registry/registry
   campaign-id
   campaign-name
   character-id
   character-status
   character-campaign
   character-resources
   character-backend-note
   character-local-selection
   resource-id
   resource-name
   character-status-enum
   campaign
   character
   resource))
