(ns data.app-state
  (:require [datascript.core :as ds]
            [data.conn :refer [conn]]
            [data.realms :as realms]
            [data.setting :as settings]
            [data.rules :as rules]
            [data.domains :as domains]
            [data.creatures :as creatures]
            [data.resources :as resources]
            [data.actions :as actions]
            [clojure.string :as str]))

(defn initialize-db
  [conn]
  (let [_ (ds/transact! conn [[:db/add 1 :navigator/main "realm"]
                              ;; [:db/add 1 :navigator/sub :none]
                              ])
        _ (ds/transact! conn settings/example-fantasy-setting)
        _ (ds/transact! conn creatures/creature-races)
        _ (ds/transact! conn domains/default-domains)
        _ (ds/transact! conn realms/init-realms)
        _ (ds/transact! conn rules/simple-ruleset)
        _ (ds/transact! conn actions/example-actions)
        _ (ds/transact! conn resources/resource-properties)
        _ (ds/transact! conn resources/example-resources)
        _ (ds/transact! conn [{:db/ident :active}])
        init-domain-entities (map first (ds/q '[:find ?e
                                                :where [?e :domain/id]]
                                              @conn))
        init-resources (map first(ds/q '[:find ?e
                                         :where [?e :resource/title]]
                                       @conn))
        init-actions (map first(ds/q '[:find ?e
                                       :where [?e :action/title]]
                                     @conn))
        _ (ds/transact! conn (creatures/example-creatures init-domain-entities init-resources init-actions))]
    :success))

(defn navigation-state [db]
  (map keyword (str/split (ffirst (ds/q '[:find ?main
                                          :where [1 :navigator/main ?main]]
                                        db))
                          #"/")))

(defn main-nav-state [db]
  (first (navigation-state db)))

(defn sub-nav-state [db]
  (rest (navigation-state db)))

(defn navigation-state-old [db]
  (ds/q '[:find [?main ?sub]
          :where [1 :navigator/main ?main]
          [1 :navigator/sub ?sub]]
        db))

(defn navigate
 [keyword-url]
  (let [url (if (vector? keyword-url)
              (apply str (interpose "/" (map name keyword-url)))
              (name keyword-url))]
    (ds/transact! conn [[:db/add 1 :navigator/main url]])) )
