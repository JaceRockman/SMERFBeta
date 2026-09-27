# 02.1 — Registry Foundation

Parent: [Logical Schema and Contracts](../PLAN.md)  
Depends on: [Step 01](../../01-decisions-toolchain/PLAN.md)

Status: Complete

## Objective

Define the neutral registry that gives stable logical meaning to entities, attributes, enums, constraints, ownership, and contract versions.

## Scope

Implement portable registry data and registry validation in `domain/`. Do not create database schemas or transport envelopes here.

Every attribute descriptor must support:

- stable namespaced keyword ID;
- owning entity type;
- logical type and `:one`/`:many` cardinality;
- requiredness, identity, uniqueness, and immutability;
- reference target, nullability, and deletion behavior;
- synchronization eligibility and ownership zone;
- enum or scalar constraints;
- contract version and rename/migration metadata.

Entity descriptors define the entity kind, immutable logical-ID attribute, allowed attributes, and tombstone policy. Enum descriptors define stable values independently of display labels.

## Implementation tasks

1. Add the registry namespace under `domain/src/smerf/domain/`.
2. Define descriptor constructors and pure registry lookup functions.
3. Define supported logical types, cardinalities, ownership zones, and constraint forms.
4. Define version-family metadata for codec, protocol, projection, storage, attribute, and scope contracts.
5. Validate duplicate IDs, conflicting identity attributes, invalid references, unsupported type/cardinality combinations, and projection leaks.
6. Add a minimal registry fixture containing at least one scalar, UUID identity, enum, cardinality-many, reference, backend-only, and local-only attribute.

## Tests

- Registry descriptors are portable and compile on JVM and ClojureDart.
- Valid metadata resolves consistently on both runtimes.
- Invalid metadata returns deterministic error codes and paths.
- Registry iteration/order is deterministic for manifest generation.
- Backend-only and local-only attributes cannot be marked as synchronized.

## Failure scenarios

- Duplicate entity or attribute IDs.
- Multiple identity attributes for one entity.
- Reference to an unknown entity or incompatible cardinality.
- Identity attribute marked mutable, optional, or non-unique.
- Unsupported logical type or malformed constraint.
- Conflicting ownership and synchronization flags.

## Exit criteria

- A pure registry API and validation contract exist.
- The representative metadata fixture passes identically on JVM and ClojureDart.
- Registry failures are stable and fail closed.
- Later child plans can consume the registry without adding metadata ad hoc.
