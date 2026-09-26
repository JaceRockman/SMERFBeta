# Step 03 — Dartascript Persistence and Reactivity

Parent: [ClojureDart Rebuild Plan](../CLOJUREDART_REBUILD_PLAN.md)  
Depends on: [Step 02](../02-logical-schema-contracts/PLAN.md)

## Objective

Provide reliable persisted synchronized and local Dartascript stores, strict write ownership, cross-database projection queries, and safe reactive invalidation.

## Non-goals

- Network synchronization, authorization, navigation behavior, or optimistic writes.
- Modifying Dartascript’s deferred storage API unless the application adapter proves insufficient.
- Selecting a broad frontend state framework.

## Inherited decisions

- Synchronized and local facts use separate connections.
- Only `SyncApplier` writes synchronized data; only `LocalTransact` writes local data.
- Synchronized data is disposable; local data has explicit retention policy.
- Cross-connection references use logical-ID scalars, not native refs.

## Interfaces and contracts

- `SynchronizedStore`, `LocalStore`, `SyncApplier`, `LocalTransact`, and `ProjectionQuery`.
- Persisted envelope containing store kind, device, principal, scope, schema version, checksum, and cursor where applicable.
- Subscription/invalidation contract with listener-failure isolation.

## Artifacts

- `frontend/src/smerf/frontend/data/{synchronized,local}/`
- Dartascript serialization storage adapter.
- Atomic storage replacement, corruption quarantine, and projection-query coordinator.
- Representative performance fixtures.

## Implementation tasks

1. Create independent connections and enforce write capabilities.
2. Define storage keys, envelopes, checksums, and version handling.
3. Implement stage-write, durability barrier, and atomic activation.
4. Restore without exposing partially loaded state.
5. Recover from interrupted writes, corruption, and unsupported versions.
6. Enforce device/principal/scope isolation.
7. Implement two-input `ProjectionQuery` and logical-ID resolution across connections.
8. Batch invalidations and isolate subscriber exceptions.
9. Benchmark lookup, joins, pull, snapshot load, persistence, and rerender invalidation.

## Failure scenarios

- Termination during save/restore.
- Corrupt or wrong-scope cache.
- Local writer reaches synchronized facts.
- Listener exceptions or invalidation storms.
- Cross-database reads observe incompatible generations.
- Startup or query performance exceeds budgets.

## Tests and observability

- Crash/interruption and corruption-recovery tests.
- Account/scope isolation and write-ownership tests.
- Cross-database query correctness.
- Listener exception, cleanup, and batching tests.
- Metrics for persisted size, load/save/query duration, invalidation count, and failure reason.

## Migration and rollback

Use versioned keys and preserve the previously activated file until replacement succeeds. Discard/rebuild synchronized storage on rollback. Preserve or explicitly migrate local data; never load it under another account/scope.

## Exit criteria

- Interrupted writes never replace the last valid store.
- Corrupt synchronized data recovers without damaging local data.
- Write ownership and account/scope isolation are proven.
- Listener failures cannot break commits or other subscribers.
- Documented performance budgets pass representative fixtures.

## Candidate nested plans

- Persisted storage and recovery.
- Connection ownership.
- Projection queries/reactivity.
- Performance benchmark.
