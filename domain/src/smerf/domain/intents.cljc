(ns smerf.domain.intents
  (:require [smerf.domain.identifiers :as identifiers]))

(def mvp-intent-types
  #{:character/create
    :character/update-notes
    :character/update-wounds
    :character/roll})

(defn supported-intent-type?
  [intent-type]
  (contains? mvp-intent-types intent-type))

(defn ui-intent
  [intent-type payload]
  {:intent/type intent-type
   :intent/payload payload})

(def intent-payload-keys
  {:character/create #{:character/campaign-id
                       :character/name
                       :character/ruleset-id}
   :character/update-notes #{:character/id
                             :character/notes}
   :character/update-wounds #{:character/id
                              :character/wounds}
   :character/roll #{:character/id
                     :action/id}})

(defn- canonical-id?
  [value]
  (identifiers/canonical-uuid? value))

(defn- exact-keys?
  [payload required]
  (= (set (keys payload)) required))

(defn- valid-payload?
  [intent-type payload]
  (and (map? payload)
       (exact-keys? payload (get intent-payload-keys intent-type))
       (case intent-type
         :character/create
         (and (canonical-id? (:character/campaign-id payload))
              (string? (:character/name payload))
              (canonical-id? (:character/ruleset-id payload)))

         :character/update-notes
         (and (canonical-id? (:character/id payload))
              (string? (:character/notes payload)))

         :character/update-wounds
         (and (canonical-id? (:character/id payload))
              (integer? (:character/wounds payload))
              (not (neg? (:character/wounds payload))))

         :character/roll
         (and (canonical-id? (:character/id payload))
              (canonical-id? (:action/id payload)))

         false)))

(defn intent-envelope
  [intent correlation-id]
  (when-not (identifiers/correlation-id? correlation-id)
    (throw (ex-info "Request requires a canonical correlation ID"
                    {:error/type :validation/invalid-correlation
                     :error/value correlation-id})))
  {:envelope/intent intent
   :correlation/id correlation-id})

(defn valid-intent?
  [intent]
  (and (map? intent)
       (supported-intent-type? (:intent/type intent))
       (valid-payload? (:intent/type intent)
                       (:intent/payload intent))))

(defn valid-envelope?
  [envelope]
  (and (map? envelope)
       (valid-intent? (:envelope/intent envelope))
       (identifiers/correlation-id? (:correlation/id envelope))))
