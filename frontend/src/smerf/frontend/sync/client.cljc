(ns smerf.frontend.sync.client
  (:require [smerf.domain.codec :as codec]
            [smerf.frontend.data.sync-applier :as applier]))

(defn client
  "Builds a sync client around a request function returning encoded JSON."
  [request]
  {:sync/snapshot
   (fn []
     (codec/decode (request "/api/sync/snapshot")))
   :sync/delta
   (fn [from-t]
     (codec/decode
      (request (str "/api/sync/delta?from-t=" from-t))))})

(defn apply-response!
  [database response]
  (case (:sync/type response)
    :snapshot (applier/apply-snapshot! database response)
    :delta (applier/apply-delta! database response)
    :resync-required
    (throw (ex-info "The server requires a fresh synchronization snapshot"
                    {:error/type :sync/resync-required
                     :sync/response response}))
    (throw (ex-info "Unknown synchronization response"
                    {:error/type :sync/invalid-response
                     :sync/response response}))))

(defn poll!
  "Fetch and apply one synchronization package.

  Call this at startup and after accepted commands; a UI lifecycle timer can
  call the same function while the application is active."
  [database sync-client]
  (let [response (if (zero? (applier/cursor database))
                   ((:sync/snapshot sync-client))
                   ((:sync/delta sync-client)
                    (applier/cursor database)))]
    (if (= :resync-required (:sync/type response))
      (let [snapshot ((:sync/snapshot sync-client))]
        (applier/apply-snapshot! database snapshot)
        snapshot)
      (do
        (apply-response! database response)
        response))))
