# Step 07 — Frontend Lifecycle and Navigation

Parent: [ClojureDart Rebuild Plan](../CLOJUREDART_REBUILD_PLAN.md)  
Depends on: [Step 06](../06-synchronization/PLAN.md)

## Objective

Integrate persisted stores, synchronization, command tracking, intent dispatch, and Dartascript-driven navigation through explicit frontend state machines.

## Non-goals

- Full feature UI, outbound URL synchronization, offline commands, optimistic facts, or a broad state framework.

## Inherited decisions

- Navigation is local Dartascript state.
- Incoming URLs dispatch local intents; in-app navigation does not mutate URLs.
- Views never call routers or databases directly.
- Lifecycle events bypass the intent registry.
- Startup precedence is valid deep link, cached navigation, then default.

## Interfaces and contracts

- Intent dispatcher, remote client, local registry/executor/transactor.
- Pure lifecycle transition returning next state and effects.
- Startup/sync/reconnect and command-lifecycle states.
- Navigation intents: push, replace, back, reset, and select-tab.
- Pending deep-link and validated navigation projections.

## Artifacts

- Frontend app/intents/lifecycle modules.
- Local navigation schema/actions.
- Minimal view host, fallback view, platform-back, and deep-link adapters.

## Implementation tasks

1. Define navigation schema, stack invariants, parameters, and scope keys.
2. Register local navigation and the Step 05 remote intent.
3. Implement pure startup, sync, reconnect, resume, and command transitions.
4. Implement effect runners for cache, connection, replay/snapshot, persistence, timers, and submission.
5. Restore stores with device/principal/scope checks.
6. Apply startup precedence and hold links pending until auth/data readiness.
7. Implement database-driven view selection and platform back.
8. Correlate direct results and sync IDs in either arrival order.
9. Handle stale connection generations, gaps, auth loss, and account switching.
10. Prove zero outbound URL/history mutation.

## Failure scenarios

- Cache/scope mismatch or connection loss during recovery.
- Sync-before-response, delayed sync, or uncertain response.
- Unauthorized/missing deep-link target or dangling cached navigation.
- Invalid back stack, stale generation, account switch leakage.
- Local handler attempts synchronized writes.

## Tests and observability

- Transition tables with duplicate/stale/out-of-order events.
- Cache/reconnect/resume/replay/resnapshot paths.
- All command response/sync orderings and no-visible-change completion.
- Navigation invariants, deep-link precedence/denial/fallback, platform back.
- Log lifecycle transitions, generation, effects, cursor comparison, command state, navigation, and fallback reason.

## Migration and rollback

Expose the new host behind a development entry point/flag. Store navigation under versioned keys. Roll back to legacy UI; discard synchronized cache and retain only compatible scoped local data.

## Exit criteria

- Startup deterministically resolves deep link/cache/default.
- Resume and reconnect recover correctly.
- Command lifecycle handles either response/sync ordering.
- Local actions cannot modify synchronized data/cursor.
- Back/navigation invariants and safe fallback hold.
- The skeleton can host Step 08 without replacing these foundations.

## Candidate nested plans

- Navigation schema/actions.
- Lifecycle machines.
- Effect runners.
- View host/platform adapters.
