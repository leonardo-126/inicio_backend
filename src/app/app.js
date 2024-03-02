import express from 'express'

import selecaoController from './controllers/selecaoController.js'

const app = express()

//indicar para o express ler body com json
app.use(express.json())


//ROTAS

//req e res == requisicao, resposta
app.get('/selecoes', selecaoController.index )
app.get('/selecoes/:id', selecaoController.show)
app.post('/selecoes', selecaoController.store)
//atualizar selecao
app.put('/selecoes/:id', selecaoController.update)
//a funcao splice corta o elemento
app.delete('/selecoes/:id', selecaoController.delete)


export default app
