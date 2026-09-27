# Step 05 — Datomic Command Proof

Parent: [ClojureDart Rebuild Plan](../CLOJUREDART_REBUILD_PLAN.md)  
Depends on: [Step 04](../04-authorization-scope/PLAN.md)

## Objective

Implement one production-path command from ingress to atomic Datomic commit and reusable direct response, proving authorization, idempotency, and transaction-time consistency.

## Non-goals

- Synchronization/fanout, durable orchestration, generic CRUD, or optimistic mutation.
- Implementing consistency policies not needed by the selected command.

## Inherited decisions

- Intents request outcomes, not transactions.
- Actions return logical `ActionPlan`s and never transact/fan out.
- Datomic rechecks state-sensitive rules.
- Mutation, command record, payload hash, and result commit atomically.

## Interfaces and contracts

- One narrow initial intent and typed results/errors.
- `IntentIngress`, `ActionRegistry`, `ActionExecutor`, `AuthoritativeQuery`, and `AuthoritativeTransact`.
- Idempotency key `[account-logical-id, command-id]`.
- Versioned canonical payload hashing.

## Artifacts

- Backend ingress/action/query/transaction modules.
- Datomic command/idempotency schema.
- Transport endpoint and integration fixture.

## Implementation tasks

1. Select the command and freeze payload, authorization, result, and one consistency policy.
2. Add shared validation and remote registry entry.
3. Decode, authenticate, authorize, and canonicalize/hash.
4. Return an existing matching idempotent result before execution.
5. Query facts and construct a logical plan.
6. Enforce policy/preconditions in the transaction.
7. Atomically commit mutation, command record, hash, result, and safe tracing metadata.
8. Return accepted/rejected/conflict/mismatch directly.
9. Test concurrent duplicate submissions and restart retries.

## Failure scenarios

- Malformed/unsupported request, denial, missing/tombstoned entity.
- Same command ID with same or changed payload.
- State changes between read and transaction.
- Datomic timeout or response loss after commit.
- Undeclared/unsupported consistency policy.

## Tests and observability

- Validation, authorization, canonical-hash, duplicate, mismatch, and concurrency tests.
- Atomicity assertion: mutation and command record always coexist.
- Restart retry returns the original result.
- Trace command/correlation IDs, policy, transaction ID, outcome, and latency.

## Migration and rollback

Apply additive schema first and route only this command through the new pipeline. Roll back by disabling ingress while retaining command records and readable schema.

## Exit criteria

- One real command completes through the production backend path.
- Concurrent duplicates create one outcome.
- Payload mismatch and transaction conflict are deterministic.
- Restart returns the committed result.
- No EID, sync, or fanout dependency appears in command execution.

## Candidate nested plans

- Command contract/action plan.
- Datomic transaction adapter.
- Atomic idempotency.
- Ingress/direct response.
