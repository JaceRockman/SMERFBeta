(ns smerf.domain.intents
  (:require [smerf.domain.identifiers :as identifiers]))

(def protocol-version 1)
(def tracer-intent-type :system/tracer)

(defn ui-intent
  [intent-type payload]
  {:intent/type intent-type
   :intent/version protocol-version
   :intent/payload payload})

(defn tracer-intent
  [message]
  (ui-intent tracer-intent-type {:tracer/message message}))

(defn intent-envelope
  [intent correlation]
  (when-not (identifiers/correlation-metadata? correlation)
    (throw (ex-info "Envelope requires canonical correlation identifiers"
                    {:error/type :validation/invalid-correlation
                     :error/value correlation})))
  {:envelope/version protocol-version
   :envelope/intent intent
   :command/id (:command/id correlation)
   :correlation/id (:correlation/id correlation)
   :causation/id (:causation/id correlation)
   :trace/stages []})

(defn valid-tracer-intent?
  [intent]
  (and (= tracer-intent-type (:intent/type intent))
       (= protocol-version (:intent/version intent))
       (string? (get-in intent [:intent/payload :tracer/message]))))

(defn valid-envelope?
  [envelope]
  (and (= protocol-version (:envelope/version envelope))
       (valid-tracer-intent? (:envelope/intent envelope))
       (identifiers/correlation-metadata? envelope)
       (vector? (:trace/stages envelope))))
