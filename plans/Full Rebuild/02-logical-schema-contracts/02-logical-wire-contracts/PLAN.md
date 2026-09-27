# 02.2 — Logical Wire Contracts

Parent: [Logical Schema and Contracts](../PLAN.md)  
Depends on: [Registry Foundation](../01-registry-foundation/PLAN.md)

Status: In progress

## Objective

Define the stable domain envelopes used by intents, direct results, validation, and minimal synchronization without exposing database-specific facts.

## Scope

Implement portable shapes and pure validators in `domain/`. Authorization-specific scope contents remain Step 04 responsibilities; this plan carries only an opaque scope ID and scope version.

The logical-datom fact shape is:

```clojure
{:fact/op       :add
 :fact/entity   :entity/character
 :fact/subject  "canonical-uuid"
 :fact/attribute :character/name
 :fact/value    "Aria"}
```

Reference facts use `:fact/ref` instead of `:fact/value`. The two keys are mutually exclusive, and the registry determines which is valid.

Define:

- intent envelope with protocol/intent versions, command/correlation/causation IDs, type, payload, and client display time;
- accepted/rejected direct result and structured error;
- validation error collection with stable code, path, value, message, and version;
- basis-consistent snapshot;
- ordered delta covering `(from-t, current-through]`;
- synchronization status;
- `resync-required` response.

## Implementation tasks

1. [x] Add logical-fact and envelope namespaces under `domain/src/smerf/domain/`.
2. [x] Define required, optional, and forbidden keys for each envelope.
3. Define fact validation against the registry, including scalar/reference exclusivity.
4. Define snapshot/delta cursor and scope invariants.
5. Define stable result and error types while preserving correlation metadata.
6. Add representative encoded fixtures for every envelope and both fact variants.

## Tests

- Valid scalar and reference facts pass.
- Invalid IDs, attributes, entity types, value kinds, and missing keys fail deterministically.
- A retraction has the same logical fact identity as its addition.
- Snapshot and delta versions, scopes, and cursor ranges validate correctly.
- Duplicate, gap, overlap, and scope mismatch conditions are representable.
- No envelope accepts raw EIDs or raw Datomic transaction datoms.

## Failure scenarios

- `:fact/value` and `:fact/ref` both appear or neither appears.
- A reference is encoded as a UUID scalar for a reference attribute.
- Delta `from-t` is greater than `current-through`.
- Snapshot facts and cursor are from incompatible versions.
- Correlation metadata is dropped from a result.
- Unknown envelope keys or versions are silently accepted.

## Exit criteria

- All required domain envelope shapes are documented and validated.
- Logical facts are independent of either database’s EID allocation.
- JVM and ClojureDart fixtures agree on accepted/rejected envelopes.
- Step 03 and Step 06 can consume the contracts without inventing wire fields.
