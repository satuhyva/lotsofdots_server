import { OptionVote } from './OptionVote'

export type Voting = {
    question: string,
    voting_number: string,
    show_names: boolean,
    allowed_count: number,
    created: string,
    option_votes: OptionVote[]
}


export type ValidatedNewVoting = {
    question: string,
    showNames: boolean,
    allowedCount: number,
    options: string[]
}


export type NewVotingRequestBody = Partial<ValidatedNewVoting>

export interface VotingNumberRequestParams {
    votingNumber?: string,
}






