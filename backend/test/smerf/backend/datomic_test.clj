(ns smerf.backend.datomic-test
  (:require [clojure.test :refer [deftest is testing]]
            [smerf.backend.db.datomic :as datomic]
            [smerf.backend.db.schema :as datomic-schema]
            [smerf.backend.db.seed :as seed]
            [smerf.domain.schema :as logical-schema]))

(defn- test-options
  []
  (let [directory (str (java.nio.file.Files/createTempDirectory
                        "smerf-datomic-test"
                        (make-array java.nio.file.attribute.FileAttribute 0)))]
    {:system (str "test-" (random-uuid))
     :storage-dir directory
     :db-name "smerf-test"
     :random-int (constantly 3)}))

(deftest datomic-schema-is-derived-from-logical-schema
  (let [derived (mapv datomic-schema/attribute->datomic
                      logical-schema/attributes)
        by-ident (into {} (map (juxt :db/ident identity) derived))]
    (is (= derived
           (subvec datomic-schema/schema 0 (count derived))))
    (is (= :db.type/ref
           (:db/valueType (by-ident :character/campaign))))
    (is (= :db.unique/identity
           (:db/unique (by-ident :entity/id))))
    (is (= :db.type/string
           (:db/valueType (by-ident :roll/dice))))))

(deftest seeded-workspace-is-readable-and-repeatable
  (let [options (test-options)
        first-store (datomic/connect options)
        workspace (datomic/load-campaign-workspace
                   first-store
                   seed/campaign-id)]
    (is (= "The Lantern Company"
           (get-in workspace [:campaign :campaign/name])))
    (is (= ["Aria" "Borin"]
           (mapv :character/name (:characters workspace))))
    (is (= 3 (count (:actions workspace))))

    (testing "reconnecting retains transactions and does not duplicate seed data"
      (datomic/update-character-notes! first-store seed/aria-id "Persisted")
      (let [second-store (datomic/connect options)
            reloaded (datomic/load-campaign-workspace
                      second-store seed/campaign-id)]
        (is (= 2 (count (:characters reloaded))))
        (is (= "Persisted"
               (get-in (datomic/load-character second-store seed/aria-id)
                       [:character :character/notes])))))))

(deftest character-writes-and-rolls-are-persisted
  (let [backend (datomic/connect (test-options))
        character-id "44444444-4444-4444-8444-444444444444"]
    (datomic/create-character!
     backend
     {:character/id character-id
      :character/campaign-id seed/campaign-id
      :character/ruleset-id seed/ruleset-id
      :character/name "Cora"
      :character/notes ""
      :character/wounds 0})
    (datomic/update-character-notes! backend character-id "Found the gate")
    (datomic/update-character-wounds! backend character-id 2)
    (let [result (datomic/transact-roll!
                  backend
                  character-id
                  seed/strike-id)
          loaded (datomic/load-character backend character-id)]
      (is (= "Found the gate"
             (get-in loaded [:character :character/notes])))
      (is (= 2 (get-in loaded [:character :character/wounds])))
      (is (= {:roll/action-id seed/strike-id
              :roll/dice [4 4]
              :roll/total 8
              :roll/outcome :success}
             result))
      (is (= [4 4] (get-in loaded [:rolls 0 :roll/dice])))
      (is (= :success (get-in loaded [:rolls 0 :roll/outcome]))))))
