# Step 02 — Logical Schema and Contracts

Parent: [ClojureDart Rebuild Plan](../CLOJUREDART_REBUILD_PLAN.md)  
Depends on: [Step 01](../01-decisions-toolchain/PLAN.md)

## Objective

Build the portable logical model and versioned cross-runtime contracts in small, independently verifiable slices. Prove that Datomic and Dartascript preserve the same identity, cardinality, uniqueness, reference, and logical-fact behavior without exposing storage entity IDs.

This step establishes the contract foundation, not the complete product schema. Later journeys add product attributes only through the registry and these compatibility rules.

## Status tracking

Use the checklist below as the source of truth for progress. Each child plan may
also declare `Status: Not started`, `Status: In progress`, or `Status: Complete`.
Mark a child complete only after its exit criteria and relevant cross-runtime
checks pass.

- [x] Registry foundation
- [ ] Logical wire contracts
- [ ] Validation and canonical JSON
- [ ] Representative graph fixture
- [ ] Datomic adapter
- [ ] Dartascript adapters
- [ ] Parity and schema evolution

## Boundaries and settled decisions

- The neutral logical registry is canonical; physical schemas are derived or validated from it.
- Logical attributes use stable namespaced keywords. Logical IDs are immutable canonical lowercase hyphenated UUID strings.
- Native references remain internal to each database. Boundary facts carry logical reference IDs.
- One physical Dartascript database contains disjoint synchronized and local ownership zones with separate schema/version metadata and write interfaces.
- Tagged JSON is the cross-runtime transport and canonical hashing representation from ADR 0004. EDN is limited to Clojure-side fixtures or configuration.
- Codec, protocol, intent/result, projection, storage, attribute, and authorization-scope versions evolve independently.
- Strict validation rejects unknown keys, malformed IDs, unsupported versions, invalid enums, invalid numbers, and invalid collection shapes.
- Incompatible projection changes prefer a fresh snapshot over complex client migration.
- Full product schema, authorization policy, command execution, durable sync, fanout, client persistence, and complete seed import remain in later steps.

## Work sequence

Complete each child plan’s exit criteria before starting the next one. Each child should be implementable and reviewable as a separate change.

1. [Registry foundation](01-registry-foundation/PLAN.md) — complete  
   Define stable entity, attribute, enum, constraint, ownership, and version metadata.
2. [Logical wire contracts](02-logical-wire-contracts/PLAN.md) — in progress  
   Define logical facts, intent/results/errors, and minimal snapshot/delta/status/resync envelopes.
3. [Validation and canonical JSON](03-validation-and-codec/PLAN.md)  
   Make validation strict and prove deterministic tagged-JSON encoding and hashing inputs on both runtimes.
4. [Representative graph fixture](04-representative-fixture/PLAN.md)  
   Register a small campaign/world/character/resource graph and versioned seed fixture.
5. [Datomic adapter](05-datomic-adapter/PLAN.md)  
   Derive and apply a real Datomic schema and manifest from the logical registry.
6. [Dartascript adapters](06-dartascript-adapters/PLAN.md)  
   Derive synchronized and local Dartascript schemas while enforcing ownership boundaries.
7. [Parity and schema evolution](07-parity-and-evolution/PLAN.md)  
   Prove equivalent graphs across different EID allocations and exercise compatibility, migration, and rollback behavior.

## Cross-slice invariants

Every child plan must preserve these invariants:

- No Datomic or Dartascript EID appears in an intent, response, logical fact, snapshot, delta, metadata, URL, or persisted cross-database mapping.
- Shared `.cljc` code remains independent of databases, transport implementations, UI, authorization services, clocks, and randomness.
- A reference attribute is represented as a native reference internally and a logical ID at a boundary.
- A retraction never creates or upserts a missing client entity.
- Unknown or incompatible versions fail closed with stable structured errors.
- JVM and ClojureDart fixtures produce identical accepted values, rejected values, error paths, encoded bytes, and canonical hash inputs.
- Backend-only and local-only attributes cannot enter synchronized projections.

## Handoffs

- Step 03 consumes storage envelopes, schema manifests, projection versions, logical-ID metadata, and write ownership boundaries.
- Step 04 extends the opaque synchronization scope contract with principal, authorization epoch, visibility attributes, and expiry.
- Step 05 consumes intent/result/error contracts, canonical payload bytes, logical effects, and the idempotency/hash version.
- Step 06 consumes logical facts, projection manifests, snapshot/delta/status/resync envelopes, tombstone semantics, and compatibility rules.
- Step 13 consumes the registry and versioned fixture conventions for the complete seed bundle.

## Parent completion gate

Step 02 is complete only when all seven child plans pass their exit criteria, the full JVM/CLJD contract suite passes, real Datomic and Dartascript adapters pass the representative fixtures, and the parity/evolution child confirms that incompatible changes have explicit migration or fresh-snapshot behavior.
