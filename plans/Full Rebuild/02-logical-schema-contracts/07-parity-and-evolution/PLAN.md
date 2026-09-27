# 02.7 — Parity and Schema Evolution

Parent: [Logical Schema and Contracts](../PLAN.md)  
Depends on: [Datomic Schema Adapter](../05-datomic-adapter/PLAN.md) and [Dartascript Adapters](../06-dartascript-adapters/PLAN.md)

## Objective

Prove end-to-end logical parity across physical databases and make compatibility, migration, snapshot, and rollback behavior explicit.

## Scope

Compare the logical projection of Datomic and Dartascript fixtures, not their internal entity IDs. Exercise the version families independently:

- codec and protocol;
- intent/result;
- projection;
- storage;
- attribute contract;
- reserved authorization scope.

Use fresh snapshots as the default recovery path for incompatible synchronized-projection changes. Use explicit migration mappings only where a rename or other change is deliberately supported.

## Compatibility rules

- Optional compatible additions may retain the current major version.
- Identity-preserving renames require an explicit alias/migration or a declared resnapshot.
- Removal, requiredness tightening, type change, cardinality change, reference-target change, and identity change are incompatible unless a specific migration proves otherwise.
- Unknown versions fail closed.
- Readers deploy before writers, and old writers remain supported during the declared overlap.
- Rollback disables new writers; it does not silently reinterpret existing projection data.

## Implementation tasks

1. Load the representative graph into Datomic and Dartascript instances with deliberately different EID allocations.
2. Formulate logical facts from Datomic and compare them with the expected Dartascript logical projection.
3. Assert no EID, raw transaction datom, or physical schema leaks into any boundary fixture.
4. Add compatibility manifests and supported-version negotiation fixtures.
5. Test optional addition, identity-preserving rename, removal, requiredness change, reference-target change, type change, cardinality change, and identity change.
6. Test readers-before-writers overlap, rollback to an older writer, migration failure, and fresh-snapshot fallback.
7. Publish fixture-update, compatibility, migration, snapshot, and rollback procedures.

## Tests

- Equivalent logical facts and relationship queries from different EID allocations.
- Native references become logical IDs at boundaries and resolve correctly on the client.
- Additions, updates, retractions, tombstones, and invisible transaction ranges remain representable.
- Optional additions are accepted under the declared compatibility range.
- Incompatible changes are rejected or require a fresh snapshot.
- Rename behavior preserves identity only through the declared migration path.
- Manifest and registry checksums detect undeclared changes.
- JVM and ClojureDart produce the same parity and compatibility results.

## Failure scenarios

- Equivalent graphs differ because of EID or transaction allocation.
- A retraction creates a ghost entity.
- A physical adapter weakens logical uniqueness or cardinality.
- A backend-only or local-only fact enters the projection.
- Mixed versions are accepted without a compatibility decision.
- Rollback leaves a client projection that the older writer cannot interpret.
- A migration changes logical identity or silently loses a reference.

## Observability

Record adapter kind, registry/manifest checksum, contract versions, fact counts, parity result, migration/resnapshot reason, and stable failure code. Never log sensitive fact values indiscriminately.

## Exit criteria

- Datomic and Dartascript pass the same representative logical fixtures.
- No storage EID or physical schema crosses a boundary.
- All supported and incompatible changes have tested behavior.
- Migration, rollback, and fresh-snapshot procedures are documented.
- The parent Step 02 completion gate can be marked complete.
