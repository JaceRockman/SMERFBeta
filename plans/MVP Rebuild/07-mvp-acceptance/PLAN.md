# Slice 7 — MVP Acceptance Pass

Parent: [MVP Rebuild Plan](../MVP_REBUILD_PLAN.md)  
Depends on: [Slice 6](../06-character-play/PLAN.md)

Status: Not started

## Objective

Verify the complete campaign-to-play journey from a clean development setup,
fix blocking integration gaps, and document how to run the MVP.

## Acceptance journey

1. Create a fresh local Datomic database.
2. Apply schema and seed the campaign.
3. Start the backend HTTP server.
4. Start the Flutter application.
5. Fetch and apply a snapshot.
6. Browse campaign, ruleset, world, and characters.
7. Create or edit a character.
8. Poll and apply the resulting delta.
9. Update notes and wounds.
10. Execute an action roll.
11. Poll and apply final authoritative state.
12. Restart backend and frontend and verify persisted state.

## Files

- end-to-end/backend integration tests
- focused frontend integration/widget tests
- `README.md`
- development scripts or aliases only where they remove repeated manual setup
- the MVP plan status checklist

## Implementation steps

- [ ] Add one automated integration fixture that uses the real codec, backend
  handlers, Datomic adapter, sync formulation, and logical contracts.
- [ ] Add frontend tests for snapshot bootstrap, delta apply, navigation,
  character creation/editing, wound update, and roll result display.
- [ ] Exercise at least one test fake for each of the seven interfaces to prove
  boundaries remain substitutable without loading all infrastructure.
- [ ] Run the journey manually on the primary development target.
- [ ] Confirm no UI/controller namespace imports HTTP or Dartascript adapters
  directly.
- [ ] Confirm no intent handler imports Datomic APIs directly.
- [ ] Confirm synchronized facts are written only by `SyncApplier` and local
  facts only by `LocalTransact`.
- [ ] Confirm no Datomic/Dartascript entity ID appears in wire payloads.
- [ ] Add concise startup instructions for database, backend, and Flutter.
- [ ] Document seeded login/development assumptions and known limitations.
- [ ] Run all repository checks and fix MVP-blocking failures.
- [ ] Mark completed slices and record remaining work under Post-MVP rather
  than expanding MVP scope.

## Required checks

```text
clojure -M:test
clojure -M:test:cljd test smerf.domain.contract-test
clojure -M:format
clojure -M:lint
clojure -M:check
clojure -M:cljd compile
flutter analyze
flutter test
```

## Acceptance

- The complete journey works against a fresh seeded database.
- The same journey still works after backend/frontend restart.
- The seven interface boundaries are visible and tested without unnecessary
  framework layers.
- Snapshot/delta synchronization is the only path for authoritative facts into
  Dartascript.
- User-visible loading, empty, rejection, and connection-failure states are
  understandable.
- README instructions allow another developer to run the MVP.

## Explicit deferrals

Everything listed under Post-MVP in the parent plan remains deferred unless it
blocks this acceptance journey. Production readiness is not an MVP completion
requirement.
