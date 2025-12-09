(ns systems.navigation
  (:require
   [clojure.string :as str]
   [datascript.core :as ds]
   [organisms.compounds.search-filter-sort-list :refer [collapse-state
                                                        external-search-text]]
   [organisms.molecules.scroll-position-indicator :refer [creature-horizontal-position
                                                          ruleset-horizontal-position]]))

(defn get-nav-history
  [conn]
  (let [result (ffirst (ds/q '[:find ?history
                               :where [1 :navigator/history ?history]]
                             @conn))]
    result))

(defn get-nav-state
  [conn]
  (when-let [history (get-nav-history conn)]
    (first history)))

(defn get-current-nav-state-title
  [conn]
  (let [{:keys [page query-params]} (get-nav-state conn)]
    (println page query-params)
    (str/capitalize (if (< 0 (count query-params))
                      (ffirst (ds/q '[:find ?title
                                      :in $ ?eid
                                      :where [?eid :title ?title]]
                                    @conn (int (first query-params))))
                      (name page)))))

(defn reset-temp-state
  []
  (reset! external-search-text {})
  (reset! collapse-state {})
  (reset! ruleset-horizontal-position 0)
  (reset! creature-horizontal-position 0))

(defn navigate!
  [conn {:keys [page query-params] :as nav-state}]
  (reset-temp-state)
  (println "navigating to" nav-state)
  (println (get-nav-history conn))
  (let [history (get-nav-history conn)]
    (when (not (= (:page (first history)) page))
      (ds/transact! conn [[:db/add 1 :navigator/history (vec (cons nav-state history))]]))))

(defn subnavigate!
  [conn nav-state]
  (let [new-nav-state (merge (get-nav-state conn) nav-state)
        history (get-nav-history conn)]
    (ds/transact! conn [[:db/add 1 :navigator/history (vec (cons new-nav-state history))]])))

(defn nav-back
  [conn]
  (when (< 1 (count (get-nav-history conn)))
    (let [history (get-nav-history conn)
          updated-history (rest history)]
      (ds/transact! conn [[:db/add 1 :navigator/history updated-history]]))))

(defn nav-out
  [conn]
  (let [{:keys [page query-params] :as nav-state} (get-nav-state conn)
        outward-nav-state (if (or (nil? query-params) (empty? query-params))
                            {:page :campaigns}
                            (update nav-state :query-params butlast))]
    (navigate! conn outward-nav-state)))

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
