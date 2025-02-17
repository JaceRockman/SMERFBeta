(ns entities.actions.data.core
  (:require [datascript.core :as ds]
            ["react-native" :as rn]
            ["@expo/vector-icons" :refer [MaterialCommunityIcons]]
            [entities.campaigns.data.interface :as campaign-data]
            [entities.rulesets.data.interface :as rulesets-data]
            [organisms.library :as components]))

(def example-actions
  [{:title "Physical Health Check"
    :entity-type "action"
    :action/description ""
    :action/skill-domain 13
    :action/skill "Endurance"
    :action/ability-domain 13
    :action/ability "resilience-value"
    :action/resources []
    :action/dice-penalty 0
    :action/dice-bonus 0
    :action/flat-penalty 0
    :action/flat-bonus 0
    :action/splinters 1
    :action/combinations [0]
    :action/target-number 0}

   {:title "Spiritual Health Check"
    :entity-type "action"
    :action/description ""
    :action/skill-domain 14
    :action/skill "Perseverance"
    :action/ability-domain 14
    :action/ability "resilience-value"
    :action/resources []
    :action/dice-penalty 0
    :action/dice-bonus 0
    :action/flat-penalty 0
    :action/flat-bonus 0
    :action/splinters 1
    :action/combinations [0]
    :action/target-number 0}

   {:title "Mental Health Check"
    :entity-type "action"
    :action/description ""
    :action/skill-domain 15
    :action/skill "Comprehension"
    :action/ability-domain 15
    :action/ability "resilience-value"
    :action/resources []
    :action/dice-penalty 0
    :action/dice-bonus 0
    :action/flat-penalty 0
    :action/flat-bonus 0
    :action/splinters 1
    :action/combinations [0]
    :action/target-number 0}

   {:title "Social Health Check"
    :entity-type "action"
    :action/description ""
    :action/skill-domain 16
    :action/skill "Connections"
    :action/ability-domain 16
    :action/ability "resilience-value"
    :action/resources []
    :action/dice-penalty 0
    :action/dice-bonus 0
    :action/flat-penalty 0
    :action/flat-bonus 0
    :action/splinters 1
    :action/combinations [0]
    :action/target-number 0}])

(defn get-all-actions [conn]
  (let [action-eids (map first (ds/q '[:find ?eid
                                       :where [?eid :action/skill]]
                                     @conn))]
    (ds/pull-many @conn '[*] action-eids)))

(defn get-action-data
  [conn action-id]
  (ds/pull @conn '[*] action-id))

(declare get-calculated-action-pool-info)

(defn get-splinters
  [conn action-id]
  (ffirst (ds/q '[:find ?splinters
                  :in $ ?action-id
                  :where [?action-id :action/splinters ?splinters]]
                @conn action-id)))

(defn reset-combinations
  [conn action-id]
  (let [splinters (get-splinters conn action-id)]
    (ds/transact! conn [{:db/id action-id
                          :action/combinations (vec (repeat splinters 0))}])))

(defn reset-splinters
  [conn action-id]
  (ds/transact! conn [{:db/id            action-id
                       :action/splinters 1}]))


(defn get-selected-skill
  [conn action-id]
  (ffirst
   (ds/q '[:find ?skill
           :in $ ?action-id
           :where [?action-id :action/skill ?skill]]
         @conn action-id)))

(defn set-selected-skill
  [conn action-id skill]
  (reset-splinters conn action-id)
  (reset-combinations conn action-id)
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
  (reset-splinters conn action-id)
  (reset-combinations conn action-id)
  (ds/transact! conn [{:db/id action-id
                       :action/ability ability}]))

(defn get-selected-skill-domain
  [conn action-id]
  (ffirst
   (ds/q '[:find ?domain
           :in $ ?action-id
           :where [?action-id :action/skill-domain ?domain]]
         @conn action-id)))

(defn set-selected-skill-domain
  [conn action-id domain-id]
  (reset-splinters conn action-id)
  (reset-combinations conn action-id)
  (ds/transact! conn [{:db/id action-id
                       :action/skill-domain domain-id}]))

(defn get-selected-ability-domain
  [conn action-id]
  (ffirst
   (ds/q '[:find ?domain
           :in $ ?action-id
           :where [?action-id :action/ability-domain ?domain]]
         @conn action-id)))

