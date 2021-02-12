import { ValidatedNewVoting, NewVotingRequestBody, VotingNumberRequestParams } from '../../types/VotingTypes'
import { parseAllowedCount, parseOptions, parseQuestion, parseShowNames, parseVotingNumber } from '../../../utils/validationFunctions'





export const validatedNewVoting = (requestBody: unknown): ValidatedNewVoting => {
    const body = requestBody as NewVotingRequestBody
    return {
        question: parseQuestion(body.question),
        showNames: parseShowNames(body.showNames),
        allowedCount: parseAllowedCount(body.allowedCount),
        options: parseOptions(body.options)
    }
}


export const validatedVotingNumber = (requestParams: unknown): string => {
    const params = requestParams as VotingNumberRequestParams
    return parseVotingNumber(params.votingNumber)
}











