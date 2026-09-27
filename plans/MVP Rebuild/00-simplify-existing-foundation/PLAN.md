# Slice 0 — Simplify the Existing Foundation

Parent: [MVP Rebuild Plan](../MVP_REBUILD_PLAN.md)  
Depends on: Current repository state

Status: Complete

Status: Not started

## Objective

Review the code already implemented for the Full Rebuild and reduce it to a
clear MVP foundation. Preserve working behavior and useful boundaries, but
remove abstractions whose only consumers are their own tests.

This is a simplification pass, not a rewrite. Every removal must make the
current system easier to understand while keeping the codec, build, and
dependency checks green.

## Desired result

After this slice, a developer should be able to understand the active code by
following this path:

```text
frontend dispatcher
  -> transport codec
  -> backend handler
  -> direct result
```

The remaining shared code should directly support either the codec transport
seam or Slice 1's minimal intent/snapshot/delta contracts.

## Simplification rules

- Keep code with a current runtime consumer or an immediate Slice 1 consumer.
- Remove code exercised only by tests when it models deferred Full Rebuild
  behavior.
- Prefer a direct predicate or constructor near its data over a generic
  registry of envelope policies.
- Remove version fields from the MVP wire and registry data; the MVP deploys
  client and backend together and does not need negotiation.
- Keep all frontend-owned implementation namespaces in `.cljd`. Shared
  cross-runtime domain code remains `.cljc`; frontend code that cannot compile
  to ClojureDart does not belong in `frontend/`.
- Keep the seven MVP interface names in plans and comments, but do not create
  empty protocols or namespaces before a slice implements them.
- Keep future notes short and attached to a concrete adapter seam.
- Do not weaken the module dependency rules in `dev/smerf/check.clj`.

## Files to review

- `domain/src/smerf/domain/registry.cljc`
- `domain/src/smerf/domain/wire.cljc`
- `domain/src/smerf/domain/sync.cljc`
- `domain/src/smerf/domain/identifiers.cljc`
- `domain/src/smerf/domain/intents.cljc`
- `domain/src/smerf/domain/responses.cljc`
- `domain/src/smerf/domain/codec.cljc`
- `domain/test/smerf/domain/contract_test.cljc`
- `domain/test/smerf/fixtures/registry.cljc`
- current backend/frontend transport and dispatch namespaces
- `deps.edn`, `dev/smerf/check.clj`, and README foundation instructions

## Step-by-step implementation

### 1. Establish the baseline

- [x] Run JVM tests, ClojureDart contract tests, formatting, linting, dependency
  checks, ClojureDart compile, and Flutter analysis.
- [x] Record any existing failures before changing code.
- [x] Trace the currently runnable frontend → transport → backend → response
  path and list every namespace it actually loads.

#### Baseline results

The baseline completed without failures:

- JVM: 15 tests, 113 assertions, 0 failures
- ClojureDart contract tests: all 15 tests passed
- Formatting: all source files formatted
- Clojure lint: 0 errors, 0 warnings
- Dependency boundaries: valid
- ClojureDart frontend compile: succeeded
- Flutter analysis: no issues

The active application path is intentionally small:

```text
Flutter main
  -> MaterialApp
  -> "Foundation ready"
```

Before this simplification, the end-to-end test path was:

```text
fixture
  -> frontend intent dispatcher
  -> frontend codec transport
  -> backend codec transport
  -> tracer ingress
  -> tracer response
```

The replacement runtime seams are `smerf.frontend.intents.dispatcher`,
`smerf.frontend.transport`, `smerf.backend.transport`, and the shared domain
codec, identifiers, intents, and responses namespaces. No Datomic, Dartascript,
HTTP, or MVP sync implementation is currently loaded by the application.

### 2. Classify the current public code

- [x] For every public var in `domain/`, label it:
  - used by the running tracer;
  - required by Slice 1;
  - deferred to Full Rebuild;
  - unused.
- [x] Search JVM, ClojureDart, backend, frontend, and tests for actual callers.
- [x] Treat tests that only prove an unused abstraction as evidence of
  overbuilding, not as a reason to retain it.

#### Inventory result

The former tracer path used:

- `domain/codec.cljc`: `encode` and `decode`;
- `domain/identifiers.cljc`: correlation and canonical-ID predicates;
- `domain/intents.cljc`: tracer intent construction, envelope construction, and
  tracer-envelope validation;
- `domain/responses.cljc`: structured errors, accepted/rejected results, and
  result validation;
- `domain/tracing.cljc`: stage construction and stage appending;
- `frontend/intents/dispatcher.cljc`: dispatch boundary;
- `frontend/transport.cljc`: codec transport boundary;
- `backend/transport.clj`: codec decoding/encoding boundary;
- `backend/ingress/tracer.clj`: backend intent handling.

The current application also loads only the Flutter placeholder in
`frontend/main.cljd`; it does not load the tracer transport path.

