(ns systems.navigation
  (:require [clojure.string :as str]
            [datascript.core :as ds]
            [organisms.compounds.search-filter-sort-list :refer [external-search-text collapse-state]]
            [organisms.molecules.scroll-position-indicator :refer [ruleset-horizontal-position creature-horizontal-position]]))

(defn get-nav-history
  [conn]
  (let [result (ffirst (ds/q '[:find ?history
                               :where [1 :navigator/history ?history]]
                             @conn))]
    result))

(defn get-main-nav-state
  [conn]
  (keyword (first (str/split (first (get-nav-history conn)) #"/"))))

(defn get-main-nav-state-list
  [conn]
  (str/split (first (get-nav-history conn)) #"/"))

(defn get-current-nav-state-title
  [conn]
  (let [current-nav-state (last (get-main-nav-state-list conn))]
    (str/capitalize (if (re-matches #"\d+" current-nav-state)
                      (ffirst (ds/q '[:find ?title
                                      :in $ ?eid
                                      :where [?eid :title ?title]]
                                    @conn (int current-nav-state)))
                      current-nav-state))))

(defn reset-temp-state
  []
  (reset! external-search-text {})
  (reset! collapse-state {})
  (reset! ruleset-horizontal-position 0)
  (reset! creature-horizontal-position 0))

(defn navigate!
  [conn keyword-url]
  (reset-temp-state)
  (let [url (if (coll? keyword-url)
              (apply str (interpose "/" keyword-url))
              (name keyword-url))
        history (get-nav-history conn)]
    (when (not (= (first history) url))
      (ds/transact! conn [[:db/add 1 :navigator/history (conj history url)]]))))

(defn subnavigate
  [conn subsection]
  (let [main-state (name (get-main-nav-state conn))
        new-state [main-state subsection]]
    (navigate! conn new-state)))

(defn subsubnavigate
  [conn subsubsection]
  (let [main-state (get-main-nav-state-list conn)
        new-state (assoc main-state 2 subsubsection)]
    (navigate! conn new-state)))

(defn nav-back
  [conn]
  (let [history (get-nav-history conn)
        updated-history (if (< 1 (count history))
                      (rest history)
                      history)]
    (ds/transact! conn [[:db/add 1 :navigator/history updated-history]])))

(defn nav-out
  [conn]
  (let [nav-state-list (get-main-nav-state-list conn)
        navigation-collection (if (= 1 (count nav-state-list))
                                "campaigns"
                                (butlast nav-state-list))]
    (navigate! conn navigation-collection)))

(defn get-modal-content
  [conn]
  (let [content (ds/q '[:find ?e ?content
                           :where [?e :modal/content ?content]]
                      @conn)]
    (when (not-empty content)
      (ds/pull @conn '[*]
               (ffirst content)))))

(defn set-modal-content
  [conn content]
  (println "setting modal content to" content)
  (let [modal-content-id (:db/id (get-modal-content conn))]
    (ds/transact! conn [(if modal-content-id
                          {:db/id modal-content-id
                           :modal/content content}
                          {:modal/content content})])))

(defn clear-modal-content
  [conn]
  (ds/transact! conn [[:db.fn/retractEntity (:db/id (get-modal-content conn))]]))
