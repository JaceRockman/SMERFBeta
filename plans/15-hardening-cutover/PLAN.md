# Step 15 — Hardening and Cutover

Parent: [ClojureDart Rebuild Plan](../CLOJUREDART_REBUILD_PLAN.md)  
Depends on: [Step 14](../14-authoring-journeys/PLAN.md)

## Objective

Make the rebuilt system secure, recoverable, accessible, performant, observable, and demonstrably equivalent for accepted journeys; then cut over with explicit go/no-go and rollback gates.

## Non-goals

- New product capabilities, offline/optimistic/collaborative mutation, or premature multi-region work.
- Removing legacy code before rollback and stabilization gates pass.

## Inherited decisions

- Datomic is authoritative/restorable; synchronized caches are disposable.
- Snapshot replacement is universal recovery.
- Contract compatibility overlaps deployments.
- Cutover cannot weaken identity, auth, sync, or durability invariants.

## Interfaces and operational contracts

- Cache classification/purge matrix.
- Supported protocol/projection/storage version matrix.
- SLOs for commands, sync, snapshots, workflows, and startup.
- Backup/restore verification, service health/readiness, release manifest, and cutover record.

## Artifacts

- Security/retention configuration.
- Accessibility/responsive suites.
- Metrics, dashboards, alerts, traces, and runbooks.
- Backup/restore and migration rehearsal.
- Load/snapshot harnesses, parity report, feature flags, and release certification.

## Implementation tasks

1. Freeze accepted functionality.
2. Finalize storage protection, retention, purge, and account switching.
3. Threat-model auth, import, transport, storage, logging, and supply chain.
4. Complete accessibility and responsive behavior.
5. Establish measured SLOs and load/fault/soak tests.
6. Set snapshot/replay/status/resnapshot limits.
7. Complete telemetry and runbooks.
8. Execute backup and clean-environment restore.
9. Rehearse data migration or clean rebuild according to Step 01.
10. Run parity/platform certification.
11. Canary with legacy retained and one authoritative mutation path.
12. Evaluate gates, stage rollout, observe stabilization, then retire legacy.

## Failure scenarios

- Cross-account cache leakage, unusable backup, oversized snapshot, growing sync/workflow lag, contract mismatch, stale unauthorized facts, accessibility failure, divergent writes, degraded rollout, or unreadable rollback.

## Tests and observability

- Purge/isolation/security/accessibility/responsive suites.
- Load, soak, restart, and fault injection.
- Backup/restore and snapshot/replay equivalence at production scale.
- Upgrade/rollback compatibility and full journeys on every platform.
- Dashboards for command, Datomic, workflow, sync, cursor lag, replay/resnapshot, crash, and startup health.

## Migration and rollback

- Verify a pre-cutover backup.
- Keep changes backward-readable through rollback.
- Prefer feature-flag/client-routing rollback over DB restore.
- Never dual-write independent authoritative stores.
- Retain legacy source/builds through stabilization and old-client drain.

## Go/no-go gates

1. Functional parity: all accepted journeys pass; no severity-1/2 correctness defects.
2. Data/sync correctness: snapshot equals replay, no EIDs, purge/revocation/restart tests pass.
3. Security/privacy: high-risk findings closed or accepted; storage/logging/auth/import suites pass.
4. Recovery: backup/restore, workflow/sync restart, and rollback rehearsals pass.
5. Performance: p95/p99 SLOs and snapshot/replay resource limits pass with headroom.
6. Accessibility/platforms: core journeys and crash/startup targets pass.
7. Operations: dashboards, alerts, ownership, runbooks, and incident exercise exist.
8. Canary: observation window stays within approved error/latency/crash/resync limits.
9. Full cutover: gates 1–8 have evidence/approval and rollback remains active.
10. Legacy retirement: stabilization and old-client drain complete.

## Exit criteria

- Every gate has stored evidence and named approval.
- Backup, restore, rollback, replay, resnapshot, and restart exercises pass.
- All journeys meet SLO/security/accessibility requirements.
- Legacy traffic reaches zero before React Native/shadow-cljs removal.

## Required nested plans

- Security/cache/purge.
- Accessibility/responsive certification.
- Performance/capacity.
- Observability/runbooks.
- Backup/restore/migration.
- Parity/canary.
- Cutover/rollback/legacy retirement.
