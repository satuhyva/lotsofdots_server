import { ValidatedVotingAnswers, VotingAnswersRequestBody } from '../../types/AnswerTypes'
import { parseName, parseAnswers } from '../../../utils/validationFunctions'


export const validatedAnswers = (requestBody: unknown): ValidatedVotingAnswers => {
    const body = requestBody as VotingAnswersRequestBody

    return {
        name: parseName(body.name),
        answers: parseAnswers(body.answers)
    }
}




