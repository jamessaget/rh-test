## RH Technical Test
## Summary
A command line application which takes in a --muscle flag followed by a value which will search for the muscle and identify exercises which can be used on that muscle

## Local Setup
To run locally there are two options, through docker or locally through your terminal

Docker:
- docker build -t *insert-image-tag* .
- docker run --name *insert-image-name* -p 9876:8080 -d -v "$(pwd)"/src:/app/src -v "$(pwd)"/tests:/app/tests  *insert-container-name* 
- docker exec -it rh-test sh

Local:
- npm run build
- node ./dist/index.js --muscle *insert muscle group*

Tests:

- npm run test
- npm run test -- --coverage
- npm run test -- *insert path to test file*
- npm run test -- *insert path to test file* -t 'name of specific test'

## Usage
- node ./dist/index.js --muscle_group 2

## Pipeline
There is a github pipeline set up to lint and run tests on pushing to the main branch

## Extras

If I had more time it would be nice to handle translations, logging, more edge cases, sanitizing user input

## Design considerations

Make a thin IIFE function to be trigger via the command line, with an easily extendable request pattern for http requests

