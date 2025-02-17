(ns entities.creatures.data.core
  (:require [clojure.string :as str]
            [datascript.core :as ds]
            [systems.navigation :as navigation]
            [entities.campaigns.data.interface :as campaign-data]
            [entities.rulesets.data.interface :as domains]))

(defn get-all-creature-ids
  [conn]
  (map first (ds/q '[:find ?e
                     :where [?e :entity-type "creature"]]
                   @conn)))

(defn get-all-creatures
  [conn]
  (when-let [realm-ids (get-all-creature-ids conn)]
    (ds/pull-many @conn '[*] realm-ids)))

(defn get-active-creature-id
  [conn]
  (let [nav-state (navigation/get-main-nav-state-list conn)]
    (when (and (= "creatures" (first nav-state))
               (< 1 (count nav-state)))
      (int (second nav-state)))))

(defn get-active-creature
  [conn]
  (when-let [active-creature-id (get-active-creature-id conn)]
    (ds/pull @conn '[*] active-creature-id)))

(defn get-active-creature-tracker
  [conn]
  (ffirst (ds/q '[:find ?e
                  :where [?e :active/creature]]
                @conn)))

(defn set-active-creature
  [conn creature-id]
  (if-let [active-creature-tracker (get-active-creature-tracker conn)]
    (ds/transact! conn [{:db/id active-creature-tracker
                         :active/creature creature-id}])
    (ds/transact! conn [{:active/creature creature-id}]))
  (navigation/subnavigate conn creature-id))


(def creature-races [{:db/ident :race/elf
                      :race/title "Elf"}
                     {:db/ident :race/human
                      :race/title "Human"}
                     {:db/ident :race/dwarf
                      :race/title "Dwarf"}])

(defn get-creature-races
  [conn creature-data]
  (map :race/title (ds/pull-many @conn '[:race/title] (:creature/races creature-data))))

(defn get-creature-domains
  [conn creature-data]
  (ds/pull-many @conn '[*] (:creature/domains creature-data)))

(defn get-domain-damage
  [conn domain-id wound-type]
  (ffirst (ds/q '[:find ?wound-quantity
                  :in $ ?id ?key
                  :where [?id ?key ?wound-quantity]]
                @conn domain-id wound-type)))

(defn unshown-severity?
  [wound-tiers wound-severity]
  (case wound-tiers
    3 false
    2 (= (str/lower-case wound-severity) "major")
    1 (not (= (str/lower-case wound-severity) "minor"))))

(defn rebalance-wounds
  [conn domain-id {:strs [minor moderate major]}]
  (let [wound-tiers (:ruleset/wound-tiers (campaign-data/get-campaign-active-ruleset conn))]
    (case wound-tiers
      3 nil
      2 (when (< 0 major)
          (ds/transact! conn [{:db/id domain-id
                               :domain/major-wounds (dec major)}])
          (ds/transact! conn [{:db/id domain-id
                               :domain/moderate-wounds (inc moderate)}])
          (ds/transact! conn [{:db/id domain-id
                               :domain/minor-wounds (inc minor)}]))
      1 (if (< 0 major)
          (do (ds/transact! conn [{:db/id domain-id
                                   :domain/major-wounds (dec major)}])
              (ds/transact! conn [{:db/id domain-id
                                   :domain/moderate-wounds (inc moderate)}])
              (ds/transact! conn [{:db/id domain-id
                                   :domain/minor-wounds (inc minor)}]))
          (when (< 0 moderate)
            (ds/transact! conn [{:db/id domain-id
                                 :domain/moderate-wounds (dec moderate)}])
            (ds/transact! conn [{:db/id domain-id
                                 :domain/minor-wounds (inc (inc minor))}]))))))

(defn get-wound-values
  [conn domain-id]
  {"minor" (get-domain-damage conn domain-id :domain/minor-wounds)
   "moderate" (get-domain-damage conn domain-id :domain/moderate-wounds)
   "major" (get-domain-damage conn domain-id :domain/major-wounds)})

(defn update-wound-value
  [conn domain-id wound-severity update-fn]
  (let [wound-type-keyword (keyword (str "domain/" (str/lower-case wound-severity) "-wounds"))
        wound-values (get-wound-values conn domain-id)
        new-wound-value (update-fn (get wound-values (str/lower-case wound-severity)))]
    (if (<= 0 new-wound-value)
      (ds/transact! conn [{:db/id domain-id
                           wound-type-keyword new-wound-value}])
      (rebalance-wounds conn domain-id (assoc wound-values (str/lower-case wound-severity) new-wound-value)))))

(defn get-creature-domain-damage
  [conn domain-id wound-severity]
  (let [wound-tiers (:ruleset/wound-tiers (campaign-data/get-campaign-active-ruleset conn))
        wound-values (get-wound-values conn domain-id)
        wound-value (get wound-values wound-severity)]
    (case wound-tiers
      3 wound-value
      2 (+ wound-value (get wound-values "major"))
      1 (+ wound-value (* 3 (get wound-values "major")) (* 2 (get wound-values "moderate"))))))

(defn get-creature-domain-damage-total
  [conn domain-id]
  (+ (get-domain-damage conn domain-id :domain/minor-wounds)
     (* 2 (get-domain-damage conn domain-id :domain/moderate-wounds))
     (* 3 (get-domain-damage conn domain-id :domain/major-wounds))))

(defn get-creature-resources
  [conn creature-id]
  (map first
       (ds/q '[:find ?resources
               :in $ ?creature-id
               :where [?creature-id :creature/resources ?resources]]
             @conn creature-id)))

(defn get-creature-resources-from-data
  [conn creature-data]
  (ds/pull-many @conn '[*] (:creature/resources creature-data)))

(defn get-creature-resource-resources
  [conn creature-data]
  (let [creature-resources (get-creature-resources-from-data conn creature-data)]
    (map :creature-resource/resource creature-resources)))

(defn get-creature-actions
  [conn creature-id]
  (ds/q '[:find ?actions
          :in $ ?creature-id
          :where [?creature-id :creature/actions ?actions]]
        @conn creature-id))

(defn example-creatures
  [default-domain-entities example-resources default-actions]
  [{:creature/domains default-domain-entities
    :title "Aleksander"
    :entity-type "creature"
    :creature/portrait "https://i.pinimg.com/originals/d8/30/bc/d830bc587482ed8af3639903c5d406b4.png"
    :creature/gender "Male"
    :creature/race [:race/elf :race/human]
    :creature/description "Aleksander is a really cool dude."
    :creature/experience 0
    :creature/damage []
    :creature/resources example-resources
    :creature/actions default-actions
    :creature/notes "Notes about Aleksander"
    :creature/rolls []}
   {:creature/domains default-domain-entities
    :title "Eilonwey"
    :entity-type "creature"
    :creature/gender "Female"
    :creature/race [:race/elf]
    :creature/description "Eilonwey is a badass."
    :creature/experience 0
    :creature/damage []
    :creature/resources example-resources
    :creature/actions default-actions
    :creature/notes "Notes about Eilonwey"
    :creature/rolls []}
   {:creature/domains default-domain-entities
    :entity-type "creature"
    :title "Durflag"
    :creature/race [:race/dwarf]
    :creature/description "Durflag is a badass as well."
    :creature/experience 0
    :creature/damage []
    :creature/resources example-resources
    :creature/actions default-actions
    :creature/notes "Notes about Durflag"
    :creature/rolls []}])

(defn new-creature-defaults
  "A transaction schema for a new creature"
  []
  {:creature/id #?(:clj (java.util.UUID/randomUUID) :cljs (random-uuid))
   :creature/domains "Domains"})



(defn creature-eid-by-name
  [conn creature-name]
  (ffirst (ds/q '[:find ?e
                  :in $ ?creature-name
                  :where [?e :creature/name ?creature-name]]
                @conn creature-name)))

(defn creature-info
  [conn creature-name]
  (ds/pull @conn '[*] (creature-eid-by-name conn creature-name)))

(defn creature-domains
  [conn creature-data]
  (let [conn* (ds/conn-from-datoms (into #{} (map (fn [[k v]] (ds/datom 1 k v)) creature-data)))
        creature-domains (ffirst (ds/q '[:find ?domains
                                              :where [_ :creature/domains ?domains]]
                                            @conn*))
        domains-data (ds/pull @conn '[*] (first creature-domains))]
    domains-data))

(defn all-creatures
  [conn]
  (ds/q '[:find ?e
          :where [?e :creature/name]]
        @conn))

(defn get-creature-by-id
  [conn creature-id]
  (ds/pull @conn '[*] creature-id))

;; Pull Patterns
;; Pull patterns define the structure of the data to be returned given an entity id

(def pull-full-creature
  ['* :creature/race {:creature/domains [:domain/name]}])

(def pull-creature-name
  [:creature/name])


;; Queries
;; Queries retrieve entity ids, attributes, values, and times from the database

(defn get-creature-by-name
  "Returns creature information for all creature's with a given name

  Arguments:
   - db connection
   - Pull Pattern for a creature entity
   - A String that matches on the :creature/name value
  Returns:
   - creature entity data structured with the given pull pattern"
  [q conn pattern creature-name]
  (map first
       (q '{:find [(pull ?eid pattern)]
              :in [$ pattern ?creature-name]
              :where [[?eid :creature/name ?creature-name]]}
            @conn
            pattern
            creature-name)))
