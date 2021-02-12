"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseVotingNumber = exports.parseAnswers = exports.parseName = exports.parseOptions = exports.parseAllowedCount = exports.parseShowNames = exports.parseQuestion = void 0;
const ServerError_1 = __importDefault(require("../utils/ServerError"));
const parseQuestion = (question) => {
    if (!question || !isString(question)) {
        throw new ServerError_1.default(400, 'InputError', 'Voting parameter "question" is missing or is not a string value.');
    }
    return question;
};
exports.parseQuestion = parseQuestion;
const parseShowNames = (showNames) => {
    if (showNames === undefined || showNames === null || !isBoolean(showNames)) {
        throw new ServerError_1.default(400, 'InputError', 'Voting parameter "show names" is missing or is not a boolean value.');
    }
    return showNames;
};
exports.parseShowNames = parseShowNames;
const parseAllowedCount = (allowedCount) => {
    if (!allowedCount || !isNumber(allowedCount)) {
        throw new ServerError_1.default(400, 'InputError', 'Voting parameter "allowed count" is missing or is not a number value.');
    }
    return allowedCount;
};
exports.parseAllowedCount = parseAllowedCount;
const parseOptions = (options) => {
    if (!options || !isArrayOfStrings(options)) {
        throw new ServerError_1.default(400, 'InputError', 'Voting parameter "options" is missing or is not a string array value.');
    }
    return options;
};
exports.parseOptions = parseOptions;
const parseName = (name) => {
    if (name === undefined)
        return 'Anon';
    if (!isString(name)) {
        throw new ServerError_1.default(400, 'InputError', 'Voter name is not a string value.');
    }
    return name;
};
exports.parseName = parseName;
const parseAnswers = (answers) => {
    if (!answers || !isArrayOfNumbers(answers)) {
        throw new ServerError_1.default(400, 'InputError', 'Voting answers is missing or is not a number array value.');
    }
    return answers;
};
exports.parseAnswers = parseAnswers;
const parseVotingNumber = (votingNumber) => {
    if (!votingNumber || !isString(votingNumber) || !isOfCorrectLength(votingNumber)) {
        throw new ServerError_1.default(400, 'InputError', 'Voting number is not a string value or is not of correct length.');
    }
    return votingNumber;
};
exports.parseVotingNumber = parseVotingNumber;
const isString = (text) => {
    return typeof text === 'string' || text instanceof String;
};
const isBoolean = (value) => {
    return typeof value === 'boolean' || value instanceof Boolean;
};
const isNumber = (number) => {
    return typeof number === 'number' || number instanceof Number;
};
const isArrayOfStrings = (options) => {
    return Array.isArray(options) && options.length > 0 && options.every(option => isString(option));
};
const isArrayOfNumbers = (array) => {
    return Array.isArray(array) && array.every(item => isNumber(item)) && array.length > 0;
};
const isOfCorrectLength = (text) => {
    return text.length === 6;
};
