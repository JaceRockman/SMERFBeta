# Step 10 — Lore and Rules Journey

Parent: [ClojureDart Rebuild Plan](../CLOJUREDART_REBUILD_PLAN.md)  
Depends on: [Step 08](../08-first-read-journey/PLAN.md)

## Objective

Browse campaign-scoped world lore and rules references with typed traversal, safe markdown links, complete projections, and restorable local navigation.

## Non-goals

- Authoring, marketplace/public sharing, external HTML, graph visualization, or bidirectional URL history.

## Inherited decisions

- UI concept becomes `World`; nested lore uses typed `WorldEntry`.
- Selection paths/page positions are local facts.
- Markdown links dispatch validated navigation intents.
- Projection closure must include every visible target needed to render/navigate.

## Interfaces and contracts

- `World`, `WorldEntry`, `Ruleset`, and `RulesSection`.
- Queries for campaign worlds, entry/details/children/ancestry, and rules reference.
- Local open/follow/set-page intents.
- Typed logical markdown targets and safe failure result.

## Current behavior mapped

- Preserve searchable/grouped world lists, parent/child navigation, markdown details, campaign/global rules selection, complexity, and five rules pages.
- Replace active realm/subrealm records, name lookup, fixed page width, and ambiguous recursive queries.

## Implementation tasks

1. Normalize legacy realms into worlds/entries with stable IDs.
2. Split rules prose into ordered stable sections.
3. Define graph cycle/multiple-parent policy and link syntax.
4. Extend projection closure.
5. Implement world/rules queries and local navigation restoration.
6. Build world list/tree/details/markdown and rules picker/pager.
7. Handle missing/unauthorized links, empty sections, scope changes, and fallback.

## Failure scenarios

- Cycles, dangling/hostile links, omitted projection targets, removed saved target, reordered rules, or scope rotation while open.

## Tests and observability

- Import, graph traversal, cycle, and projection closure tests.
- Markdown parser/security tests.
- Navigation restoration/fallback and widget tests.
- End-to-end internal-link traversal after snapshot/replay.
- Record query time, target logical ID, link outcome, normalization, and omitted references.

## Migration and rollback

Idempotently import seed content with legacy-to-logical report. Keep legacy content read-only during validation. Roll back routes and disposable projection, not logical identities.

## Exit criteria

- Visible refs resolve or are intentionally omitted.
- Internal links navigate by logical ID.
- Restored navigation safely falls back.
- Rules sections render deterministically.
- Replay/fresh snapshot agree and no realm-selection fact is synchronized.

## Candidate nested plans

- Legacy import.
- World graph/projection.
- Markdown navigation.
- Rules reference/restoration.
