(ns data.campaigns
  (:require [datascript.core :as ds]
            [data.conn :refer [conn]]))

(defn init-campaigns
  [example-realms example-rulesets]
  [{:campaign/id #?(:clj (java.util.UUID/randomUUID) :cljs (random-uuid))
    :campaign/title "Fantasy"
    :campaign/realms example-realms
    :campaign/rulesets example-rulesets}
   {:campaign/id #?(:clj (java.util.UUID/randomUUID) :cljs (random-uuid))
    :campaign/title "Science Fiction"}
   {:campaign/id #?(:clj (java.util.UUID/randomUUID) :cljs (random-uuid))
    :campaign/title "Lovecraftian Horror"}])

(def simple-keys-pull-pattern
  '[[:db/id :as :id] [:campaign/title :as :title]])

(defn get-ids-for-all-campaigns [db]
  (map first (ds/q '[:find ?e :where [?e :campaign/id]] db)))

(defn get-details-for-all-campaigns
  ([db]
   (get-details-for-all-campaigns db '[*]))
  ([db pull-pattern]
   (ds/pull-many db pull-pattern (get-ids-for-all-campaigns db))))

(defn get-campaign-details
  ([db campaign-id]
   (get-campaign-details db campaign-id '[*]))
  ([db campaign-id pull-pattern]
   (ds/pull db pull-pattern campaign-id)))

(defn get-campaign-titles
  [db]
  (ds/pull-many db '[[:campaign/title :as :title]] (get-ids-for-all-campaigns db)))

(defn get-active-campaign-data [db]
  (let [active-campaign-id (ds/q '[:find ?campaign 
                                :where [?eid :active/campaign ?campaign]]
                              db)]
    (when-not (empty? active-campaign-id)
      (get-campaign-details db (ffirst active-campaign-id)))))

(defn get-active-campaign-realms
  [db]
  (when-let [active-campaign-data (get-active-campaign-data db)]
    (ds/pull-many db '[*] (:campaign/realms active-campaign-data))))

(defn get-active-campaign-rulesets
  [db]
  (when-let [active-campaign-data (get-active-campaign-data db)]
    (ds/pull-many db '[*] (:campaign/rulesets active-campaign-data))))

(defn create-new-campaign []
  (ds/transact! conn [{:campaign/id #?(:clj (java.util.UUID/randomUUID) :cljs (random-uuid))
                       :campaign/title "New Campaign"}]))

(defn set-active-campaign [campaign-id]
  (ds/transact! conn [{:db/id -1
                       :active/campaign campaign-id}]))
