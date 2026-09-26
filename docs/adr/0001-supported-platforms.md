# ADR 0001: Supported Flutter platforms

- Status: Accepted
- Date: 2026-09-26

## Decision

The rebuild supports Android, iOS, web, Windows, macOS, and Linux from the foundation onward.

Flutter 3.44.2 and Dart 3.12.2 are the minimum development versions for this foundation. CI must compile portable ClojureDart tests on a platform-independent runner. Platform packaging jobs may be split by host because iOS and macOS require macOS, Windows requires Windows, and Linux desktop requires Linux.

## Consequences

- Domain and application code may not assume a browser or mobile-only API.
- Platform-specific integrations require adapters and at least one test on their target host.
- A clean checkout must remain generatable/buildable for every target, but the foundation tracer is headless and does not require six emulator runs.
