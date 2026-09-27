# Slice 4 — Campaign Browsing Frontend

Parent: [MVP Rebuild Plan](../MVP_REBUILD_PLAN.md)  
Depends on: [Slice 3](../03-snapshot-delta-sync/PLAN.md)

Status: Not started

## Objective

Replace the Flutter placeholder with a usable read journey from campaign
selection to ruleset, world, and character details.

## Interfaces used

- `ProjectionQuery` supplies all synchronized and local view data.
- `LocalTransact` changes navigation and local selections.
- `SyncApplier` remains behind startup/polling code and is not called by views.

## Files

- `frontend/src/smerf/frontend/main.cljd`
- `frontend/src/smerf/frontend/app/system.cljd`
- `frontend/src/smerf/frontend/app/navigation.cljc`
- `frontend/src/smerf/frontend/ui/campaigns.cljd`
- `frontend/src/smerf/frontend/ui/campaign.cljd`
- `frontend/src/smerf/frontend/ui/ruleset.cljd`
- `frontend/src/smerf/frontend/ui/world.cljd`
- `frontend/src/smerf/frontend/ui/character.cljd`
- focused controller/query and widget tests

Keep the UI folder structure shallow until repeated widgets justify another
layer.

## Implementation steps

- [ ] Create a small application composition root that injects
  `ProjectionQuery`, `LocalTransact`, and sync startup/polling dependencies.
- [ ] Define local navigation state for:
  - campaign list;
  - selected campaign overview;
  - ruleset;
  - world;
  - character list;
  - character detail.
- [ ] Implement navigation operations through `LocalTransact`.
- [ ] Add `ProjectionQuery` functions returning view-ready maps for each view.
- [ ] Implement startup states: loading snapshot, ready, empty, and error.
- [ ] Build a campaign-list screen from Dartascript query results.
- [ ] Build the campaign overview with links to its ruleset, world, and
  characters.
- [ ] Build simple ruleset and world reference screens.
- [ ] Build character list and read-only character detail screens.
- [ ] Add platform back behavior using the local navigation state.
- [ ] Add retry for startup/sync HTTP failure.
- [ ] Keep styling in a small shared theme; extract widgets only after reuse is
  visible.

## Acceptance

- Launching against a seeded backend loads and displays the campaign.
- A user can navigate campaign → ruleset/world/characters → character.
- Restarting the UI rebuilds visible state from the backend snapshot.
- Views do not call HTTP, `SyncApplier`, or Dartascript directly.
- Navigation changes do not alter synchronized facts.
- Widget tests cover loading, error, campaign list, and character detail.

## Explicit deferrals

- Persisted navigation restoration
- Deep links and browser-history synchronization
- Full responsive design and desktop-specific layouts
- Complete design-system/component hierarchy
- Golden tests and accessibility hardening
- Search, filtering, sorting, and pagination
