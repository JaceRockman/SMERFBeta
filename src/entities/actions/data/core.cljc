(ns entities.actions.data.core
  (:require [datascript.core :as ds]))

(def example-actions
  [{:title "Physical Health Check"
    :entity-type "action"
    :action/description ""
    :action/domain ""
    :action/skill "Endurance"
    :action/ability ""
    :action/resources []
    :action/dice-penalty 0
    :action/dice-bonus 0
    :action/flat-penalty 0
    :action/flat-bonus 0
    :action/splinters 1
    :action/combinations ""
    :action/target-number 0}

   {:title "Spiritual Health Check"
    :entity-type "action"
    :action/description ""
    :action/domain ""
    :action/skill "Perseverance"
    :action/ability ""
    :action/resources []
    :action/dice-penalty 0
    :action/dice-bonus 0
    :action/flat-penalty 0
    :action/flat-bonus 0
    :action/splinters 1
    :action/combinations ""
    :action/target-number 0}

   {:title "Mental Health Check"
    :entity-type "action"
    :action/description ""
    :action/domain ""
    :action/skill "Comprehension"
    :action/ability ""
    :action/resources []
    :action/dice-penalty 0
    :action/dice-bonus 0
    :action/flat-penalty 0
    :action/flat-bonus 0
    :action/splinters 1
    :action/combinations ""
    :action/target-number 0}

   {:title "Social Health Check"
    :entity-type "action"
    :action/description ""
    :action/domain ""
    :action/skill "Connections"
    :action/ability ""
    :action/resources []
    :action/dice-penalty 0
    :action/dice-bonus 0
    :action/flat-penalty 0
    :action/flat-bonus 0
    :action/splinters 2
    :action/combinations [1 1]
    :action/target-number 0}

   {:title "Other Health Check"
    :entity-type "action"
    :action/description ""
    :action/domain ""
    :action/skill "Endurance"
    :action/ability ""
    :action/resources []
    :action/dice-penalty 0
    :action/dice-bonus 0
    :action/flat-penalty 0
    :action/flat-bonus 0
    :action/splinters 1
    :action/combinations ""
    :action/target-number 0}

   {:title "My Health Check"
    :entity-type "action"
    :action/description ""
    :action/domain ""
    :action/skill "Perseverance"
    :action/ability ""
    :action/resources []
    :action/dice-penalty 0
    :action/dice-bonus 0
    :action/flat-penalty 0
    :action/flat-bonus 0
    :action/splinters 1
    :action/combinations ""
    :action/target-number 0}

   {:title "New Health Check"
    :entity-type "action"
    :action/description ""
    :action/domain ""
    :action/skill "Comprehension"
    :action/ability ""
    :action/resources []
    :action/dice-penalty 0
    :action/dice-bonus 0
    :action/flat-penalty 0
    :action/flat-bonus 0
    :action/splinters 1
    :action/combinations ""
    :action/target-number 0}

   {:title "The Health Check"
    :entity-type "action"
    :action/description ""
    :action/domain ""
    :action/skill "Connections"
    :action/ability ""
    :action/resources []
    :action/dice-penalty 0
    :action/dice-bonus 0
    :action/flat-penalty 0
    :action/flat-bonus 0
    :action/splinters 2
    :action/combinations [1 1]
    :action/target-number 0}

   {:title "Ok Health Check"
    :entity-type "action"
    :action/description ""
    :action/domain ""
    :action/skill "Endurance"
    :action/ability ""
    :action/resources []
    :action/dice-penalty 0
    :action/dice-bonus 0
    :action/flat-penalty 0
    :action/flat-bonus 0
    :action/splinters 1
    :action/combinations ""
    :action/target-number 0}

   {:title "Great Health Check"
    :entity-type "action"
    :action/description ""
    :action/domain ""
    :action/skill "Perseverance"
    :action/ability ""
    :action/resources []
    :action/dice-penalty 0
    :action/dice-bonus 0
    :action/flat-penalty 0
    :action/flat-bonus 0
    :action/splinters 1
    :action/combinations ""
    :action/target-number 0}

   {:title "Best Health Check"
    :entity-type "action"
    :action/description ""
    :action/domain ""
    :action/skill "Comprehension"
    :action/ability ""
    :action/resources []
    :action/dice-penalty 0
    :action/dice-bonus 0
    :action/flat-penalty 0
    :action/flat-bonus 0
    :action/splinters 1
    :action/combinations ""
    :action/target-number 0}

   {:title "Not a Health Check"
    :entity-type "action"
    :action/description ""
    :action/domain ""
    :action/skill "Connections"
    :action/ability ""
    :action/resources []
    :action/dice-penalty 0
    :action/dice-bonus 0
    :action/flat-penalty 0
    :action/flat-bonus 0
    :action/splinters 2
    :action/combinations [1 1]
    :action/target-number 0}])

