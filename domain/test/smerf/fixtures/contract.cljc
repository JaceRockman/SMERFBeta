(ns smerf.fixtures.contract
  (:require [smerf.domain.intents :as intents]
            [smerf.domain.responses :as responses]
            [smerf.domain.sync :as sync]))

(def correlation-id
  "22222222-2222-4222-8222-222222222222")

(def campaign-id
  "aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa")

(def character-id
  "bbbbbbbb-bbbb-4bbb-8bbb-bbbbbbbbbbbb")

(def ruleset-id
  "cccccccc-cccc-4ccc-8ccc-cccccccccccc")

(def action-id
  "dddddddd-dddd-4ddd-8ddd-dddddddddddd")

(def envelope
  (intents/intent-envelope
   (intents/ui-intent
    :character/update-notes
    {:character/id character-id
     :character/notes "Aria's notes"})
   correlation-id))

(def campaign-facts
  [(sync/scalar-fact
    :add
    :entity/campaign
    campaign-id
    :campaign/name
    "Example Campaign")
   (sync/reference-fact
    :add
    :entity/character
    character-id
    :character/campaign
    campaign-id)
   (sync/reference-fact
    :add
    :entity/character
    character-id
    :character/ruleset
    ruleset-id)])

(def character-update-additions
  [(sync/scalar-fact
    :add
    :entity/character
    character-id
    :character/wounds
    1)])

(def character-update-retractions
  [(sync/scalar-fact
    :retract
    :entity/character
    character-id
    :character/wounds
    0)])

(def snapshot
  (sync/snapshot 10 campaign-facts))

(def delta
  (sync/delta
   10
   11
   character-update-additions
   character-update-retractions))

(def intents
  [(intents/ui-intent
    :character/create
    {:character/campaign-id campaign-id
     :character/name "Aria"
     :character/ruleset-id ruleset-id})
   (intents/ui-intent
    :character/update-notes
    {:character/id character-id
     :character/notes "Aria's notes"})
   (intents/ui-intent
    :character/update-wounds
    {:character/id character-id
     :character/wounds 1})
   (intents/ui-intent
    :character/roll
    {:character/id character-id
     :action/id action-id})])

(def roll-result
  (responses/roll-result action-id [4 2] 6 :success))

(def accepted-result
  (responses/accepted envelope roll-result))

(def rejected-result
  (responses/rejected
   envelope
   (responses/structured-error
    :validation/invalid-request
    "The request is invalid.")))

(def representative-values
  {:fixture/id "aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa"
   :fixture/keyword :campaign/member
   :fixture/nil nil
   :fixture/boolean true
   :fixture/integer 42
   :fixture/decimal 12.5
   :fixture/vector [:one 2 nil]
   :fixture/list '(:alpha :beta)
   :fixture/set #{:reader :author}})
