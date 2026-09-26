# ADR 0002: Datomic Cloud deployment and log API

- Status: Accepted
- Date: 2026-09-26

## Decision

Production targets Datomic Cloud through the synchronous Client API. Local and automated integration tests will use a compatible local adapter when the Datomic command slice is introduced.

The required synchronization primitives are available:

- `datomic.client.api/tx-range` reads an inclusive-start, exclusive-end transaction range and returns each transaction's basis `:t` and asserted/retracted datoms.
- `datomic.client.api/history` exposes assertions and retractions across time.
- Immutable database values and `as-of` support basis-consistent projection and identity resolution.

The production client dependency is pinned to `com.datomic/client-cloud` 1.0.137 when first exercised. It is not added to the portable domain or frontend classpaths.

## Consequences

- The backend owns every Datomic API call.
- Synchronization checkpoints use transaction `t`; storage entity IDs never cross a boundary.
- Log retention, regeneration limits, and Cloud topology/capacity remain deployment work for the synchronization and hardening steps.

## References

- https://docs.datomic.com/reference/log.html
- https://docs.datomic.com/client-api/datomic.client.api.html