(defn get-all-actions [conn]
  (let [action-eids (map first (ds/q '[:find ?eid
                                       :where [?eid :action/skill]]
                                     @conn))]
    (ds/pull-many @conn '[*] action-eids)))

(defn get-selected-skill
  [conn action-id]
  (ffirst
   (ds/q '[:find ?skill
           :in $ ?action-id
           :where [?action-id :action/skill ?skill]]
         @conn action-id)))

(defn set-selected-skill
  [conn action-id skill]
  (ds/transact! conn [{:db/id action-id
                       :action/skill skill}]))

(defn get-selected-ability
  [conn action-id]
  (ffirst
   (ds/q '[:find ?ability
           :in $ ?action-id
           :where [?action-id :action/ability ?ability]]
         @conn action-id)))

(defn set-selected-ability
  [conn action-id ability]
  (ds/transact! conn [{:db/id action-id
                       :action/ability ability}]))

(defn get-selected-domain
  [conn action-id]
  (ffirst
   (ds/q '[:find ?domain
           :in $ ?action-id
           :where [?action-id :action/domain ?domain]]
         @conn action-id)))

(defn set-selected-domain
  [conn action-id domain]
  (ds/transact! conn [{:db/id action-id
                       :action/domain domain}]))

(defn get-selected-resources
  [conn action-id]
  (map first (ds/q '[:find ?resources
                     :in $ ?action-id
                     :where [?action-id :action/resources ?resources]]
                   @conn action-id)))

(defn toggle-resource-selection
  [conn resource-id action-id]
  (let [selected-resources (or (get-selected-resources conn action-id) [])]
    (if (some #(= resource-id %) selected-resources)
      (ds/transact! conn [[:db/retract action-id
                           :action/resources resource-id]])
      (ds/transact! conn [{:db/id action-id
                           :action/resources (cons resource-id selected-resources)}]))))

(defn get-dice-penalties
  [conn action-id]
  (ffirst (ds/q '[:find ?penalties
                  :in $ ?action-id
                  :where [?action-id :action/dice-penalty ?penalties]]
        @conn action-id)))

(defn update-dice-penalties
  [conn action-id update-fn]
  (let [current-dice-penalty (get-dice-penalties conn action-id)
        updated-dice-penalty (update-fn current-dice-penalty)]
    (when (<= 0 updated-dice-penalty)
      (ds/transact! conn [{:db/id action-id
                          :action/dice-penalty updated-dice-penalty}]))))

(defn get-dice-bonuses
  [conn action-id]
  (ffirst (ds/q '[:find ?penalties
                  :in $ ?action-id
                  :where [?action-id :action/dice-bonus ?penalties]]
        @conn action-id)))

(defn update-dice-bonuses
  [conn action-id update-fn]
  (let [current-dice-bonus (get-dice-bonuses conn action-id)
        updated-dice-bonus (update-fn current-dice-bonus)]
    (when (<= 0 updated-dice-bonus)
      (ds/transact! conn [{:db/id action-id
                          :action/dice-bonus updated-dice-bonus}]))))

(defn get-dice-modifier
  [conn action-id]
  (let [penalties (get-dice-penalties conn action-id)
        bonuses (get-dice-bonuses conn action-id)]
    (- bonuses penalties)))

(defn get-flat-penalties
  [conn action-id]
  (ffirst (ds/q '[:find ?penalties
                  :in $ ?action-id
                  :where [?action-id :action/flat-penalty ?penalties]]
        @conn action-id)))

(defn update-flat-penalties
  [conn action-id update-fn]
  (let [current-flat-penalty (get-flat-penalties conn action-id)
        updated-flat-penalty (update-fn current-flat-penalty)]
    (when (<= 0 updated-flat-penalty)
      (ds/transact! conn [{:db/id               action-id
                           :action/flat-penalty updated-flat-penalty}]))))

(defn get-flat-bonuses
  [conn action-id]
  (ffirst (ds/q '[:find ?penalties
                  :in $ ?action-id
                  :where [?action-id :action/flat-bonus ?penalties]]
        @conn action-id)))

(defn update-flat-bonuses
  [conn action-id update-fn]
  (let [current-flat-bonus (get-flat-bonuses conn action-id)
        updated-flat-bonus (update-fn current-flat-bonus)]
    (when (<= 0 updated-flat-bonus)
      (ds/transact! conn [{:db/id             action-id
                           :action/flat-bonus updated-flat-bonus}]))))

