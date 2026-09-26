# Step 09 — First Write Journey

Parent: [ClojureDart Rebuild Plan](../CLOJUREDART_REBUILD_PLAN.md)  
Depends on: [Step 08](../08-first-read-journey/PLAN.md)

## Objective

Update character wounds and notes end to end through authoritative commands, atomic idempotency, Datomic, regenerated sync ranges, and synchronized UI rerendering.

## Non-goals

- Optimistic/offline mutation, general character editing, collaborative merging, or durable orchestration for single transactions.

## Inherited decisions

- Direct responses change command lifecycle; sync changes facts.
- Wound logic is ruleset-dependent and transaction-time authoritative.
- One-step commands use action executors.

## Interfaces and contracts

- `:character/adjust-wound` and `:character/update-notes`.
- Wounds use transaction-function/atomic adjustment semantics.
- Notes use expected revision.
- Typed malformed, forbidden, missing, stale, ruleset, and idempotency failures.

## Current behavior mapped

- Preserve wound tiers/counters and rebalance semantics.
- Move direct client mutation into one authoritative transaction.
- Make notes editable and revision-aware.

## Implementation tasks

1. Freeze wound conversion/rebalance fixtures.
2. Define intents, results, errors, revisions, and authorization.
3. Implement transaction-time wound and note actions.
4. Commit mutation/idempotency/revision/result atomically.
5. Return direct lifecycle result and regenerate/apply sync.
6. Build wound controls and notes editing.
7. Exercise duplicates, conflicts, response/sync reordering, reconnect, and response loss.

## Failure scenarios

- Invalid severity/negative result, concurrent update, stale notes, changed ruleset, authorization loss, duplicate mismatch, commit with lost response, or missed final range.

## Tests and observability

- Property tests for wound invariants.
- Transaction concurrency, authorization, idempotency, and replay tests.
- Controller/widget states: pending, accepted, synchronized, rejected, uncertain, stale.
- Trace policy, logical IDs, transaction/range, and acceptance-to-rerender latency without note content.

## Migration and rollback

Backfill revisions deterministically; deploy readers before writers. Feature-flag writes. Roll back handlers only after clients stop sending the protocol.

## Exit criteria

- Duplicate requests produce one mutation/result.
- Concurrent wounds preserve invariants; stale notes reject deterministically.
- UI reaches synchronized only from matching sync/no-op completion.
- Fresh snapshot and replay agree.
- Client never writes character facts directly.

## Candidate nested plans

- Wound policy.
- Revisioned notes.
- Command lifecycle UI.
- Failure/recovery suite.