The immediate Slice 1 consumer set is:

- canonical logical IDs from `identifiers.cljc`;
- simplified intent/result shapes from `intents.cljc` and `responses.cljc`;
- concrete logical fact, snapshot, and delta shapes to be created by Slice 1;
- `codec.cljc` as the existing cross-runtime transport.

The following were test-only or had no runtime caller:

- the removed `registry.cljc`, `wire.cljc`, and empty `sync.cljc` namespaces;
- the removed `fixtures/registry.cljc`;
- registry version-family metadata and exhaustive registry validation;
- registry lookup/constructor APIs beyond their own contract tests.

The tracer files and trace-stage fields are removed by this simplification.
The generic codec transport and dispatch seams remain for Slice 1.

Correlation metadata was reduced to one `:correlation/id`; MVP requests and
results do not carry `:command/id` or `:causation/id`. The shared test runner
now lives under `domain/test`, alongside the domain contract tests.

The following public-looking codec helpers are only called internally and are
candidates to become private implementation helpers during simplification:

- `codec/to-wire`;
- `codec/from-wire`.

The full registry model, generalized envelope catalog, storage/scope version
families, and exhaustive validation remain deferred to the Full Rebuild unless
Slice 1 gives one of them a concrete consumer.

### 3. Simplify versioning

- [x] Remove codec, protocol, result, projection, storage, scope, and
  per-attribute version fields from MVP source code.
- [x] Remove active major/minor compatibility maps, storage-zone versions, and
  migration-action metadata from MVP source code.
- [x] Record that compatibility negotiation is a Full Rebuild concern.

### 4. Simplify the registry

- [x] Confirm that no current runtime path consumes
  `smerf.domain.registry`.
- [x] Remove the active registry namespace; recreate only concrete schema data
  when the MVP backend and sync slices need it.
- [x] Remove generalized descriptor constructors, warning accumulation,
  version-family metadata, migration metadata, and exhaustive schema
  validation not used by the MVP.
- [x] Delete the large registry fixture; Slice 1 will own its concrete
  campaign/character fact fixtures.

### 5. Simplify wire contracts

- [x] Confirm that `smerf.domain.wire` had no runtime consumer.
- [x] Remove the generic map of all future envelope kinds.
- [x] Defer concrete request, snapshot, and delta validation to Slice 1 beside
  the shapes that use it.
- [x] Remove deferred scope, resync-detail, storage-EID blacklist, and
  exhaustive unknown-key machinery unless Slice 1 demonstrates a current need.

### 6. Keep the working foundation small

- [x] Preserve the tagged-JSON codec and malformed-codec tests that protect
  JVM/ClojureDart interoperability.
- [x] Preserve canonical UUID handling.
- [x] Remove the tracer intent, tracer ingress, trace-stage data, tracer
  fixture, and tracer acceptance test.
- [x] Defer replacement boundary coverage to the first real MVP intent in
  Slice 1 and its backend integration path in Slice 2.
- [x] Keep dependency checks preventing domain/frontend/backend inversion.
- [x] Replace the large registry/wire suite with one compact contract suite
  for retained behavior.

### 7. Verify and document

- [x] Run the complete baseline check set again.
- [x] Confirm there are no source namespaces whose only purpose is deferred
  Full Rebuild behavior.
- [x] Confirm every retained public abstraction has a named current or Slice 1
  consumer.
- [x] Update README wording if commands or active namespaces changed.
- [x] Add concise comments only at the codec, transport, persistence, and sync
  seams where post-MVP replacement is plausible.
- [x] Mark Slice 0 complete in the parent MVP plan.

#### Final verification

- JVM: 6 tests, 16 assertions, 0 failures
- ClojureDart domain/frontend smoke tests: all passed
- ClojureDart frontend compile: succeeded
- Formatting: passed
- Clojure lint: 0 errors, 0 warnings
- Dependency boundaries: valid
- Flutter analysis: no issues

## Acceptance

- All checks that passed before simplification still pass afterward.
- The first real MVP intent will cross the real codec and frontend/backend
  boundaries in later slices.
- `domain/` contains no database, HTTP, or Flutter dependencies.
- MVP wire and registry contracts contain no version fields; the Full Rebuild
  retains the future compatibility model.
- Registry and wire code are either removed or reduced to concrete MVP data
  with an immediate consumer.
- Tests describe application contracts rather than implementation scaffolding.
- The net result is fewer concepts and less source code, not merely renamed
  abstractions.
- Slice 1 can begin without depending on deferred Full Rebuild machinery.

## Do not do in this slice

- Do not implement snapshots, deltas, Datomic, Dartascript, or new UI.
- Do not replace the accepted tagged-JSON codec.
- Do not redesign the seven MVP interfaces.
- Do not delete Full Rebuild planning documents; they remain the record of
  deferred production concerns.
- Do not add frameworks solely to make the simplified code look architectural.
