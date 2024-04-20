(ns init
  (:require [clojure.string :as str]
            ["react-native" :as rn]
            [datascript.core :as ds]
            [entities.campaigns.data.interface :as campaign-data]
            [entities.realms.data.interface :as realm-data]
            [entities.rulesets.data.interface :as ruleset-data]
            [entities.creatures.data.interface :as creature-data]
            [entities.resources.data.interface :as resource-data]
            [entities.actions.data.interface :as action-data]))

(defn initialize-db
  [conn]
  (let [_ (ds/transact! conn [[:db/add 1 :navigator/history '("campaigns")]
                              ;; [:db/add 1 :navigator/sub :none]
                              ])
        _ (ds/transact! conn realm-data/example-realms)
        _ (ds/transact! conn creature-data/creature-races)
        _ (ds/transact! conn ruleset-data/default-domains)
        _ (ds/transact! conn ruleset-data/example-rulesets)
        _ (ds/transact! conn (campaign-data/init-campaigns (vec (map first (ds/q '[:find ?e
                                                                                   :where [?e :realm/title]]
                                                                                 @conn)))
                                                           (vec (map first (ds/q '[:find ?e
                                                                                   :where [?e :ruleset/title]]
                                                                                 @conn)))
                                                           (vec (map first (ds/q '[:find ?e
                                                                                   :where [?e :creature/title]]
                                                                                 @conn)))))
        _ (ds/transact! conn action-data/example-actions)
        _ (ds/transact! conn resource-data/resource-properties)
        _ (ds/transact! conn resource-data/example-resources)
        init-domain-entities (map first (ds/q '[:find ?e
                                                :where [?e :domain/id]]
                                              @conn))
        init-resources (map first (ds/q '[:find ?e
                                          :where [?e :resource/title]]
                                        @conn))
        init-actions (map first (ds/q '[:find ?e
                                        :where [?e :action/title]]
                                      @conn))
        _ (ds/transact! conn (creature-data/example-creatures init-domain-entities init-resources init-actions))]
    :success))
