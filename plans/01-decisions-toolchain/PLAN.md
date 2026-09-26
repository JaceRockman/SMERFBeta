# Step 01 — Decisions and Toolchain Foundation

Parent: [ClojureDart Rebuild Plan](../CLOJUREDART_REBUILD_PLAN.md)

## Objective

Establish the production monorepo skeleton, pinned toolchain, CI, foundational ADRs, and one end-to-end tracer path that later steps extend rather than replace.

## Implementation status

- Accepted decisions are recorded in [`docs/adr/`](../../docs/adr/).
- The `domain/`, `backend/`, and `frontend/` skeletons and composition roots exist.
- Shared JVM/ClojureDart codec fixtures and the JVM tracer acceptance path are implemented.
- Six-target Flutter hosts and CI jobs are generated; remote CI execution is still pending.

## Non-goals

- Product-complete schemas, synchronization, authorization, orchestration, or UI.
- Mutating legacy production data.
- Selecting abstractions that are not exercised by the tracer.

## Inherited decisions

- Modules are `domain/`, `backend/`, and `frontend/`.
- Datomic is authoritative; one physical Dartascript database stores synchronized and local client data in separate ownership zones.
- Logical IDs cross boundaries; storage EIDs do not.
- Direct responses and synchronization are separate paths.

## Interfaces and contracts

- Minimal `UIIntent`, `IntentEnvelope`, `RemoteResult`, and structured error.
- Canonical lowercase hyphenated UUID strings.
- Command, correlation, and causation ID conventions.
- Versioned codec interface and backend/frontend composition roots.

## Artifacts

- Root build/configuration and module source/test trees.
- ADRs for Datomic deployment/log API, target Flutter platforms, persisted-data disposition, codec, and pinned versions.
- Shared tracer fixture and dependency-boundary checks.

## Implementation tasks

1. Decide supported platforms, minimum versions, and legacy-data disposition.
2. Select Datomic deployment and verify the required transaction-log/history APIs.
3. Spike Transit and JSON using representative keywords, UUIDs, errors, collections, and numeric values; select one codec.
4. Pin Clojure, ClojureDart, Dart, Flutter, Dartascript, and test dependencies.
5. Create module skeletons and composition roots.
6. Compile one representative `.cljc` contract on JVM and CLJD.
7. Wire a tracer intent through frontend dispatch, transport, backend ingress, and direct response.
8. Add CI for both runtimes, formatting, linting, tests, and dependency rules.

## Failure scenarios

- JVM and CLJD normalize contracts differently.
- Codec changes UUID, keyword, number, nil, or collection semantics.
- Datomic deployment lacks required log/history behavior.
- Correlation metadata is lost or module dependency direction is violated.

## Tests and observability

- Identical cross-runtime fixtures and malformed-codec cases.
- Clean-checkout builds on every selected target.
- Tracer acceptance test with correlated stage logs and durations.

## Migration and rollback

Build alongside the legacy application. No authoritative data changes occur. Rejected dependencies or codec choices are replaced through ADRs before downstream contracts depend on them.

## Dependencies

None.

## Exit criteria

- CI passes from a clean checkout on JVM and CLJD.
- Datomic/log, platform, data-disposition, codec, and version ADRs are accepted.
- One shared fixture round-trips identically.
- The tracer returns a typed result with complete correlation metadata.
- No infrastructure dependency or storage EID enters `domain/`.

## Candidate nested plans

- Toolchain and monorepo bootstrap.
- Datomic deployment/log decision.
- Codec interoperability spike.
- CI and tracer wiring.
