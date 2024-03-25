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
