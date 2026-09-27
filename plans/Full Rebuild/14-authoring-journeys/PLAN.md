# Step 14 — Authoring Journeys

Parent: [ClojureDart Rebuild Plan](../CLOJUREDART_REBUILD_PLAN.md)  
Depends on: [Step 13](../13-durable-workflow/PLAN.md)

## Objective

Add validated authoring in dependency order: campaign, world, ruleset, resource definition, action definition, then character/associations.

## Non-goals

- Generic CRUD, offline/optimistic/collaborative editing, marketplace/plugins, generalized composition language, or hard deletion of logical identities.

## Inherited decisions

- UI sends intents; server assigns immutable IDs and authorizes.
- Edits use explicit consistency/revision policies.
- Deletion uses tombstones.
- Context-free validation is shared; current-state rules are backend-only.
- Every result reaches clients through log-driven sync.

## Interfaces and contracts

For each entity family define create/update/archive intents, typed results/errors, required roles, consistency/idempotency, revision/tombstone rules, projection behavior, and migrations.

## Artifacts

- Entity-specific contracts, handlers, transactions, migrations, projection rules, forms/controllers/views, and parity fixtures.

## Implementation tasks

1. Require a command declaration before each slice: payload, role, policy, projection, migration, and errors.
2. Implement contract/validation fixtures.
3. Implement contextual validation and plans.
4. Enforce transaction-time policy, idempotency, revision, and reusable result.
5. Prove projection difference/referential closure.
6. Build accessible local-draft forms and explicit command lifecycle UI.
7. Complete each vertical slice through sync/rerender before its dependents.
8. Implement campaign authoring.
9. Implement world hierarchy authoring with cycle prevention.
10. Implement ruleset configuration/reference authoring.
11. Implement resource then action authoring.
12. Implement character authoring and resource/action associations.
13. Add archive behavior only after inbound-reference cleanup tests.

## Failure scenarios

- Duplicate/stale/unauthorized command, cross-campaign reference, tombstoned target, hierarchy cycle, incompatible ruleset/resource/action relation, response loss, delayed sync, or authorization loss while editing.

## Tests and observability

- Cross-runtime contract fixtures and role matrix.
- Concurrent-write/idempotency/projection/tombstone tests.
- Form validation/rejection/uncertain/delayed-sync UI.
- One end-to-end test per family plus complete authored graph from fresh snapshot.
- Audit-safe metrics for entity/revision, policy, outcome, conflicts, validation, commit, and sync latency.

## Migration and rollback

Add readers/schema before writers and gate each command family independently. Disable writes on rollback while retaining readable committed data. Never reuse/retract logical IDs.

## Exit criteria

- All six families can be created/edited through production paths.
- Every command declares authorization, consistency, idempotency, projection, and migration.
- Concurrent tests enforce policies.
- Fresh snapshot equals replayed authored graph.
- Family flags can disable writes independently.

## Required nested plans

- Campaign authoring.
- World hierarchy authoring.
- Ruleset authoring.
- Resource authoring.
- Action authoring.
- Character/association authoring.
- Tombstones and full parity.
