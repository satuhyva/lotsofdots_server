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
// In order to enable Heroku functioning easily, the following has been set in Heroku configuration variables:
// heroku config:set PGSSLMODE=no-verify
exports.default = pgpWithInitializationOptions(connectionString);