(defn get-flat-modifier
  [conn action-id]
  (let [penalties (get-flat-penalties conn action-id)
        bonuses (get-flat-bonuses conn action-id)]
    (- bonuses penalties)))



(defn get-splinters
  [conn action-id]
  (ffirst (ds/q '[:find ?splinters
                  :in $ ?action-id
                  :where [?action-id :action/splinters ?splinters]]
                @conn action-id)))

(defn update-splinters
  [conn action-id update-fn]
  (let [current-splinters  (get-splinters conn action-id)
        updated-flat-bonus (update-fn current-splinters)]
    (when (<= 1 updated-flat-bonus)
      (ds/transact! conn [{:db/id            action-id
                           :action/splinters updated-flat-bonus}]))))

(defn calculate-dice-pools
  [conn action-id]
  )

(defn divide-evenly [n m]
  (let [q (quot n m)
        r (rem n m)]
    (concat (repeat (- m r) q)
            (repeat r (inc q)))))

(defn apply-combinations [[dice-quantity dice-size dice-mod] combinations]
  (let [combining? (< 0 combinations)
        combinations (if combining?
                       (min (quot dice-quantity 2) combinations)
                       (max combinations dice-quantity))]
    (if (or (nil? combinations) (= 0 combinations))
      [[dice-quantity dice-size dice-mod]]
      (let [new-pool-quantity (* combinations (if combining? combinations (* combinations -2)))
            original-pool-quantity (- dice-quantity (* combinations (if combining? 2 -1)))
            new-pool-size (+ dice-size (if combining? 2 -2))]
        (filter #(not (= 0 (first %))) (map vector [original-pool-quantity new-pool-quantity] [dice-size new-pool-size] (divide-evenly dice-mod 2)))))))

(defn format-dice-pool [dice-collections]
  (interpose " + "
             (map (fn [[qty size mod]] (str qty "d" size (cond
                                                           (> 0 mod) (str " " mod)
                                                           (= 0 mod) nil
                                                           (< 0 mod) (str " +" mod))))
                  dice-collections)))

(defn dummy-roll-value []
  (let [[skill-value ability-value] [(inc (rand-int 3)) (* 2 (inc (rand-int 5)))]
        [resource-dice-mod resource-flat-mod] [(rand-int 3) (rand-int 4)]
        base-dice-quantity (+ skill-value (rand-int 2) resource-dice-mod)
        base-dice-size ability-value
        base-dice-mod (+ (rand-int 4) resource-flat-mod)
        splintered-quantities (divide-evenly base-dice-quantity 2)
        splintered-mods (divide-evenly base-dice-mod 2)
        ;; _ (println splintered-quantities)
        dice-pools (map vector splintered-quantities (repeat base-dice-size) splintered-mods)
        combined-dice-pools (map apply-combinations dice-pools [1 2])]
    ;; (println "skill-value" skill-value)
    ;; (println "ability-value" ability-value)
    ;; (println "resource-dice-mod" resource-dice-mod)
    ;; (println "resource-flat-mod" resource-flat-mod)
    ;; (println "base dice quantity" base-dice-quantity)
    ;; (println "base-dice-mod" base-dice-mod)
    ;; (println "splintered quantities" splintered-quantities)
    ;; (println "splintered-mods" splintered-mods)
    ;; (println "dice pools" dice-pools)
    ;; (println "combined-dice-pools" combined-dice-pools)
    (interpose "\n" (map format-dice-pool combined-dice-pools))))

(defn derive-roll-value [conn
                         {:keys [:action/ability :action/skill
                                 :action/dice-mod :action/flat-mod
                                 :action/resources
                                 :action/splinters
                                 :action/combinations]
                          :as action}
                         domains]
  (let [[skill-value ability-value] [(inc (rand-int 3)) (* 2 (inc (rand-int 5)))]
        [resource-dice-mod resource-flat-mod] [(rand-int 3) (rand-int 4)]
        base-dice-quantity (+ skill-value dice-mod resource-dice-mod)
        base-dice-size ability-value
        base-dice-mod (+ flat-mod resource-flat-mod)
        splintered-quantities (divide-evenly base-dice-quantity splinters)
        splintered-mods (divide-evenly base-dice-mod splinters)
        dice-pools (map vector splintered-quantities (repeat base-dice-size) splintered-mods)
        combined-dice-pools (map apply-combinations dice-pools combinations)]
    (interpose " | " (map format-dice-pool combined-dice-pools))))
