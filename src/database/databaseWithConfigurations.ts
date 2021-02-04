import environmentVariables from '../../utils/configurations'
import pgp from 'pg-promise'

const initializationOptions = {}
const pgpWithInitializationOptions = pgp(initializationOptions)

let connectionString = environmentVariables.DATABASE_URL || 'postgres://postgres:postgres@localhost:5432/postgres'
if (environmentVariables.NODE_ENV !== 'test'){
    connectionString += '?sslmode=require'
}



// . ?sslmode=require   ?ssl=true
// Alternatively, you can omit the ssl configuration object if you specify the PGSSLMODE config var: heroku config:set PGSSLMODE=no-verify.


export default pgpWithInitializationOptions(connectionString)


// import environmentVariables from '../../utils/configurations'
// import pgp from 'pg-promise'

// const databaseConfigurations = {
//     host: environmentVariables.DB_HOST || 'localhost',
//     user: environmentVariables.DB_USER || 'postgres',
//     port: Number(environmentVariables.DB_PORT) || 5432,
//     database: environmentVariables.DB_DATABASE || 'postgres',
//     password: environmentVariables.DB_PASSWORD || 'postgres',
//     ssl: environmentVariables.DB_SSL === 'true' ? true : false,
// }


// const initializationOptions = {}

// const pgpWithInitializationOptions = pgp(initializationOptions)

// export default pgpWithInitializationOptions(databaseConfigurations)