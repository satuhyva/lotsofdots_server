import environmentVariables from '../../utils/configurations'
import pgp from 'pg-promise'

const initializationOptions = {}
const pgpWithInitializationOptions = pgp(initializationOptions)

const connectionString = environmentVariables.DATABASE_URL || 'postgres://postgres:postgres@localhost:5432/postgres'

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