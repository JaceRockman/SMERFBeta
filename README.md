# SMERF

SMERF is being rebuilt as a ClojureDart/Flutter frontend backed by a
Clojure/JVM/Datomic service.

The active implementation path is the
[MVP Rebuild Plan](plans/MVP%20Rebuild/MVP_REBUILD_PLAN.md). The longer-term
production architecture is preserved in the
[Full Rebuild Plan](plans/Full%20Rebuild/CLOJUREDART_REBUILD_PLAN.md).

## Current repository structure

- `domain/` — portable `.cljc` contracts and the shared logical schema,
  compiled on JVM and ClojureDart
- `backend/` — Clojure/JVM backend and future Datomic integration
- `frontend/` — ClojureDart/Flutter implementation; frontend-owned source is
  `.cljd`
- `plans/MVP Rebuild/` — active implementation slices
- `plans/Full Rebuild/` — deferred production roadmap
- `docs/adr/` — accepted architectural decisions

## Foundation checks

```sh
clojure -M:test
clojure -M:test:cljd test smerf.domain.contract-test
clojure -M:format
clojure -M:lint
clojure -M:check
clojure -M:cljd compile
flutter analyze
```

The MVP currently contains the shared codec, identifier, intent/result
contracts, logical schema, a seeded local Datomic backend derived from that
schema, intent HTTP handling, a Flutter foundation screen, generic frontend
codec boundaries, and the initial dependency checks. The Dartascript adapter
will derive its synchronized schema from the same logical descriptors in
Slice 3.

## Run the development backend

```sh
clojure -M:backend
```

The server listens on `http://localhost:8080` and persists its seeded Datomic
Local database under `.smerf-datomic/`. Set `PORT` or `SMERF_DATOMIC_DIR` to
override those defaults. `POST /api/intents` is active; the snapshot and delta
routes return `501` until Slice 3.

## Development direction

The intended MVP flow is:

```text
Flutter UI
  -> intent client
  -> HTTP backend
  -> Datomic
  -> snapshot/delta sync
  -> Dartascript
  -> frontend queries
  -> Flutter UI
```

Synchronized data crosses the boundary using logical IDs. Datomic and
Dartascript entity IDs remain implementation details.

## Legacy prototype

The previous ClojureScript/Expo prototype is retained as historical reference.
Earlier project iterations are available at:

- https://github.com/JaceRockman/jace-and-jace-prototype
- https://github.com/JaceRockman/modular-roleplaying-framework-beta
