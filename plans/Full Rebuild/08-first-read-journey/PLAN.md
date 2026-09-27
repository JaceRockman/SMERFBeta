# Step 08 — First Read Journey

Parent: [ClojureDart Rebuild Plan](../CLOJUREDART_REBUILD_PLAN.md)  
Depends on: [Step 07](../07-frontend-lifecycle-navigation/PLAN.md)

## Objective

Authenticate, select a seeded campaign, open a campaign character, and render ruleset-derived stats from the synchronized Dartascript projection.

## Non-goals

- Authoring, wounds/notes mutation, optimistic updates, generic read APIs, or a complete design system.

## Inherited decisions

- Campaign/character selection is local navigation state.
- Datomic is authoritative; only `SyncApplier` writes synchronized facts.
- Logical IDs cross boundaries.
- The UI reads through `ProjectionQuery` and explicit controllers.

## Interfaces and contracts

- Minimal `Campaign`, `Character`, `Ruleset`, and domain-stat projection.
- Queries for accessible campaigns, workspace, campaign characters, character sheet, and stat projection.
- Local selection/open/back intents.
- View state includes loading, stale, empty, denied, recovery, and success.

## Current behavior mapped

- Preserve campaign and character pickers, character header, and Stats/Resources/Actions/Notes structure.
- Preserve domain/skillbility/stats granularities and quality/power derivation.
- Replace raw campaign map, placeholder owner, active DB records, numeric EIDs, and `:title`/`:creature/name` inconsistency.

## Implementation tasks

1. Define minimal synchronized attributes/referential closure.
2. Seed one campaign, representative rulesets/domains, and one character with stable IDs.
3. Formulate authorized projections and bootstrap through the real snapshot path.
4. Implement campaign/character projection queries.
5. Register navigation intents.
6. Build campaign picker/workspace, character picker/header, and stats feature.
7. Render every asynchronous/permission state.
8. Exercise replay after a character/stat transaction.
9. Run the authenticated snapshot-to-widget journey.

## Failure scenarios

- No campaign/character, unauthorized deep link, missing ruleset/domain, malformed values, unsupported granularity, scope rotation, or revoked access while open.

## Tests and observability

- Cross-runtime fixtures and projection completeness/EID assertions.
- Query tests for all granularities.
- Snapshot/replay equivalence and navigation normalization.
- Controller/widget/end-to-end tests.
- Metrics for auth, scope, snapshot/replay, query time, selected logical IDs, rendered state, and recovery reason.

## Migration and rollback

Use idempotent fixed-ID seed migration and feature gating. Roll back views and discard client cache; no user-authored authoritative data is modified.

## Exit criteria

- A fresh client reaches character stats solely through authenticated snapshot data.
- Replay and fresh snapshot produce the same view.
- All stat granularities pass.
- Unauthorized access is safe and no EID crosses a boundary.
- Acceptance passes on all selected Flutter targets.

## Candidate nested plans

- Seed/projection contract.
- Queries/controllers.
- Layered UI.
- Integration/parity acceptance.
