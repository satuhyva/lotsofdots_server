import ServerError from '../utils/ServerError'


export const parseQuestion = (question: unknown): string => {
    if (!question || !isString(question)) {
        throw new ServerError(400, 'InputError', 'Voting parameter "question" is missing or is not a string value.')
    }
    return question
}

export const parseShowNames = (showNames: unknown): boolean => {
    if (showNames === undefined || showNames === null || !isBoolean(showNames)) {
        throw new ServerError(400, 'InputError', 'Voting parameter "show names" is missing or is not a boolean value.')
    }
    return showNames
}

export const parseAllowedCount = (allowedCount: unknown): number => {
    if (!allowedCount || !isNumber(allowedCount)) {
        throw new ServerError(400, 'InputError', 'Voting parameter "allowed count" is missing or is not a number value.')
    }
    return allowedCount
}

export const parseOptions = (options: unknown): string[] => {
    if (!options || !isArrayOfStrings(options)) {
        throw new ServerError(400, 'InputError', 'Voting parameter "options" is missing or is not a string array value.')
    }
    return options
}


export const parseName = (name: unknown): string => {
    if (name === undefined) return 'Anon'
    if (!isString(name)) {
        throw new ServerError(400, 'InputError', 'Voter name is not a string value.')
    }
    return name
}


export const parseAnswers = (answers: unknown): number[] => {
    if (!answers || !isArrayOfNumbers(answers)) {
        throw new ServerError(400, 'InputError', 'Voting answers is missing or is not a number array value.')
    }
    return answers
}

export const parseVotingNumber = (votingNumber: unknown): string => {
    if (!votingNumber || !isString(votingNumber) || !isOfCorrectLength(votingNumber)) {
        throw new ServerError(400, 'InputError', 'Voting number is not a string value or is not of correct length.')
    }
    return votingNumber
}


const isString = (text: unknown): text is string => {
    return typeof text === 'string' || text instanceof String
}


const isBoolean = (value: unknown): value is boolean => {
    return typeof value === 'boolean' || value instanceof Boolean
}


const isNumber = (number: unknown): number is number => {
    return typeof number === 'number' || number instanceof Number
}

const isArrayOfStrings = (options: unknown): options is string[] => {
    return Array.isArray(options) && options.length > 0 && options.every(option => isString(option))
}


const isArrayOfNumbers = (array: unknown): array is number[] => {
    return Array.isArray(array) && array.every(item => isNumber(item)) && array.length > 0
}

const isOfCorrectLength = (text: string): boolean => {
    return text.length === 6
}
