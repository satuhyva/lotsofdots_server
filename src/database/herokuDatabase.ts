import { Client } from 'pg'

import { queryCreateTableVoting } from './voting'
import { queryCreateTableOption } from './option'
import { queryCreateTableAnswer } from './answer'

const query =    'DROP TABLE IF EXISTS answer; ' +
                        'DROP TABLE IF EXISTS option; ' +
                        'DROP TABLE IF EXISTS voting; '
                        .concat(queryCreateTableVoting)
                        .concat(queryCreateTableOption)
                        .concat(queryCreateTableAnswer)

const databaseUrl = process.argv[2]

const client = new Client({
  connectionString: databaseUrl,
  ssl: {
    rejectUnauthorized: false
  }
})

void client.connect()

client.query(query, (err, _res) => {
  if (err) throw err
  console.log('DATABASE SET!')
  void client.end()
});