(ns data.conn
  (:require [datascript.core :as ds]))

(def conn (ds/create-conn {:setting/territories {:db/cardinality :db.cardinality/many
                                                 :db/valueType :db.type/ref
                                                 :db/isComponent true}
                           :setting/territory-races {:db/cardinality :db.cardinality/many
                                                     :db/valueType :db.type/ref
                                                     :db/isComponent true}}))
