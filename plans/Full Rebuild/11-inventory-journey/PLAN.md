# Step 11 — Inventory Journey

Parent: [ClojureDart Rebuild Plan](../CLOJUREDART_REBUILD_PLAN.md)  
Depends on: [Step 09](../09-first-write-journey/PLAN.md)

## Objective

Browse/filter campaign resources, inspect details/actions, and authoritatively add, remove, or update character-owned resource quantities.

## Non-goals

- Resource-definition authoring, final resource/ruleset language, trading, crafting, encumbrance, or optimistic mutation.

## Inherited decisions

- `ResourceDefinition` is catalog content; `CharacterResource` is ownership/quantity.
- `ResourceUsage v1` preserves the interpretation seam.
- Search/filter/sort state is local.
- Quantities and character scoping are authoritative rules.

## Interfaces and contracts

- Queries for campaign catalog, details, linked actions, and character inventory.
- Add, set-quantity, and remove intents.
- One owned instance per character/resource pair.
- Canonical resource-type keywords and normalized numeric quality/power.

## Current behavior mapped

- Preserve catalog filtering/sorting/details/properties/flavor/actions and character inventory controls.
- Fix mixed values, raw EID allocation, global inventory queries, type-label inconsistency, and unscoped resources.
- Defer resource creation to Step 14.

## Implementation tasks

1. Normalize seed types, quality/power, properties, and duplicates.
2. Define resource/usage/ownership contracts and stable IDs.
3. Extend projection closure to properties/actions.
4. Implement catalog/detail/inventory queries.
5. Implement authorized add/update/remove with transaction-time uniqueness/revision and idempotency.
6. Build catalog, details, selection, inventory, filters, and command lifecycle.
7. Exercise cross-character isolation, concurrent add/update, removal, and auth changes.

## Failure scenarios

- Cross-campaign resource/character, duplicate add, invalid/stale quantity, unavailable resource, hidden action, unresolved retraction, or revoked access.

## Tests and observability

- Enum/numeric normalization and scoped query tests.
- Authorization/isolation, concurrent add, stale quantity, and idempotency.
- Ref/retraction/tombstone sync tests.
- Controller/widget and complete add/update/remove journeys.
- Record logical IDs, operation, quantity metadata, policy, transaction/range, latency, and rejection type.

## Migration and rollback

Run report-first normalization and reject ambiguous duplicates. Enable reads before mutations. Roll back commands and rebuild client projections; never dual-write.

## Exit criteria

- Character inventories are isolated.
- Concurrent adds create one owned instance.
- Quantity remains valid except explicit removal.
- Catalog order/filtering is deterministic.
- Linked actions obey authorization.
- Replay and snapshot converge.

## Candidate nested plans

- Resource normalization.
- Catalog/details.
- Inventory commands.
- Sync/concurrency acceptance.
