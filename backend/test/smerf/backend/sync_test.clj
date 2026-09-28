(ns smerf.backend.sync-test
  (:require [clojure.test :refer [deftest is]]
            [smerf.backend.db.datomic :as datomic]
            [smerf.backend.db.seed :as seed]
            [smerf.backend.http :as http]
            [smerf.backend.sync.source :as source]
            [smerf.domain.codec :as codec]
            [smerf.domain.sync :as sync]))

(defn- backend
  []
  (let [directory (str (java.nio.file.Files/createTempDirectory
                        "smerf-sync-test"
                        (make-array java.nio.file.attribute.FileAttribute 0)))]
    (datomic/connect
     {:system (str "sync-" (random-uuid))
      :storage-dir directory
      :db-name "smerf-sync-test"
      :random-int (constantly 3)})))

(deftest snapshot-contains-logical-facts-only
  (let [backend (backend)
        snapshot (source/snapshot backend)]
    (is (sync/snapshot? snapshot))
    (is (pos? (:sync/current-through snapshot)))
    (is (some #(and (= :entity/campaign (:fact/entity %))
                    (= seed/campaign-id (:fact/subject %))
                    (= :campaign/name (:fact/attribute %))
                    (= "The Lantern Company" (:fact/value %)))
              (:sync/facts snapshot)))
    (is (some #(and (= :character/campaign (:fact/attribute %))
                    (= seed/campaign-id (:fact/ref %)))
              (:sync/facts snapshot)))
    (is (not-any? #(contains? % :db/id) (:sync/facts snapshot)))))

(deftest delta-reports-retractions-and-additions
  (let [backend (backend)
        initial (source/snapshot backend)
        from-t (:sync/current-through initial)]
    (datomic/update-character-notes! backend seed/aria-id "Updated remotely")
    (datomic/update-character-wounds! backend seed/aria-id 2)
    (let [delta (source/deltas-after backend from-t)]
      (is (sync/delta? delta))
      (is (= from-t (:sync/from-t delta)))
      (is (some #(and (= :character/notes (:fact/attribute %))
                      (= "Updated remotely" (:fact/value %)))
                (:sync/adds delta)))
      (is (some #(and (= :character/notes (:fact/attribute %))
                      (= "Keeps a map of every safe road."
                         (:fact/value %)))
                (:sync/retracts delta)))
      (is (some #(and (= :character/wounds (:fact/attribute %))
                      (= 2 (:fact/value %)))
                (:sync/adds delta))))))

(deftest invalid-or-missing-cursors-request-a-snapshot
  (let [backend (backend)
        app (http/app backend (constantly nil))
        missing (app {:request-method :get
                      :uri "/api/sync/delta"})
        invalid (app {:request-method :get
                      :uri "/api/sync/delta"
                      :query-string "from-t=999999"})]
    (doseq [request [missing invalid]]
      (is (= 200 (:status request)))
      (is (= :resync-required
             (:sync/type (codec/decode (:body request))))))))

(deftest http-sync-routes-serve-the-source
  (let [backend (backend)
        app (http/app backend (constantly nil))
        snapshot-response (app {:request-method :get
                                :uri "/api/sync/snapshot"})
        snapshot (codec/decode (:body snapshot-response))
        from-t (:sync/current-through snapshot)
        delta-response (app {:request-method :get
                             :uri "/api/sync/delta"
                             :query-string (str "from-t=" from-t)})
        delta (codec/decode (:body delta-response))]
    (is (= 200 (:status snapshot-response)))
    (is (sync/snapshot? snapshot))
    (is (= 200 (:status delta-response)))
    (is (sync/delta? delta))
    (is (= from-t (:sync/from-t delta)))))
