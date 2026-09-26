# 02.3 — Validation and Canonical JSON

Parent: [Logical Schema and Contracts](../PLAN.md)  
Depends on: [Logical Wire Contracts](../02-logical-wire-contracts/PLAN.md)

## Objective

Make shared validation strict and prove that tagged JSON produces identical cross-runtime values and canonical hash inputs.

## Scope

Extend `domain/src/smerf/domain/codec.cljc` and shared validation. Tagged JSON remains the transport and canonicalization format from ADR 0004. EDN is permitted only for Clojure-side fixtures or configuration.

Canonical encoding must define:

- tagged keywords, maps, vectors, lists, sets, nil, booleans, strings, finite integers, and finite doubles;
- deterministic map and unordered-collection ordering;
- canonical lowercase hyphenated UUID strings;
- rejection of unknown tags, unsupported values, malformed values, non-finite numbers, and unsupported codec versions.

Canonical command hashing uses canonical encoded bytes of normalized payload plus contract/version metadata. Runtime `pr-str`, map iteration order, native UUID objects, and implementation-specific hash functions are not valid canonicalization inputs.

## Implementation tasks

1. Add shared validation result constructors and deterministic error ordering.
2. Validate strict envelope keys, required values, UUID fields, enums, numbers, collection shapes, and registry constraints.
3. Extend tagged JSON encoding/decoding for registry and logical-fact fixtures.
4. Define normalized payload preparation for later command hashing.
5. Produce canonical bytes and a portable digest-input fixture on both runtimes.
6. Add malformed and unknown-version cases.

## Tests

- Identical accepted values, rejected values, paths, codes, and error ordering on JVM and ClojureDart.
- Byte-for-byte equality for representative values and normalized command payloads.
- Round trips preserve keyword, set, list, vector, map, nil, integer, and finite-double semantics.
- UUID fields reject uppercase, malformed, and non-canonical representations.
- Unknown keys, tags, versions, and non-finite numbers fail closed.

## Failure scenarios

- JVM and ClojureDart encode the same value differently.
- Map or set ordering changes canonical bytes.
- A ratio, NaN, infinity, or unsupported value is silently converted.
- Validation errors depend on map iteration order.
- Hash input omits contract/version metadata or includes unstable runtime data.

## Exit criteria

- Shared validation is strict and deterministic.
- Canonical tagged-JSON bytes and digest inputs match across runtimes.
- Existing codec tests remain green and cover the new contract fixtures.
- Step 05 can use the canonicalization contract without defining a second serializer.
