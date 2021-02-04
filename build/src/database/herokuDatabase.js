"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const voting_1 = require("./voting");
const option_1 = require("./option");
const answer_1 = require("./answer");
const query = 'DROP TABLE IF EXISTS answer; ' +
    'DROP TABLE IF EXISTS option; ' +
    'DROP TABLE IF EXISTS voting; '
        .concat(voting_1.queryCreateTableVoting)
        .concat(option_1.queryCreateTableOption)
        .concat(answer_1.queryCreateTableAnswer);
const databaseUrl = process.argv[2];
const client = new pg_1.Client({
    connectionString: databaseUrl,
    ssl: {
        rejectUnauthorized: false
    }
});
void client.connect();
client.query(query, (err, _res) => {
    if (err)
        throw err;
    console.log('DATABASE SET!');
    void client.end();
});
