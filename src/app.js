import express from 'express'
import routes from './routes.js'

const app = express()
// usar o router 
app.use(routes)

//indicar para o express ler body com json
app.use(express.json())


export default app
