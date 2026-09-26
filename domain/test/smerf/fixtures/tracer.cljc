(ns smerf.fixtures.tracer
  (:require [smerf.domain.intents :as intents]))

(def ids
  {:command/id "11111111-1111-4111-8111-111111111111"
   :correlation/id "22222222-2222-4222-8222-222222222222"
   :causation/id "33333333-3333-4333-8333-333333333333"})

(def envelope
  (intents/intent-envelope
   (intents/tracer-intent "foundation tracer")
   ids))

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

(def representative-values-json
  "{\"codec-version\":1,\"payload\":{\"$type\":\"map\",\"entries\":[[{\"$type\":\"keyword\",\"value\":\":fixture/boolean\"},true],[{\"$type\":\"keyword\",\"value\":\":fixture/decimal\"},12.5],[{\"$type\":\"keyword\",\"value\":\":fixture/id\"},\"aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa\"],[{\"$type\":\"keyword\",\"value\":\":fixture/integer\"},42],[{\"$type\":\"keyword\",\"value\":\":fixture/keyword\"},{\"$type\":\"keyword\",\"value\":\":campaign/member\"}],[{\"$type\":\"keyword\",\"value\":\":fixture/list\"},{\"$type\":\"list\",\"items\":[{\"$type\":\"keyword\",\"value\":\":alpha\"},{\"$type\":\"keyword\",\"value\":\":beta\"}]}],[{\"$type\":\"keyword\",\"value\":\":fixture/nil\"},null],[{\"$type\":\"keyword\",\"value\":\":fixture/set\"},{\"$type\":\"set\",\"items\":[{\"$type\":\"keyword\",\"value\":\":author\"},{\"$type\":\"keyword\",\"value\":\":reader\"}]}],[{\"$type\":\"keyword\",\"value\":\":fixture/vector\"},{\"$type\":\"vector\",\"items\":[{\"$type\":\"keyword\",\"value\":\":one\"},2,null]}]]}}")
