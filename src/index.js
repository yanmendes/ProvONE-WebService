import express from 'express'
import { port } from './config'
import query from './routes/query'
import user from './routes/user'
import bodyParser from 'body-parser'
import path from 'path'

if (process.env === 'production') {
  require('dotenv').config({ path: path.join(__dirname, '/../envs/.prod') })
} else {
  require('dotenv').config({ path: path.join(__dirname, '/../envs/.dev') })
}

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => res.status(200).send('ok!'))

app.use('/query', query)
app.use('/', user)

app.listen(port, () => console.log(`Listening on port ${port}`))