(ns smerf.domain.codec
  (:require [clojure.string :as str]
            #?(:cljd ["dart:convert" :as convert]
               :clj [clojure.data.json :as json])))

(declare to-wire from-wire)

(defn- ordered
  [values]
  (sort-by pr-str values))

(defn- finite-number?
  [value]
  #?(:clj (not (or (Double/isNaN (double value))
                   (Double/isInfinite (double value))))
     :cljd (and (not (NaN? value))
                (not (infinite? value)))))

(defn- supported-number?
  [value]
  (or (integer? value)
      (and (float? value)
           (finite-number? value))))

(defn- malformed-value
  [message details]
  (throw (ex-info message
                  (merge {:error/type :codec/malformed-value}
                         details))))

(defn- sequence-value?
  [value]
  (and (some? value)
       (seqable? value)
       (not (map? value))
       (not (string? value))))

(defn- required-items
  [value field]
  (let [items (get value field)]
    (if (sequence-value? items)
      items
      (malformed-value
       (str "Tagged value requires a sequence in " field)
       {:error/field field
        :error/value value}))))

(defn- required-entries
  [value]
  (let [entries (required-items value "entries")]
    (if (every? #(and (sequence-value? %)
                      (= 2 (count %)))
                entries)
      entries
      (malformed-value
       "Tagged map entries must be key/value pairs"
       {:error/field "entries"
        :error/value value}))))

(defn to-wire
  "Converts portable contract data to the tagged JSON value model."
  [value]
  (cond
    (nil? value) nil
    (or (string? value) (boolean? value)) value
    (number? value)
    (if (supported-number? value)
      value
      (throw (ex-info "Codec only supports finite integers and doubles"
                      {:error/type (if (float? value)
                                     :codec/non-finite-number
                                     :codec/unsupported-number)
                       :error/value value})))
    (keyword? value) {"$type" "keyword" "value" (str value)}
    (map? value) {"$type" "map"
                  "entries" (mapv (fn [[key entry-value]]
                                    [(to-wire key) (to-wire entry-value)])
                                  (ordered value))}
    (vector? value) {"$type" "vector" "items" (mapv to-wire value)}
    (set? value) {"$type" "set" "items" (mapv to-wire (ordered value))}
    (list? value) {"$type" "list" "items" (mapv to-wire value)}
    :else (throw (ex-info "Value is not supported by codec"
                          {:error/type :codec/unsupported-value
                           :error/value value}))))

(defn from-wire
  "Restores tagged JSON values and rejects unknown tags."
  [value]
  (let [tag (get value "$type" ::untagged)]
    (if (= ::untagged tag)
      value
      (case tag
        "keyword" (let [encoded (get value "value")]
                    (if (and (string? encoded) (str/starts-with? encoded ":"))
                      (keyword (subs encoded 1))
                      (throw (ex-info "Malformed encoded keyword"
                                      {:error/type :codec/malformed-value}))))
        "map" (into {} (map (fn [[key entry-value]]
                              [(from-wire key) (from-wire entry-value)])
                            (required-entries value)))
        "vector" (mapv from-wire (required-items value "items"))
        "set" (set (map from-wire (required-items value "items")))
        "list" (apply list (map from-wire (required-items value "items")))
        (throw (ex-info "Unknown codec tag"
                        {:error/type :codec/unknown-tag
                         :error/tag tag}))))))

(defn encode
  [value]
  (let [document {"payload" (to-wire value)}]
    #?(:cljd (convert/jsonEncode document)
       :clj (json/write-str document :escape-slash false))))

(defn decode
  [encoded]
  (let [document #?(:cljd (convert/jsonDecode encoded)
                    :clj (json/read-str encoded))]
    (from-wire (get document "payload"))))
