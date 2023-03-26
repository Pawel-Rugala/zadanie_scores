There are few branches to show how the code evolve.

- `master` branch is the final version
- `iteration_1` branch was my first attempt to this task
- iteration\_`X` is another attempt to this task
- don't hesitate to check them

# Task: Display scores in the right format

- Refactoring of a given code.
- Node version used in this project v16.13.2
- App will print the array of parsed events
- Structure of matches data should stay intact
- Write some unit tests

## How to start project

- `npm i` install required packages
- `npm start` run ts-node to see the results

optionally:

- `npm test` to run jest tests
- `npm lint` to lint the project files

## Additional setups

- vs-code Run & Debug (for windows just press `F5`)
- vs-code task runner (for win just press `CTRL-SHIFT-B`)

## Remarks

- method `printAllMatches(key?: keyof Match, value?: string)` => can optionally filter data based on object key and value
- project assume that data array can have a lot of items so we want to remove duplicates and incomplete matches before processing
  - two decorators are used to achieve this `removeDuplicates` and `removeIncompleteMatches`

## General thoughts

- I'm not super happy about `handleEventName` & `handleEventScore` to parse the events
- the alternative solution is in the `iteration_1` branch
- potential improvements: better error handling, at this moment only `removeIncompleteMatches` decorator handle input data validation

## Tech used:

- Typescript
- ts-node
- ts-jest
- eslint
- prettier
