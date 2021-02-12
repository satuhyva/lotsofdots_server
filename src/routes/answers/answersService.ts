import database from '../../database/databaseWithConfigurations'
import { ValidatedVotingAnswers } from '../../types/AnswerTypes'



const addAnswersToVoting = async (votingAnswers: ValidatedVotingAnswers): Promise<void> => {

    await database.tx(async transaction => {
        const nameArray = getNameArray(votingAnswers.name, votingAnswers.answers.length)
        const addAnswers = await database.none(
            'INSERT INTO answer(name, option_id) SELECT * FROM unnest($1, $2)',
            [nameArray, votingAnswers.answers])
        return transaction.batch([addAnswers])
    })
    return
}

const getNameArray = (name: string, count: number): string[] => {
    const array = new Array(count).fill(name) as string[]
    return array
}


export default {
    addAnswersToVoting,
}