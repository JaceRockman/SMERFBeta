# Step 12 — Roll Journey

Parent: [ClojureDart Rebuild Plan](../CLOJUREDART_REBUILD_PLAN.md)  
Depends on: [Step 11](../11-inventory-journey/PLAN.md)

## Objective

Build and execute character-linked actions using stats, owned resources, modifiers, splinters, and pool transformations with server-authoritative randomness and reproducibility metadata.

## Non-goals

- Action authoring, client-authoritative/offline rolls, final resource language, or encounter orchestration.

## Inherited decisions

- Builder drafts are local; definitions/results are authoritative.
- Results are append-only and idempotent.
- Backend validates current character/ruleset/resource context.
- Retrying one command never rerolls.

## Interfaces and contracts

- Queries for character actions, definition, builder context, and history.
- Local draft intents and remote `:roll/execute`.
- Versioned `RollResult` containing normalized inputs, pools, dice, outcome, algorithm/provider version, reproducibility metadata, transaction, and command IDs.

## Current behavior mapped

- Preserve action grouping, stat/resource selection, dice/flat modifiers, splinters, split/merge, careful/reckless options, formatting, and rolling.
- Fix all-actions-on-character, global resources, hard-coded domain EIDs, client randomness, console-only results, and save stub.

## Implementation tasks

1. Extract current calculations into golden fixtures and resolve ambiguities.
2. Freeze algorithm v1, bounds, target/tie semantics, and reproducibility contract.
3. Normalize action definitions to logical refs and correct character/resource scoping.
4. Implement local draft schema/intents.
5. Implement authoritative roll-plan validation and injected randomness.
6. Atomically append result/idempotency/hash/reusable response.
7. Synchronize/correlate result and render command/result states.
8. Exercise timeout retry, restart, replay, and snapshot equivalence.

## Failure scenarios

- Unlinked action, stale/invalid stat/resource/ruleset, unowned resource, invalid modifiers/splinters/pools, excessive pool, provider failure, lost response, duplicate reroll, or unknown algorithm.

## Tests and observability

- Cross-runtime golden fixtures and pool properties.
- Deterministic random-provider tests.
- Authorization/scoping, append-only idempotency, and retry tests.
- Draft-isolation, sync-correlation, widget, and end-to-end execution tests.
- Record versions, pool/die counts, provider latency, transaction/range, and result latency without exposing uncommitted seeds.

## Migration and rollback

Version definitions/results/algorithms. Reject unresolved legacy EIDs. Feature-flag execution separately from reading. Rollback disables new rolls without deleting or reinterpreting results.

## Exit criteria

- Only linked actions and owned resources appear.
- Golden inputs produce fixture-identical results.
- A retried command cannot create new dice/result.
- Persisted results contain sufficient audit/reproduction metadata.
- Drafts never alter synchronized facts/cursor.
- Replay/snapshot render identically; production uses no client randomness.

## Candidate nested plans

- Algorithm v1.
- Local builder/draft.
- Authoritative execution/randomness.
- Result sync/retry acceptance.
