import { Router } from 'express'
import votingsService from './votingsService'
import { validatedNewVoting, validatedVotingNumber } from './votingsValidation'
import ServerError from '../../../utils/ServerError'
import { Voting, ValidatedNewVoting } from '../../types/VotingTypes'


const votingsRouter = Router()

// eslint-disable-next-line @typescript-eslint/no-misused-promises
votingsRouter.post('/', async (request, response, next) => {

    let newVoting: ValidatedNewVoting
    try {
        newVoting = validatedNewVoting(request.body)
    } catch (error) {
        next(error)
        return 
    }
    
    try {
        const createdNewVotingNumber = await votingsService.createNewVoting(newVoting)
        response.json(createdNewVotingNumber) 
    } catch (error) {
        const serverError: ServerError = error as ServerError
        serverError.addedMessage = 'Error in creating new voting.'
        serverError.addedStatusCode = 500
        serverError.addedType = 'InternalError'
        next(serverError)
    }
})


// eslint-disable-next-line @typescript-eslint/no-misused-promises
votingsRouter.get('/:votingNumber', async (request, response, next) => {

    let votingNumber: string
    try {
        votingNumber = validatedVotingNumber(request.params)
    } catch (error) {
        next(error)
        return 
    }
    try {
        const voting: Voting | null = await votingsService.getVoting(votingNumber)
        response.json(voting) 
    } catch (error) {
        const serverError: ServerError = error as ServerError
        serverError.addedMessage = 'Error in getting the voting.'
        serverError.addedStatusCode = 500
        serverError.addedType = 'InternalError'
        next(serverError)
    }
})

export default votingsRouter

    



