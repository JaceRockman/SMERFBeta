# Slice 6 — Character Play

Parent: [MVP Rebuild Plan](../MVP_REBUILD_PLAN.md)  
Depends on: [Slice 5](../05-character-builder/PLAN.md)

Status: Not started

## Objective

Make a character usable at the table: display basic ruleset-derived values,
update wounds and notes, and execute a server-authoritative roll.

## Interfaces used

- `ProjectionQuery` provides character, ruleset, wounds, actions, and recent
  synchronized results.
- `IntentClient` submits note, wound, and roll intents.
- `IntentHandler` dispatches current play operations.
- The Datomic adapter reads rules and commits authoritative updates/results.
- `SyncSource` and `SyncApplier` deliver committed state.

## Files

- shared play intent/result contracts in `domain/`
- backend wound/note/roll operations
- frontend character play controller and screens
- projection queries and focused tests

## Initial roll behavior

Use one understandable algorithm exercised by seeded actions:

- load the character and action;
- derive the basic dice pool from ruleset/character facts;
- generate dice on the backend;
- calculate a simple success/outcome value;
- return the immediate result;
- persist a roll record when needed by the UI.

Document the algorithm beside the domain calculation. Do not introduce a
general rules engine.

## Implementation steps

- [ ] Define update-notes, update-wounds, and roll-action payload/result shapes.
- [ ] Add pure calculation functions for wound bounds and the initial roll
  algorithm.
- [ ] Add backend validation for character/action existence and required
  relationships.
- [ ] Implement note and wound transactions in the Datomic adapter.
- [ ] Implement server-side random roll execution and optional roll-record
  transaction.
- [ ] Build a character play view with:
  - identity/header;
  - basic stats;
  - wound controls;
  - editable notes;
  - seeded action list;
  - roll result display.
- [ ] Submit each operation through `IntentClient`.
- [ ] Display immediate accepted/rejected roll results.
- [ ] Poll and apply deltas after accepted mutations.
- [ ] Re-render authoritative character state through `ProjectionQuery`.
- [ ] Add pure calculation tests, backend integration tests, and focused widget
  tests.

## Acceptance

- A user opens a built character and sees basic stats and wounds.
- Wound and note changes survive restart and arrive through synchronization.
- A user selects an action, rolls it, and sees a server-generated result.
- The UI never generates authoritative dice or directly updates synchronized
  Dartascript facts.
- Rejected operations leave the synchronized projection unchanged.

## Explicit deferrals

- Full action builder and action authoring
- Inventory/resource modifiers
- Splinters and pool split/combination
- Reproducibility seeds and audit controls
- Saved-roll history views
- Offline play and optimistic updates
- Generalized rules engine or plugin system
