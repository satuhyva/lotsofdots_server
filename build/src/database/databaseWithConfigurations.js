"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const configurations_1 = __importDefault(require("../../utils/configurations"));
const pg_promise_1 = __importDefault(require("pg-promise"));
const initializationOptions = {};
const pgpWithInitializationOptions = pg_promise_1.default(initializationOptions);
const connectionString = configurations_1.default.DATABASE_URL || 'postgres://postgres:postgres@localhost:5432/postgres';
exports.default = pgpWithInitializationOptions(connectionString);
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
