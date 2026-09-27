# Step 04 — Authorization and Scope Foundation

Parent: [ClojureDart Rebuild Plan](../CLOJUREDART_REBUILD_PLAN.md)  
Depends on: [Step 03](../03-dartascript-persistence-reactivity/PLAN.md)

## Objective

Define principal/account identity, campaign authorization, synchronization scopes, authorization epochs, and deterministic visibility before commands or sync delivery.

## Non-goals

- Selecting the final identity provider.
- Complete fine-grained policy for future features.
- Client-side filtering of global deltas.

## Inherited decisions

- The backend authorizes every command and projection.
- Authorized projection is `P(database-basis, scope)`.
- Scope binds principal/account, projection parameters, schema version, authorization epoch, and expiry.
- Unprovable visibility changes rotate scope and resnapshot.

## Interfaces and contracts

- `Authenticator`, `Authorizer`, and `ScopeResolver`.
- Principal, account, membership role, denial reason, scope descriptor, and invalidation event.
- Deterministic fake authenticator and clock.

## Artifacts

- `backend/src/smerf/backend/auth/`
- Campaign membership roles.
- Scope canonicalization and visibility-affecting attribute registry.
- Durable authorization epoch/invalidation records.
- Multi-principal fixtures.

## Implementation tasks

1. Define principal/account and initial campaign roles.
2. Define permissions needed by the first read/write journeys.
3. Catalog visibility-affecting attributes and referential closure.
4. Define scope ID, epoch, expiry, and rotation rules.
5. Implement deterministic fake authentication and authoritative authorization queries.
6. Persist authorization epoch changes.
7. Terminate/reject stale streams and replay requests.
8. Prove distinct projections for two principals and complete revocation.

## Failure scenarios

- Expired/malformed credentials or unauthorized campaign access.
- Membership changes during a command or stream.
- Replay under a stale epoch.
- Nondeterministic scope IDs or leaked referential closure.
- External identity change fails to produce durable invalidation.

## Tests and observability

- Authentication and command authorization matrix.
- Grant/revocation over pre-existing graphs.
- Epoch expiry, restart durability, stream termination, and old-scope rejection.
- Compare results with `P(basis, scope)`.
- Log safe principal/account IDs, role, scope, epoch, decision, and invalidation cause.

## Migration and rollback

Introduce new endpoints deny-by-default. Roll back by disabling ingress, never by accepting stale scopes. Epochs are monotonic.

## Exit criteria

- Unauthorized actions stop before execution.
- Two principals receive correct distinct projections.
- Revocation survives restart, terminates streams, and rejects old scopes.
- All initial visibility-affecting attributes are registered.

## Candidate nested plans

- Identity and roles.
- Scope/projection contract.
- Durable invalidation.
- Multi-principal proof.
