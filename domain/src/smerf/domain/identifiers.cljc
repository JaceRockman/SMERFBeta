(ns smerf.domain.identifiers
  (:require [clojure.string :as str]))

(def canonical-uuid-pattern
  #"^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$")

(defn canonical-uuid?
  "True only for lowercase, hyphenated RFC 4122 UUID strings."
  [value]
  (and (string? value)
       (boolean (re-matches canonical-uuid-pattern value))))

(defn canonical-uuid
  "Normalizes a UUID string and rejects malformed values."
  [value]
  (let [normalized (some-> value str str/lower-case)]
    (if (canonical-uuid? normalized)
      normalized
      (throw (ex-info "Identifier is not a canonical UUID"
                      {:error/type :validation/invalid-identifier
                       :error/value value})))))

(defn correlation-id?
  "True when value can identify one client operation."
  [value]
  (canonical-uuid? value))
