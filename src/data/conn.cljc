(ns data.conn
  (:require [datascript.core :as ds]))

(def conn (ds/create-conn))
