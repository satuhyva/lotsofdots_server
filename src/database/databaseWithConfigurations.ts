import environmentVariables from '../../utils/configurations'
import pgp from 'pg-promise'

const initializationOptions = {}
const pgpWithInitializationOptions = pgp(initializationOptions)

const connectionString = environmentVariables.DATABASE_URL || 'postgres://postgres:postgres@localhost:5432/postgres'
// In order to enable Heroku functioning easily, the following has been set in Heroku configuration variables:
// heroku config:set PGSSLMODE=no-verify


export default pgpWithInitializationOptions(connectionString)

