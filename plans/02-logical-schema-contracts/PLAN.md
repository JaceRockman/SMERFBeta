# Step 02 — Logical Schema and Contracts

Parent: [ClojureDart Rebuild Plan](../CLOJUREDART_REBUILD_PLAN.md)  
Depends on: [Step 01](../01-decisions-toolchain/PLAN.md)

## Objective

Define portable logical meaning and versioned contracts, then prove separate Datomic, projection, and Dartascript schemas implement equivalent identity, cardinality, and reference behavior.

## Non-goals

- Complete product schema or final resource/ruleset composition.
- Database access, authorization, or command execution in shared code.
- Sending a Datomic schema directly to clients.

## Inherited decisions

- A neutral logical attribute registry is canonical.
- Physical schemas remain database-specific.
- Logical IDs are immutable canonical UUID strings at boundaries.
- Protocol, projection, and storage versions evolve independently.

## Interfaces and contracts

- Logical attribute descriptor: type, cardinality, identity, reference target, synchronization eligibility, and version.
- Intent, response, error, workflow, snapshot, range, and status envelopes.
- Datomic, synchronized-projection, Dartascript synchronized, and Dartascript local schema adapters.
- Stable structured validation results.

## Artifacts

- `domain/src/smerf/domain/{entities,identifiers,intents,responses,sync,workflows,validation}.cljc`
- Backend/frontend schema adapters.
- Cross-runtime parity and compatibility fixtures.

## Implementation tasks

1. Define registry metadata, canonical UUID/keyword/enum encodings, and version rules.
2. Register a minimal graph containing identity, scalar, cardinality-many, and reference attributes.
3. Define the minimum envelopes required by steps 3–6.
4. Implement context-free validators with stable paths and error codes.
5. Derive/validate separate physical schemas.
6. Prove lookup references yield equivalent graphs despite different internal EIDs.
7. Model a compatible addition, rename, and incompatible type/cardinality change.
8. Publish compatibility and fixture-update procedures.

## Failure scenarios

- Missing, duplicate, mutable, retracted, or reused logical IDs.
- Physical adapters disagree on cardinality, uniqueness, or refs.
- Backend-only attributes leak into projections.
- Unknown versions or incompatible changes are silently accepted.

## Tests and observability

- Identical JVM/CLJD validation fixtures.
- Identity, cardinality, uniqueness, and reference parity.
- Different-EID equivalent projections.
- Compatible-addition, rename, and incompatible-change tests.
- Diagnostics include contract/schema versions and stable error codes.

## Migration and rollback

Deploy readers before writers and retain compatibility overlap for renames. Roll back writers while dual readers remain. Rebuild synchronized projections instead of performing complex local schema migration.

## Exit criteria

- Registry and contracts compile on both runtimes.
- Physical adapters pass the same logical fixtures.
- No Datomic schema or EID crosses a boundary.
- Version compatibility and migration behavior are explicit and tested.

## Candidate nested plans

- Logical attribute registry.
- Protocol envelopes and validation.
- Physical schema adapters.
- Schema-evolution fixtures.
