# ADR 0004: Tagged JSON wire codec

- Status: Accepted
- Date: 2026-09-26

## Context

The tracer must preserve Clojure values across JVM and ClojureDart. Plain JSON loses keywords, set/list distinctions, map keys, and integer intent. Transit is natural on the JVM but has no maintained ClojureDart implementation in the pinned toolchain; adopting it would require a new protocol implementation before product work.

## Decision

Use UTF-8 JSON with an explicit tagged-value layer. The MVP represents nil,
booleans, strings, finite integers/doubles, keywords, vectors, lists, sets, and
maps. Boundary UUIDs are canonical lowercase hyphenated strings rather than
runtime UUID objects.

Map entries and unordered collections receive a deterministic ordering before encoding. JVM JSON encoding disables slash escaping so the canonical JSON bytes match Dart's encoder. Decoders reject unknown tags, malformed values, non-finite numbers, and non-canonical UUIDs in identifier fields.

## Consequences

- JSON tooling remains native on both runtimes and easy to inspect.
- The tag vocabulary is a protocol contract. The MVP deploys compatible client
  and backend code together; incompatible tag changes are a Full Rebuild
  concern.
- Transit can be reconsidered only when a supported ClojureDart implementation exists and measured benefits justify migration.
