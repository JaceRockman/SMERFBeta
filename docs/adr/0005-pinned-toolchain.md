# ADR 0005: Pinned foundation toolchain

- Status: Accepted
- Date: 2026-09-26

## Versions

- Clojure CLI: 1.12.4.1582
- Clojure: 1.12.6
- ClojureDart: release 0.9.20260917, commit `9f9cef5e0735026b667c28372e6967dcf43dc13e`
- Flutter: 3.44.2 stable
- Dart: 3.12.2
- Dartascript: commit `49d7566f388640239bf266fc128a0738298ffd16`
- org.clojure/data.json: 2.5.2
- cljfmt: 0.16.5
- clj-kondo: 2026.08.04
- Datomic Cloud client: 1.0.137 when introduced

Git dependencies use full commit SHAs. Maven dependencies use exact versions. Flutter's generated platform constraints and package lock are regenerated only as an explicit toolchain update.

## Dartascript status

Dartascript is currently a private, pre-release dependency owned by this project. Its pinned commit requires Dart 3.10.4 or newer, which is satisfied by Dart 3.12.2. It enters the frontend dependency graph when the persistence/reactivity slice exercises it; the foundation records the pin without introducing an unused dependency.

## Upgrade policy

Toolchain upgrades are isolated changes that run JVM tests, ClojureDart tests, dependency-boundary checks, and supported-target build checks before acceptance.
