import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import unknownEndpoint from '../utils/unknownEndpoint'
import errorHandler from '../utils/errorHandler'
import votings from './routes/votings'
import answers from './routes/answers'
import environmentVariables from '../utils/configurations'
console.log('************************')
console.log(environmentVariables.DATABASE_URL)
const app = express()
app.use((_request, response, next) => {
    response.header('Access-Control-Allow-Origin', '*')
    next()
  })

app.use(cors())
app.use(express.json())
if (environmentVariables.NODE_ENV !== 'test') {
    app.use(morgan('tiny'))
}


app.get('/healthz', (_request, response) => {
    response.send('OK')
})
app.use('/votings', votings)
app.use('/answers', answers)

app.use(unknownEndpoint)
app.use(errorHandler)


export default app