# Step 06 — Synchronization Proof

Parent: [ClojureDart Rebuild Plan](../CLOJUREDART_REBUILD_PLAN.md)  
Depends on: [Step 05](../05-datomic-command/PLAN.md)

## Objective

Synchronize authorized committed facts from Datomic’s durable log into Dartascript using logical IDs, deterministic bounded regeneration, recoverable snapshots, and complete visibility handling.

## Non-goals

- Durable per-client package journals, client authorization, optimistic writes, or final tuning.
- General workflow orchestration beyond synchronization.

## Inherited decisions

- Ranges cover `(from-t, current-through]`.
- Correct filtered output equals `P(after, scope) − P(before, scope)`.
- Logical IDs are immutable; deletion uses tombstones.
- Full resnapshot is universal recovery.
- Fanout carries sync packages only.

## Interfaces and contracts

- `SyncLogReader`, checkpoint store, `SyncFormulator`, `Fanout`, `SyncReceiver`, and `SyncApplier`.
- Snapshot, range, status, replay, and `resync-required` envelopes.
- Versioned scope/auth/projection descriptors and logical fact representation.

## Artifacts

- Backend log, projection, range, snapshot, replay, and fanout modules.
- Frontend receiver/applier and staged snapshot activation.
- Integrated regeneration fixtures.

## Implementation tasks

1. Read ordered transactions and persist formulation checkpoints.
2. Implement `P(basis, scope)` and logical subject/ref translation from before/after bases.
3. Enforce immutable identity, tombstones, and no-upsert retractions.
4. Formulate atomic ranges and compare visibility changes with full projection differences.
5. Regenerate bounded missing ranges using pinned compatible versions.
6. Build fixed-basis resumable/chunked snapshots with manifest/checksums.
7. Implement status, gap/duplicate/overlap detection, replay, and scope checks.
8. Stage and atomically activate Dartascript snapshots/ranges with `applied-through`.
9. Add sync-only fanout and resnapshot fallback.
10. Carry the Step 05 transaction through the full path.

## Failure scenarios

- Consumer crash around checkpointing or delivery loss.
- Missing history/incompatible versions/excessive regeneration cost.
- Visibility grant/revocation over old facts.
- Missing/changed identity or unresolved retraction.
- Interrupted snapshot construction/activation.
- Duplicate, overlapping, gapped, out-of-order, or stale-scope packages.

## Tests and observability

- Restart at every checkpoint boundary.
- Deterministic regeneration and fresh-snapshot equivalence.
- Different internal EIDs with identical logical results.
- Grants/revocations, retractions, tombstones, and invisible transactions.
- Snapshot interruption and missed-final-range status recovery.
- Metrics for checkpoint, range, scope/epoch, versions, fact counts, snapshot size, replay, apply latency, and resync reason.

## Migration and rollback

Run log consumption/formulation dark before fanout. Disable fanout to roll back without affecting commands. Preserve versioned checkpoints; incompatible rollback rotates scope and resnapshots.

## Exit criteria

- Step 05 reaches Dartascript only through the log.
- Restarts and delivery loss cannot lose committed state.
- Replay equals fresh authorized snapshot.
- Visibility changes are complete and no EID appears on wire.
- Every incompatible/excessive recovery safely resnapshots.

## Candidate nested plans

- Log/checkpoints.
- Projection/logical translation.
- Range regeneration.
- Snapshot staging.
- Client apply.
- Status/replay/fanout.
