(ns entities.campaigns.data.core
  (:require [datascript.core :as ds]))

(defn init-campaigns
  [example-realms example-rulesets example-creatures example-domains example-resources]
  [{:entity-type "campaign"
    :title "Fantasy"
    :campaign/realms example-realms
    :campaign/rulesets example-rulesets
    :campaign/creatures example-creatures
    :campaign/domains example-domains
    :campaign/resources example-resources
    :campaign/default-ruleset (first example-rulesets)
    :campaign/active-ruleset (first example-rulesets)}
   {:entity-type "campaign"
    :title "Science Fiction"}
   {:entity-type "campaign"
    :title "Lovecraftian Horror"}])

(defn get-ids-for-all-campaigns [conn]
  (map first (ds/q '[:find ?e :where [?e :entity-type "campaign"]] @conn)))

(defn get-all-campaigns
  ([conn]
   (get-all-campaigns conn '[*]))
  ([conn pull-pattern]
   (ds/pull-many @conn pull-pattern (get-ids-for-all-campaigns conn))))

(defn get-campaign-details
  ([conn campaign-id]
   (get-campaign-details conn campaign-id '[*]))
  ([conn campaign-id pull-pattern]
   (ds/pull @conn pull-pattern campaign-id)))

(defn get-campaign-titles
  [conn]
  (ds/pull-many @conn '[[:title :as :title]] (get-ids-for-all-campaigns conn)))

(defn get-active-campaign [conn]
  (let [active-campaign-id (ds/q '[:find ?campaign 
                                   :where [?eid :active/campaign ?campaign]]
                                 @conn)]
    (when-not (empty? active-campaign-id)
      (get-campaign-details conn (ffirst active-campaign-id)))))

(defn get-active-campaign-realms
  [conn]
  (when-let [active-campaign-data (get-active-campaign conn)]
    (ds/pull-many @conn '[*] (:campaign/realms active-campaign-data))))

(defn get-active-campaign-rulesets
  [conn]
  (when-let [active-campaign-data (get-active-campaign conn)]
    (ds/pull-many @conn '[*] (:campaign/rulesets active-campaign-data))))

(defn get-campaign-active-ruleset
  [conn]
  (when-let [active-campaign-data (get-active-campaign conn)]
    (ds/pull @conn '[*] (:campaign/active-ruleset active-campaign-data))))

(defn set-campaign-active-ruleset
  [conn ruleset-id]
  (when-let [active-campaign-id (:db/id (get-active-campaign conn))]
    (ds/transact! conn [{:db/id active-campaign-id
                         :campaign/active-ruleset ruleset-id}])))

(defn get-active-campaign-creatures
  [conn]
  (when-let [active-campaign-data (get-active-campaign conn)]
    (ds/pull-many @conn '[*] (:campaign/creatures active-campaign-data))))

(defn get-active-campaign-default-domains
  [conn]
  (when-let [active-campaign-data (get-active-campaign conn)]
    (ds/pull-many @conn '[*] (:campaign/domains active-campaign-data))))

(defn get-active-campaign-resources
  [conn]
  (when-let [active-campaign-data (get-active-campaign conn)]
    (ds/pull-many @conn '[*] (:campaign/resources active-campaign-data))))

(defn set-active-campaign [conn campaign-id]
  (ds/transact! conn [{:db/id -1
                       :active/campaign campaign-id}]))
