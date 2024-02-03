(ns data.conn
  (:require [datascript.core :as ds]))

(def conn (ds/create-conn {:realm/children-entities {:db/cardinality :db.cardinality/many
                                                     :db/valueType :db.type/ref
                                                     :db/isComponent true}}))
