(ns smerf.domain.tracing)

(defn stage
  [name duration-micros]
  {:stage/name name
   :stage/duration-micros (max 0 duration-micros)})

(defn append-stage
  [message name duration-micros]
  (update message :trace/stages (fnil conj []) (stage name duration-micros)))

(defn stage-names
  [message]
  (mapv :stage/name (:trace/stages message)))
