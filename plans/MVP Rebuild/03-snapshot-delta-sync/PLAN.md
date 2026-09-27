# Slice 3 — Snapshot and Polling-Delta Synchronization

Parent: [MVP Rebuild Plan](../MVP_REBUILD_PLAN.md)  
Depends on: [Slice 2](../02-seeded-datomic-backend/PLAN.md)

Status: Not started

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

- [ ] Add the pinned Dartascript dependency and prove one small database/query
  works in ClojureDart.
- [ ] Derive synchronized Dartascript attributes from the shared logical
  schema, and define frontend-owned local attributes separately in one
  Dartascript database.
- [ ] Implement Datomic entity/reference conversion to logical UUID facts.
- [ ] Implement `SyncSource/snapshot` from one current Datomic basis.
- [ ] Implement `SyncSource/deltas-after` using ordered Datomic transaction
  ranges after the supplied `t`.
- [ ] Include empty ranges so the client cursor can advance across transactions
  with no projected facts.
- [ ] Implement `GET /api/sync/snapshot`.
- [ ] Implement `GET /api/sync/delta?from-t=...`; return a fresh-snapshot
  instruction when the cursor is absent or unusable.
- [ ] Implement frontend HTTP fetch/decode for snapshot and delta responses.
- [ ] Implement `SyncApplier`:
  - replace synchronized facts on snapshot;
  - apply delta additions/retractions;
  - advance the cursor in the same Dartascript transaction;
  - never modify local-zone facts.
- [ ] Implement `LocalTransact` with operations for navigation and selection;
  reject synchronized attribute writes.
- [ ] Implement initial `ProjectionQuery` functions for campaign workspace and
  character detail.
- [ ] Poll once at startup, immediately after accepted commands, and on a
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
