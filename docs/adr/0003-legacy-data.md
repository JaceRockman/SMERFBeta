# ADR 0003: Legacy persisted-data disposition

- Status: Accepted
- Date: 2026-09-26

## Decision

The rebuilt system starts with a fresh authoritative database. Existing prototype databases and client caches are not migrated in place.

Meaningful rules and lore are preserved as reviewed, versioned seed data. Seeds use the new logical schema and stable logical IDs; they do not copy legacy storage entity IDs or navigation/session records.

## Consequences

- The old application remains available as a read-only behavioral reference during the rebuild.
- Seed import must be repeatable and versioned before cutover.
- User-generated prototype records require manual recreation unless a later, separately approved import is justified.
- Rollback means returning to the untouched legacy application, not downgrading the new database.
