"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatedAnswers = void 0;
const validationFunctions_1 = require("../../../utils/validationFunctions");
const validatedAnswers = (requestBody) => {
    const body = requestBody;
    return {
        name: validationFunctions_1.parseName(body.name),
        answers: validationFunctions_1.parseAnswers(body.answers)
    };
};
exports.validatedAnswers = validatedAnswers;
