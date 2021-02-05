LOTSOFDOTS SERVER WITH RELATIONAL DATABASE

This server has been developed to be used as the backend for LotsOfDots frontend.
This server uses a Postgre SQL database for data storage.

# LOCAL DEVELOPMENT

## TO START LOCAL POSTGRES DATABASE:
    docker run --rm --name postgres -e POSTGRES_PASSWORD=postgres -d -p 5432:5432 postgres

## TO CREATE A DATABASE IN THE RUNNING LOCAL DOCKER POSTGRES:
    First build with:
        npm run tsc
    Then use the created js-files:
        node build/src/database/createDatabase.js

## TO RUN TESTS LOCALLY (once database is up and running):
    Commands in Terminal to run tests:
    (Note: You need to setup the database before running tests, as described above).
        All tests:
            jest
        One file (like test.test.js):
            jest tests/test.test.ts

## TO RUN SERVER LOCALLY (once database is up and runnig):
    npm run dev


# PRODUCTION (IN HEROKU)

# TO SETUP DATABASE TABLES IN HEROKU POSTGRES DATABASE:
    First build with:
        npm run tsc
    Then use the created js-files WITH HEROKU DATABASE URL:
        node build/src/database/herokuDatabase.js <HEROKU DATABASE URL HERE>

# TO CI/CD:
    Commit changes to code and push to GitHub.
        git push origin master
    GitHub Actions automatically lint, build test and deploy to Heroku.