(defn set-selected-ability-domain
  [conn action-id domain-id]
  (reset-splinters conn action-id)
  (reset-combinations conn action-id)
  (ds/transact! conn [{:db/id action-id
                       :action/ability-domain domain-id}]))

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
      (do (reset-splinters conn action-id)
          (reset-combinations conn action-id)
          (ds/transact! conn [[:db/retract action-id
                               :action/resources resource-id]]))
      (do (reset-splinters conn action-id)
          (reset-combinations conn action-id)
          (ds/transact! conn [{:db/id action-id
                               :action/resources (cons resource-id selected-resources)}])))))

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
      (reset-splinters conn action-id)
      (reset-combinations conn action-id)
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
      (reset-splinters conn action-id)
      (reset-combinations conn action-id)
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
      (reset-splinters conn action-id)
      (reset-combinations conn action-id)
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
      (reset-splinters conn action-id)
      (reset-combinations conn action-id)
      (ds/transact! conn [{:db/id             action-id
                           :action/flat-bonus updated-flat-bonus}]))))

(defn get-flat-modifier
  [conn action-id]
  (let [penalties (get-flat-penalties conn action-id)
        bonuses (get-flat-bonuses conn action-id)]
    (- bonuses penalties)))

(defn update-splinters
  [conn action-id update-fn]
  (let [current-splinters (get-splinters conn action-id)
        updated-splinters (update-fn current-splinters)
        max-splinters     (:quality (get-calculated-action-pool-info conn action-id))]
    (when (<= 1 updated-splinters max-splinters)
      (ds/transact! conn [{:db/id            action-id
                           :action/splinters updated-splinters}])
      (reset-combinations conn action-id))))

(defn update-combinations
  [conn action-id index update-fn]
  (let [current-combinations (vec (ffirst (ds/q '[:find ?combinations
                                                  :in $ ?action-id
                                                  :where [?action-id :action/combinations ?combinations]]
                                                @conn action-id)))
        dice-pool-to-update (-> (get-calculated-action-pool-info conn action-id)
                                :dice-pools
                                vec
                                (get index))
        min-combination (* -1 (first dice-pool-to-update))
        max-combination (/ (first dice-pool-to-update) 2)
        updated-combination (update-fn (get current-combinations index))]
    (when (<= min-combination updated-combination max-combination)
      (ds/transact! conn [{:db/id action-id
                           :action/combinations (assoc current-combinations index updated-combination)}]))))



(defn divide-evenly [n m]
  (let [q (quot n m)
        r (rem n m)]
    (concat (repeat (- m r) q)
            (repeat r (inc q)))))

(defn apply-combination [[dice-quantity dice-size dice-mod] combination]
  (if (or (nil? combination)
          (= 0 combination)
          (< dice-quantity (* -1 combination))
          (< (quot dice-quantity 2) combination))
    [[dice-quantity dice-size dice-mod]]
    (if (< 0 combination)
      (let [new-quantities [(- dice-quantity (* 2 combination)) combination]
            new-dice-sizes [dice-size (+ dice-size 2)]
            new-mods [0 dice-mod]]
        (remove nil?
                (map (fn [qty size mod]
                       (when (< 0 qty) (vector qty size mod)))
                     new-quantities new-dice-sizes new-mods)))
      (let [number-of-splits (* -1 combination)
            new-quantities [(- dice-quantity number-of-splits) (* 2 number-of-splits)]
            new-dice-sizes [dice-size (- dice-size 2)]
            new-mods [0 dice-mod]]
        (remove nil?
                (map (fn [qty size mod]
                       (when (< 0 qty) (vector qty size mod)))
                     new-quantities new-dice-sizes new-mods))))))

(defn format-dice-pool-text
  [pool]
  (interpose " + " (map (fn [[quantity size modifier]]
                          (str quantity "d" size
                               (cond
                                 (> 0 modifier) (str " " modifier)
                                 (= 0 modifier) nil
                                 (< 0 modifier) (str " +" modifier)
                                 :else nil)))
                      pool)))

(defn format-dice-pools-text [pools]
  (map format-dice-pool-text pools))

(defn format-dice-pool-icons
  [pool]
  (let [total-modifier (apply + (map last pool))]
    (conj
     (mapv (fn [[quantity size _]]
             [:> rn/View (map (fn [dice-size]
                                [:> MaterialCommunityIcons {:key 5 :name (str "dice-d" dice-size) :size 24 :color (if (> 0 quantity) :black :white)}])
                              (repeat (abs quantity) size))])
           pool)
     (when (not (= 0 total-modifier))
       (components/default-text
        (cond
          (> 0 total-modifier) (str " " total-modifier)
          (< 0 total-modifier) (str " +" total-modifier)
          :else nil)
        {:flex nil})))))

