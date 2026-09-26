# Step 13 — Durable Seed-Import Workflow

Parent: [ClojureDart Rebuild Plan](../CLOJUREDART_REBUILD_PLAN.md)  
Depends on: [Step 12](../12-roll-journey/PLAN.md)

## Objective

Use one concrete asynchronous workflow—importing a versioned world/ruleset seed bundle—to prove durable root/capability orchestration, atomic state/effect persistence, retries, timeout, duplicate handling, restart recovery, and tracing.

## Non-goals

- Generic ETL/workflow framework, plugins, arbitrary mappings, distributed scheduling, or post-publication compensation.

## Inherited decisions

- Workflow transitions are pure and state/effect requests persist atomically.
- Effects execute at least once with stable idempotency keys.
- Staging is invisible until atomic publication.
- Direct response accepts the workflow; synchronized facts report durable progress/results.

## Interfaces and contracts

- Start/cancel intents.
- Seed bundle manifest/checksum/version and workflow state/event/effect contracts.
- States: queued, fetching, validating, staging, publishing, succeeded, retry-scheduled, failed, timed-out, cancelled.
- Idempotency for start, each effect/batch, and publication.

## Artifacts

- Shared import/workflow contracts.
- Seed-import root/capability transitions and durable workflow/effect store.
- Object/file retrieval adapter.
- Staging/publication/cleanup transactions.
- Progress projection/controller and representative bundles.

## Implementation tasks

1. Freeze one representative immutable bundle.
2. Define state machine, retryable/terminal errors, attempts, and deadlines.
3. Test transitions before effect runners.
4. Persist state/effect requests atomically and lease effects.
5. Fetch with checksum/size/content constraints.
6. Validate versions, IDs, refs, cycles, and authorization.
7. Stage idempotent batches outside normal projections.
8. Publish atomically after rechecking authorization/compatibility.
9. Support pre-publication cancellation and cleanup.
10. Recover expired leases/restarts and expose progress through normal sync.

## Failure scenarios

- Missing/corrupt/oversized bundle, invalid version/refs/IDs, authorization loss, crash around effect completion, duplicate/late event, timeout, staging/publication conflict, restart, cancellation race, or fanout loss.

## Tests and observability

- Cross-runtime manifest fixtures and state-machine/property tests.
- Atomic workflow/effect persistence and idempotent staging/publication.
- Crash injection at every boundary and staged-fact invisibility.
- End-to-end restart/import/sync/render test.
- Metrics for workflow states, queue age, retries, timeouts, bundle/staging size, publication latency, and stuck work.

## Migration and rollback

Deploy schema/contracts before ingress and gate starts by account/campaign. Disable new starts on rollback; complete/cancel active work. Never destructively compensate after publication.

## Exit criteria

- One production-shaped bundle publishes exactly once.
- Duplicate/restarted execution creates no duplicate entities.
- Staging is never visible.
- Retry/timeout/cancellation terminate predictably.
- One trace follows ingress through client application.
- No generic workflow abstraction exceeds this workflow’s demonstrated needs.

## Candidate nested plans

- Bundle contract.
- Workflow store/machine.
- Retrieval/validation/staging.
- Publication/cancellation.
- Progress/tracing/restart certification.
