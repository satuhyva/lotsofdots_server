"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatedVotingNumber = exports.validatedNewVoting = void 0;
const validationFunctions_1 = require("../../../utils/validationFunctions");
const validatedNewVoting = (requestBody) => {
    const body = requestBody;
    return {
        question: validationFunctions_1.parseQuestion(body.question),
        showNames: validationFunctions_1.parseShowNames(body.showNames),
        allowedCount: validationFunctions_1.parseAllowedCount(body.allowedCount),
        options: validationFunctions_1.parseOptions(body.options)
    };
};
exports.validatedNewVoting = validatedNewVoting;
const validatedVotingNumber = (requestParams) => {
    const params = requestParams;
    return validationFunctions_1.parseVotingNumber(params.votingNumber);
};
exports.validatedVotingNumber = validatedVotingNumber;
