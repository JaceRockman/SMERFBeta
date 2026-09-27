# 02.6 — Dartascript Adapters

Parent: [Logical Schema and Contracts](../PLAN.md)  
Depends on: [Representative Graph Fixture](../04-representative-fixture/PLAN.md)

## Objective

Derive and validate synchronized and local Dartascript schemas while enforcing separate ownership zones and logical-ID boundary behavior.

## Scope

Implement real synchronized and local Dartascript zone adapters against one isolated test database. Keep storage persistence/recovery for Step 03.

The synchronized adapter owns:

- sync-eligible attributes only;
- logical-ID identity metadata;
- client-native references;
- supported cardinality and uniqueness behavior;
- projection/schema version and manifest.

The local adapter owns device, navigation, command-lifecycle, and other client-owned facts in a disjoint namespace in the same database. Local attributes must not become synchronized facts. Synchronized writes remain reserved for the later `SyncApplier` boundary.

## Implementation tasks

1. Add frontend schema-adapter namespaces under `frontend/src/smerf/frontend/`.
2. Translate the registry into synchronized and local Dartascript schema declarations.
3. Apply both zone schemas to one isolated test database.
4. Build one deterministic Dartascript manifest with independent synchronized/local zone versions.
5. Resolve logical references into client-local entities during fixture loading.
6. Verify that synchronized and local schemas cannot write across ownership boundaries.

## Tests

- Sync-eligible attributes are present in the synchronized schema.
- Backend-only and local-only attributes are absent from it.
- Local attributes exist only in the local namespace.
- Client-native references and cardinality behavior match the logical registry.
- Equivalent snapshots can allocate different local EIDs while preserving logical queries.
- Logical IDs resolve/upsert correctly for additions and never upsert on retractions.
- Manifest generation is deterministic and identifies storage/schema versions.

## Failure scenarios

- The synchronized schema contains a backend-only or local-only attribute.
- A local writer changes synchronized facts or its cursor.
- A reference is stored as an EID on the wire or as an unvalidated scalar.
- Dartascript cannot enforce a declared uniqueness/cardinality behavior.
- Snapshot loading depends on a particular client EID allocation.

## Exit criteria

- Real synchronized and local Dartascript zone adapters apply disjoint schemas in one database.
- Ownership boundaries are enforced by tests.
- Logical-ID resolution produces the expected graph across different local allocations.
- Step 03 can add persistence and recovery without changing schema meaning.
