# 02.5 — Datomic Schema Adapter

Parent: [Logical Schema and Contracts](../PLAN.md)  
Depends on: [Representative Graph Fixture](../04-representative-fixture/PLAN.md)

## Objective

Derive, apply, and validate a real Datomic schema from the neutral registry while keeping physical storage details out of shared contracts.

## Scope

Implement the backend adapter and test it against an isolated Datomic database. The adapter owns:

- native UUID identity attributes with unique identity;
- native references and lookup refs;
- cardinality and uniqueness;
- required indexes and backend-only attributes;
- schema/storage version and manifest generation.

The adapter must not turn logical references into UUID scalar attributes merely to avoid EIDs. Logical IDs are resolved at the boundary; native references are used internally.

## Implementation tasks

1. Add a backend schema-adapter namespace under `backend/src/smerf/backend/`.
2. Translate registry descriptors into Datomic schema transactions.
3. Apply the representative schema to an isolated test database.
4. Generate a deterministic manifest containing storage kind, schema version, registry version, included attributes, and checksum.
5. Implement schema validation against the manifest.
6. Load the representative fixture using logical lookup refs and query native relationships.

## Tests

- Identity attributes are UUID, cardinality-one, and unique identity.
- References are native Datomic references.
- Cardinality, uniqueness, and index behavior match the registry.
- Backend-only attributes exist only in the authoritative schema.
- Duplicate identities and invalid cardinality values are rejected.
- Equivalent logical fixtures query the same graph despite different EID allocation.
- Manifest generation is deterministic.

## Failure scenarios

- Registry metadata maps to the wrong Datomic value type.
- A reference is stored as a scalar UUID.
- Physical uniqueness or cardinality is weaker than the logical contract.
- Schema version or manifest checksum changes unexpectedly.
- Logical lookup refs resolve to the wrong entity or permit duplicate identities.

## Exit criteria

- A real Datomic adapter applies the representative schema.
- Datomic queries and lookup refs preserve the logical graph.
- The adapter returns a deterministic validated manifest.
- No Datomic schema or EID is emitted by domain or synchronization contracts.
