(ns data.actions
  (:require [datascript.core :as ds]))

(def example-actions
  [{:action/title "Physical Health Check"
    :action/description ""
    :action/skill ""
    :action/ability ""
    :action/resources []
    :action/dice-mod 0
    :action/flat-mod 0
    :action/splinters 1
    :action/combinations ""
    :action/target-number 0}

   {:action/title "Spiritual Health Check"
    :action/description ""
    :action/skill ""
    :action/ability ""
    :action/resources []
    :action/dice-mod 0
    :action/flat-mod 0
    :action/splinters 1
    :action/combinations ""
    :action/target-number 0}

   {:action/title "Mental Health Check"
    :action/description ""
    :action/skill ""
    :action/ability ""
    :action/resources []
    :action/dice-mod 0
    :action/flat-mod 0
    :action/splinters 1
    :action/combinations ""
    :action/target-number 0}

   {:action/title "Social Health Check"
    :action/description ""
    :action/skill ""
    :action/ability ""
    :action/resources []
    :action/dice-mod 2
    :action/flat-mod 1
    :action/splinters 2
    :action/combinations [1 1]
    :action/target-number 0}

   ])

(defn get-all-actions [db]
  (let [action-eids (map first (ds/q '[:find ?eid
                                       :where [?eid :action/title]]
                                     db))]
    (ds/pull-many db '[*] action-eids)))

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
        _ (println splintered-quantities)
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

(defn derive-roll-value [db
                         creature-id
                         {:keys [:action/ability :action/skill
                                 :action/dice-mod :action/flat-mod
                                 :action/resources
                                 :action/splinters
                                 :action/combinations]}]
  (let [[skill-value ability-value] [(inc (rand-int 3)) (* 2 (inc (rand-int 5)))]
        [resource-dice-mod resource-flat-mod] [(rand-int 3) (rand-int 4)]
        base-dice-quantity (+ skill-value dice-mod resource-dice-mod)
        base-dice-size ability-value
        base-dice-mod (+ flat-mod resource-flat-mod)
        splintered-quantities (divide-evenly base-dice-quantity splinters)
        splintered-mods (divide-evenly base-dice-mod splinters)
        _ (println splintered-quantities)
        dice-pools (map vector splintered-quantities (repeat base-dice-size) splintered-mods)
        combined-dice-pools (map apply-combinations dice-pools combinations)]
    (interpose " | "(map format-dice-pool combined-dice-pools))))
