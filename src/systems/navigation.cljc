(ns systems.navigation
  (:require [clojure.string :as str]
            [datascript.core :as ds]))

(defn get-full-navigation-state
  [conn]
  (map keyword (str/split (ffirst (ds/q '[:find ?main
                                          :where [1 :navigator/main ?main]]
                                        @conn))
                          #"/")))

(defn get-main-nav-state
  [conn]
  (first (get-full-navigation-state conn)))

(defn navigate!
 [conn keyword-url]
  (let [url (if (vector? keyword-url)
              (apply str (interpose "/" (map name keyword-url)))
              (name keyword-url))]
    (ds/transact! conn [[:db/add 1 :navigator/main url]])) )
