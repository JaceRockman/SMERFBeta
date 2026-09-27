# Step 03 — Dartascript Persistence and Reactivity

Parent: [ClojureDart Rebuild Plan](../CLOJUREDART_REBUILD_PLAN.md)  
Depends on: [Step 02](../02-logical-schema-contracts/PLAN.md)

## Objective

Provide one reliable persisted Dartascript database with synchronized and local ownership zones, strict write ownership, same-database projection queries, and safe reactive invalidation.

## Non-goals

- Network synchronization, authorization, navigation behavior, or optimistic writes.
- Modifying Dartascript’s deferred storage API unless the application adapter proves insufficient.
- Selecting a broad frontend state framework.

## Inherited decisions

- Synchronized and local facts use disjoint namespaces and schema/version metadata within one physical database.
- Only `SyncApplier` writes synchronized data; only `LocalTransact` writes local data.
- Synchronized data is disposable; local data has explicit retention policy.
- Cross-zone references use logical-ID scalars, not shared entity-ID assumptions.

## Interfaces and contracts

- `SynchronizedZone`, `LocalZone`, `SyncApplier`, `LocalTransact`, and `ProjectionQuery`.
- Persisted database envelope containing engine version, synchronized-zone version, local-zone version, device, principal, scope, checksum, and cursor where applicable.
- Subscription/invalidation contract with listener-failure isolation.

## Artifacts

- `frontend/src/smerf/frontend/data/{synchronized,local}/`
- Dartascript serialization storage adapter.
- Atomic storage replacement, corruption quarantine, and projection-query coordinator.
- Representative performance fixtures.

## Implementation tasks

1. Create one Dartascript database with disjoint synchronized/local namespaces and enforce zone write capabilities.
2. Define database keys, zone envelopes, checksums, and independent zone-version handling.
3. Implement synchronized-zone stage-write, durability barrier, and atomic activation without replacing local facts.
4. Restore without exposing partially loaded state.
5. Recover from interrupted writes, corruption, and unsupported versions.
6. Enforce device/principal/scope isolation.
7. Implement `ProjectionQuery` across synchronized and local zones using logical IDs.
8. Batch invalidations and isolate subscriber exceptions.
9. Benchmark lookup, joins, pull, snapshot load, persistence, and rerender invalidation.

## Failure scenarios

- Termination during save/restore.
- Corrupt or wrong-scope cache.
- Local writer reaches synchronized facts or synchronized replacement reaches local facts.
- Listener exceptions or invalidation storms.
- Cross-zone reads observe incompatible generations.
- Startup or query performance exceeds budgets.

## Tests and observability

- Crash/interruption and corruption-recovery tests.
- Account/scope isolation and write-ownership tests.
- Same-database cross-zone query correctness.
- Listener exception, cleanup, and batching tests.
- Metrics for persisted size, load/save/query duration, invalidation count, and failure reason.

## Migration and rollback

Use versioned keys and preserve the previously activated database snapshot until replacement succeeds. Replace or rebuild only the synchronized zone on rollback. Preserve or explicitly purge/migrate local data according to its account/device policy; never load it under another account or scope.

## Exit criteria

- Interrupted writes never replace the last valid store.
- Corrupt synchronized data recovers without damaging local data in the same database.
- Write ownership and account/scope isolation are proven.
- Listener failures cannot break commits or other subscribers.
- Documented performance budgets pass representative fixtures.

## Candidate nested plans

- Persisted storage and recovery.
- Connection ownership.
- Projection queries/reactivity.
- Performance benchmark.
