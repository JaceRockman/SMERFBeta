(ns smerf.frontend.sync-test
  (:require #?(:cljd [cljd.test :refer [deftest is]]
               :clj [clojure.test :refer [deftest is]])
            [smerf.domain.codec :as codec]
            [smerf.fixtures.contract :as fixture]
            [smerf.frontend.data.dartascript :as database]
            [smerf.frontend.data.local-transact :as local]
            [smerf.frontend.data.projection-query :as query]
            [smerf.frontend.data.sync-applier :as applier]
            [smerf.frontend.sync.client :as client]))

(deftest snapshot-and-delta-update-the-synchronized-zone
  (let [db (database/database)
        snapshot (assoc fixture/snapshot :sync/current-through 10)
        delta (assoc fixture/delta
                     :sync/from-t 10
                     :sync/current-through 11)]
    (local/select-campaign! db fixture/campaign-id)
    (applier/apply-snapshot! db snapshot)
    (is (= 10 (applier/cursor db)))
    (is (= fixture/campaign-facts (applier/facts db)))
    (is (= fixture/campaign-id
           (local/value db local/selected-campaign)))

    (applier/apply-delta! db delta)
    (is (= 11 (applier/cursor db)))
    (is (= 1
           (count (filter #(and (= :character/wounds
                                   (:fact/attribute %))
                                (= 1 (:fact/value %)))
                          (applier/facts db)))))))

(deftest projection-query-reads-only-synchronized-facts
  (let [db (database/database)]
    (applier/apply-snapshot! db fixture/snapshot)
    (let [workspace (query/campaign-workspace db fixture/campaign-id)]
      (is (= "Example Campaign"
             (get-in workspace [:campaign :campaign/name])))
      (is (= [fixture/character-id]
             (mapv :entity/id (:characters workspace)))))
    (is (= fixture/character-id
           (get-in (query/character-detail db fixture/character-id)
                   [:character :entity/id])))
    (is (nil? (get-in (query/character-detail db fixture/character-id)
                      [:character :character/name])))))

(deftest sync-client-decodes-and-applies-responses
  (let [responses {"/api/sync/snapshot" (codec/encode fixture/snapshot)
                   "/api/sync/delta?from-t=10" (codec/encode fixture/delta)}
        request (fn [path] (get responses path))
        sync-client (client/client request)
        db (database/database)]
    (client/apply-response! db ((:sync/snapshot sync-client)))
    (client/apply-response! db ((:sync/delta sync-client) 10))
    (is (= 11 (applier/cursor db)))))

(deftest poll-bootstraps-and-advances-from-the-local-cursor
  (let [responses (atom {"/api/sync/snapshot" (codec/encode fixture/snapshot)
                         "/api/sync/delta?from-t=10"
                         (codec/encode fixture/delta)})
        sync-client (client/client #(get @responses %))
        db (database/database)]
    (is (= :snapshot
           (:sync/type (client/poll! db sync-client))))
    (is (= 10 (applier/cursor db)))
    (is (= :delta
           (:sync/type (client/poll! db sync-client))))
    (is (= 11 (applier/cursor db)))))
