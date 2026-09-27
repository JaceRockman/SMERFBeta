# Slice 5 — Character Builder

Parent: [MVP Rebuild Plan](../MVP_REBUILD_PLAN.md)  
Depends on: [Slice 4](../04-campaign-browsing-frontend/PLAN.md)

Status: Not started

## Objective

Create and edit the minimum character data needed to enter the play journey,
using direct intents and authoritative synchronized results.

## Interfaces used

- `IntentClient` submits create and explicit notes intents.
- `IntentHandler` performs backend validation and dispatch.
- The Datomic adapter commits character facts.
- `SyncSource` and `SyncApplier` deliver committed state.
- `LocalTransact` may hold an in-progress device-local form draft.
- `ProjectionQuery` supplies campaign/ruleset options and saved character data.

## Files

- shared character intent/result definitions in `domain/`
- backend character operations and tests
- frontend character form/controller/widget namespaces
- projection queries needed by the form

## Minimum character data

- logical ID assigned by the backend;
- campaign reference;
- character name;
- notes;
- basic ruleset selections required to calculate displayed stats;
- initial wounds.

Do not model optional character concepts until the play slice uses them.

## Implementation steps

- [ ] Finalize create-character and update-notes intent payloads.
- [ ] Add context-free payload validation in `domain/`.
- [ ] Add backend checks that campaign and referenced ruleset values exist.
- [ ] Implement create and update-notes transactions in the Datomic adapter.
- [ ] Return accepted/rejected results through `IntentHandler`.
- [ ] Define a small local form-draft shape and operations through
  `LocalTransact`; keep it ephemeral if persistence adds complexity.
- [ ] Build the create-character form with inline required-field errors.
- [ ] Load selectable ruleset values through `ProjectionQuery`.
- [ ] Submit through `IntentClient` and show submitting/success/error states.
- [ ] After acceptance, poll synchronization and navigate to the saved
  character only when it appears through `ProjectionQuery`.
- [ ] Add backend integration and Flutter widget/controller tests.

## Acceptance

- A user creates a character from a seeded campaign.
- The backend assigns a stable logical ID and commits native Datomic
  references.
- The character appears through synchronization, not by inserting the direct
  response into Dartascript.
- A user edits character notes and sees the synchronized result.
- Restarting backend and frontend retains the character.
- Invalid required fields show understandable errors.

## Explicit deferrals

- Multi-step wizard infrastructure
- Post-creation name/ruleset editing; add separate intents only when needed
- Portrait upload
- Advanced ancestry/resource composition
- Optimistic authoritative writes
- Cross-device drafts and autosave
- Concurrent edit conflict handling
- Complete character authoring parity
