# Slice 2 — Seeded Datomic Backend

Parent: [MVP Rebuild Plan](../MVP_REBUILD_PLAN.md)  
Depends on: [Slice 1](../01-minimal-domain-sync-contracts/PLAN.md)

Status: Not started

## Objective

Provide a runnable JVM backend with seeded Datomic data, direct
campaign-to-play operations, and thin HTTP adapters.

## Interfaces implemented

- `AuthoritativeStore`: Datomic reads and transactions used by the MVP.
- `IntentHandler`: validates and dispatches supported intents.
- HTTP adapter: decodes/encodes requests around `IntentHandler` and, initially,
  placeholder `SyncSource` responses completed in Slice 3.

## Files

- `deps.edn`
- `backend/src/smerf/backend/db/schema.clj`
- `backend/src/smerf/backend/db/datomic.clj`
- `backend/src/smerf/backend/db/seed.clj`
- `backend/src/smerf/backend/intents/handler.clj`
- `backend/src/smerf/backend/http.clj`
- `backend/src/smerf/backend/system.clj`
- matching backend tests and fixtures

Exact filenames may be adjusted to keep one clear public namespace per
interface.

## Implementation steps

- [ ] Add the pinned Datomic Cloud client and a compatible local test/runtime
  adapter described by ADR 0002.
- [ ] Add a minimal Ring-compatible HTTP server adapter; use direct route
  matching rather than a routing framework unless routes become unclear.
- [ ] Define Datomic attributes for campaign, ruleset, world, character,
  action, and roll-result facts used by the MVP.
- [ ] Store immutable logical UUID identity attributes and native Datomic
  references.
- [ ] Add a repeatable development seed with:
  - one campaign;
  - one ruleset with basic stat/wound configuration;
  - one world with short reference content;
  - two example characters;
  - several basic actions.
- [ ] Define the narrow `AuthoritativeStore` operations:
  - load campaign workspace;
  - load one character and referenced rules;
  - create character;
  - update character notes;
  - update character wounds;
  - transact and return a roll result.
- [ ] Implement those operations in the Datomic adapter.
- [ ] Implement `IntentHandler` dispatch for the Slice 1 intent types.
- [ ] Add `POST /api/intents` and return tagged-JSON accepted/rejected results.
- [ ] Reserve `GET /api/sync/snapshot` and `GET /api/sync/delta` routes for
  Slice 3 without duplicating synchronization logic.
- [ ] Wire dependencies in `backend/system` and provide a development startup
  command.

## Acceptance

- Starting from an empty local database applies schema and seed exactly once.
- A backend integration test reads the seeded campaign workspace.
- Character creation, notes, wounds, and roll transactions persist and can be
  queried afterward.
- HTTP request handling depends on `IntentHandler`, not Datomic directly.
- Intent handling depends on `AuthoritativeStore`, not Datomic APIs.
- Restarting the backend retains committed local development data.

## Explicit deferrals

- Real authentication and membership authorization
- Generic CRUD and admin endpoints
- Command idempotency records
- Workflow orchestration and effect execution
- Explicit concurrency policies beyond normal Datomic transaction behavior
- Production Datomic topology and deployment
