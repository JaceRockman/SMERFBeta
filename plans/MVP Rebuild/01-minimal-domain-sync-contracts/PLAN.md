# Slice 1 — Minimal Domain and Sync Contracts

Parent: [MVP Rebuild Plan](../MVP_REBUILD_PLAN.md)  
Depends on: [Slice 0](../00-simplify-existing-foundation/PLAN.md)

Status: Complete

## Objective

Define the smallest portable `.cljc` contracts needed for the MVP command and
snapshot/delta paths. Keep the existing foundation where useful, but do not
complete the Full Rebuild's generalized compatibility system.

## Interfaces established

- `IntentClient`: accepts an intent envelope and returns a direct result.
- `IntentHandler`: accepts the same envelope on the backend.
- `SyncSource`: returns either a snapshot or deltas after a cursor.
- `SyncApplier`: applies one snapshot or delta package.
- `LocalTransact`: applies client-owned local operations.
- `ProjectionQuery`: returns view data from synchronized and local facts.

These are data/function contracts. This slice does not implement Datomic,
Dartascript, or HTTP.

## Files

- `domain/src/smerf/domain/identifiers.cljc`
- `domain/src/smerf/domain/intents.cljc`
- `domain/src/smerf/domain/responses.cljc`
- `domain/src/smerf/domain/sync.cljc` to be created in this slice
- `domain/test/smerf/domain/contract_test.cljc`
- `domain/test/smerf/fixtures/`

## Implementation steps

- [x] Inventory the existing registry/wire code and identify the subset used by
  the MVP. Leave unused generalized code isolated; do not extend it.

### Inventory result

The registry and generalized wire-policy namespaces were removed during Slice
0 because they had no runtime consumers. Slice 1 starts from these retained
shared contracts:

- `identifiers.cljc`: canonical UUID and correlation-ID validation;
- `intents.cljc`: generic intent payloads and correlation-bearing requests;
- `responses.cljc`: accepted/rejected results and structured errors;
- `codec.cljc`: the existing tagged-JSON transport;
- `fixtures/contract.cljc`: cross-runtime contract values.

Slice 1 will add only the concrete synchronization data needed by the MVP:
logical facts, snapshots, deltas, and their focused validation. Slice 2 may
add an unversioned logical attribute schema shared by the physical adapters;
the removed generalized registry and envelope catalog remain deferred.
- [x] Freeze the unversioned MVP intent, result, snapshot, and delta shapes.
- [x] Define logical scalar facts and reference facts using canonical UUID
  strings for subjects and references.
- [x] Define snapshot data with `:sync/current-through` and logical facts.
- [x] Define delta data with `:sync/from-t`, `:sync/current-through`, additions,
  and retractions.
- [x] Define the supported MVP intents:
  - create character;
  - update notes;
  - update wounds;
  - roll action.
- [x] Define accepted and rejected direct results, including the immediate roll
  result shape.
- [x] Reuse the existing intent/result and snapshot/delta constructors and
  predicates for the shared `IntentClient`, `IntentHandler`, `SyncSource`, and
  `SyncApplier` values.
- [x] Keep backend Datomic operations, `LocalTransact`, and `ProjectionQuery`
  concrete and slice-owned; define their function shapes in the backend and
  frontend implementation slices instead of adding speculative shared-domain
  wrappers.
- [x] Validate required keys, canonical IDs, known intent types, fact
  scalar/reference exclusivity, and basic collection/value types.
- [x] Add shared fixtures for one campaign, one character update, one snapshot,
  one delta, and each intent/result type.
- [x] Run identical contract fixtures on JVM and ClojureDart.

## Acceptance

- A snapshot followed by a delta represents a character wound or note update.
- Scalar and reference facts round-trip through tagged JSON.
- JVM and ClojureDart accept and reject the same fixtures.
- No fixture contains Datomic or Dartascript entity IDs.
- Each interface has an explicit input and output shape understandable without
  reading an adapter.

## Explicit deferrals

- All wire and registry version fields
- Per-attribute and storage versions
- Migration matrices and schema manifests
- Authorization scopes and epochs
- Exhaustive malformed-input taxonomy
- Workflow, action-plan, and effect-request contracts
