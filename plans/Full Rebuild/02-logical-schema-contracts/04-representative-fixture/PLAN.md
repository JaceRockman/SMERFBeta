# 02.4 — Representative Graph Fixture

Parent: [Logical Schema and Contracts](../PLAN.md)  
Depends on: [Validation and Canonical JSON](../03-validation-and-codec/PLAN.md)

## Objective

Create a small, versioned product-shaped graph that exercises the registry and wire contracts without attempting the complete SMERF schema.

## Scope

Register:

- `:entity/campaign` with immutable identity and scalar name;
- `:entity/world` with immutable identity, scalar title, and parent/reference coverage;
- `:entity/character` with immutable identity, scalar name, enum status, and cardinality-many references;
- `:entity/resource` with immutable identity and an owning-world or owning-campaign reference;
- one backend-only attribute and one local-only attribute.

Use newly assigned stable logical UUIDs. Do not copy legacy storage entity IDs. Keep the fixture separate from the complete Step 13 seed bundle.

The fixture must include:

- a valid graph;
- one scalar and one reference update;
- cardinality-one and cardinality-many values;
- ordered-many and set-many behavior where supported;
- a tombstoned entity;
- representative additions and retractions;
- invalid and unresolved-reference cases;
- the same logical graph prepared with different internal EID allocations.

## Implementation tasks

1. Add the representative entity and attribute descriptors to the registry.
2. Add stable enum values and fixture logical IDs.
3. Define the logical-fact fixture and expected projection.
4. Define the versioned seed-fixture manifest and checksum inputs.
5. Add valid and invalid fixture variants for later adapter tests.

## Tests

- The graph validates against the registry.
- Logical facts reconstruct the expected relationships.
- Reordering set-many values does not change logical meaning.
- Ordered-many values preserve declared order.
- Tombstones retain identity and retractions do not create entities.
- Backend-only and local-only facts are excluded from the synchronized expected projection.

## Failure scenarios

- Fixture uses a mutable, duplicate, missing, or reused logical ID.
- A relationship uses an EID instead of a logical ID.
- A reference points to an invalid entity kind.
- The expected projection depends on allocation order or transaction order.
- The fixture checksum changes without a declared version change.

## Exit criteria

- A versioned representative graph is available to every later child plan.
- Expected logical facts and projection exclusions are explicit.
- The fixture passes on both runtimes and is independent of legacy data.
