(ns entities.realms.data.interface 
  (:require [entities.realms.data.core :as core]))

(def create-realm)

(def get-realm core/get-realm-entity-children)
(def get-realm-entity-parents core/get-realm-entity-parents)
(def get-realm-entity-children core/get-realm-entity-children)
(def get-all-realms core/get-all-realms)

(def update-realm)

(def delete-realm)


(def get-active-realm core/get-active-realm)
(def get-active-subrealm core/get-active-subrealm)

(def set-active-realm core/set-active-realm)
(def set-active-subrealm core/set-active-subrealm)
(def set-active-subrealm-by-name core/set-active-subrealm-by-name)

(def example-realms core/example-realms)
