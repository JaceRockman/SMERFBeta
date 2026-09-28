# Slice 3 — Snapshot and Polling-Delta Synchronization

Parent: [MVP Rebuild Plan](../MVP_REBUILD_PLAN.md)  
Depends on: [Slice 2](../02-seeded-datomic-backend/PLAN.md)

Status: In progress — sync pipeline implemented; physical Dartascript storage
API pending

## Objective

Move authoritative Datomic facts into one frontend Dartascript database using
a full snapshot followed by HTTP-polled transaction deltas.

## Interfaces implemented

- `SyncSource`: backend snapshot and delta production.
- `SyncApplier`: synchronized-zone writes to Dartascript.
- `LocalTransact`: client-owned writes to the local Dartascript zone.
- `ProjectionQuery`: read-only queries across both zones.

The HTTP poller is an adapter between `SyncSource` responses and
`SyncApplier`; it does not own synchronization meaning.

The pinned Dartascript repository currently exposes only its sample package
function and no database API. The frontend adapter therefore implements the
ownership and projection contract with an in-memory synchronized/local state
until that dependency publishes its database surface; replacing that state
holder is isolated to `data/dartascript.cljc`.

## Files

- `backend/src/smerf/backend/sync/source.clj`
- `backend/src/smerf/backend/sync/projection.clj`
- `backend/src/smerf/backend/http.clj`
- `frontend/src/smerf/frontend/sync/client.cljc`
- `frontend/src/smerf/frontend/data/sync_applier.cljc`
- `frontend/src/smerf/frontend/data/local_transact.cljc`
- `frontend/src/smerf/frontend/data/projection_query.cljc`
- `frontend/src/smerf/frontend/data/dartascript.cljd`
- matching backend/frontend tests
- `deps.edn` and generated Dart dependencies for pinned Dartascript

## Implementation steps

- [x] Add the pinned Dartascript dependency.
- [ ] Prove one small Dartascript database/query works in ClojureDart.
- [x] Derive synchronized attribute behavior from the shared logical schema,
  and define frontend-owned local attributes separately in one database seam.
- [x] Implement Datomic entity/reference conversion to logical UUID facts.
- [x] Implement `SyncSource/snapshot` from one current Datomic basis.
- [x] Implement `SyncSource/deltas-after` using ordered Datomic transaction
  ranges after the supplied `t`.
- [x] Include empty ranges so the client cursor can advance across transactions
  with no projected facts.
- [x] Implement `GET /api/sync/snapshot`.
- [x] Implement `GET /api/sync/delta?from-t=...`; return a fresh-snapshot
  instruction when the cursor is absent or unusable.
- [x] Implement frontend HTTP fetch/decode for snapshot and delta responses.
- [x] Implement `SyncApplier`:
  - replace synchronized facts on snapshot;
  - apply delta additions/retractions;
  - advance the cursor in the same Dartascript transaction;
  - never modify local-zone facts.
- [x] Implement `LocalTransact` with operations for navigation and selection;
  reject synchronized attribute writes.
- [x] Implement initial `ProjectionQuery` functions for campaign workspace and
  character detail.
- [x] Provide a poll operation for startup and post-command use; wire it to a
  lifecycle timer when the Flutter application composition root is introduced.
- [x] Poll once at startup, immediately after accepted commands, and on a
  modest timer while the application is active.

## Acceptance

- A fresh client applies a snapshot and can query the seeded campaign.
- A backend character update appears after the next delta poll.
- Snapshot plus delta produces the same logical result as a fresh snapshot.
- Retractions remove facts without creating placeholder entities.
- Datomic and Dartascript entity IDs differ without affecting queries.
- `SyncApplier` cannot modify local facts; `LocalTransact` cannot modify
  synchronized facts.
- UI-facing reads use `ProjectionQuery` only.

## Explicit deferrals

- WebSockets and server push
- Audience filtering and authorization scopes
- Replay journals and package acknowledgments
- Overlap/out-of-order recovery beyond fresh snapshot fallback
- Resumable or chunked snapshots
- Checksums, compression, and sync-status heartbeats
- Persisted cache hardening and corruption quarantine