(defn format-dice-pools-icons
  [pools]
  (map format-dice-pool-icons pools))

(defn calc-quantity-and-size
  [quantity size]
  (let [size-level-diff (- (/ size 2) 2)
        quantity-level-diff (- quantity 1)
        total-diff (+ size-level-diff quantity-level-diff)]
    (if (> 0 total-diff)
      [quantity-level-diff 4]
      (let [new-quantity (max quantity 1)
            new-size (if (> 1 quantity) (- size (* 2 (- 1 quantity))) size)]
        [new-quantity new-size]))))

(defn get-calculated-action-pool-info
  [conn action-id]
  (let [{:keys [action/skill-domain action/skill
                action/ability-domain action/ability
                action/resources
                action/splinters
                action/combinations]
         :as   action-data} (get-action-data conn action-id)
        ruleset-stat-granularity (:ruleset/stat-granularity (campaign-data/get-campaign-active-ruleset conn))]
    (when (and (integer? skill-domain) (integer? ability-domain))
      (let [skill-domain-data     (ds/pull @conn '[*] skill-domain)
            ability-domain-data   (ds/pull @conn '[*] ability-domain)
            skill-value           (if (= "domain" ruleset-stat-granularity)
                                    (rulesets-data/get-simple-domain-skill-value conn skill-domain)
                                    (get skill-domain-data (keyword (str "domain/" skill))))
            ability-value         (case ruleset-stat-granularity
                                    "domain" (rulesets-data/get-simple-domain-ability-value conn skill-domain)
                                    "skillbility" (get skill-domain-data (keyword (str "domain/" ability)))
                                    (get ability-domain-data (keyword (str "domain/" ability))))
            resource-dice-mod     (apply + (map :resource/quality-value resources))
            resource-flat-mod     (apply + (map :resource/power-value resources))
            dice-mod              (get-dice-modifier conn action-id)
            flat-mod              (get-flat-modifier conn action-id)
            dice-quantity         (+ skill-value resource-dice-mod dice-mod)
            [base-dice-quantity base-dice-size]
            (calc-quantity-and-size dice-quantity ability-value)
            base-dice-mod         (+ flat-mod resource-flat-mod)
            splintered-quantities (divide-evenly base-dice-quantity splinters)
            splintered-mods       (divide-evenly base-dice-mod splinters)
            dice-pools            (map vector splintered-quantities (repeat base-dice-size) splintered-mods)
            combined-dice-pools   (map apply-combination dice-pools combinations)
            formatted-dice-pools  (apply str (interpose " | " (map #(apply str %) (format-dice-pools-text combined-dice-pools))))
            formatted-dice-pools-icons (format-dice-pools-icons combined-dice-pools)]
        {:stat-quality skill-value
         :stat-power ability-value
         :resource-dice-mod resource-dice-mod
         :resource-flat-mod resource-flat-mod
         :modifier-dice-mod dice-mod
         :modifier-flat-mod flat-mod
         :quality base-dice-quantity
         :power base-dice-size
         :bonus base-dice-mod
         :splinter-sizes splintered-quantities
         :splinter-bonuses splintered-mods
         :dice-pools dice-pools
         :combined-dice-pools combined-dice-pools
         :formatted-dice-pools formatted-dice-pools
         :formatted-dice-pools-icons formatted-dice-pools-icons}))))

(defn get-dice-pools
  [conn action-id]
  (:dice-pools (get-calculated-action-pool-info conn action-id)))

(defn get-combined-dice-pools
  [conn action-id]
  (:combined-dice-pools (get-calculated-action-pool-info conn action-id)))

(defn get-fully-formatted-roll
  [conn action-id]
  (:formatted-dice-pools (get-calculated-action-pool-info conn action-id)))


(defn roll-dice-pool
  [pool]
  (let [rolls (map (fn [[quantity size _]]
                     (let [rolls (take quantity (repeatedly #(inc (rand-int size))))]
                       {:rolls rolls
                        :highest (apply max rolls)}))
                   pool)
        all-rolls (flatten (map :highest rolls))
        bonus (apply max (map last pool))
        final-result (+ (apply max all-rolls) bonus)]
    {:rolls rolls
     :bonus bonus
     :result final-result}))
