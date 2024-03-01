import express from 'express'

import conexao from '../infra/conexao.js'

const app = express()

//indicar para o express ler body com json
app.use(express.json())

//buscar elemento por id
function buscarSelecaoPorId(id) {
    return selecoes.filter(selecao => selecao.id == id)
}

//pegar a posicao do index do elemento por id
function buscarIndexSelecao(id) {
    return selecoes.findIndex(selecao => selecao.id == id)
}

//ROTAS

//req e res == requisicao, resposta
app.get('/selecoes', (req, res) => {
   // res.status(200).send(selecoes)
   const sql = "SELECT * FROM selecoes;"

   conexao.query(sql, (erro, resultado) => {
    if(erro){
        res.status(404).json({'erro' : erro})
    } else {
        res.status(200).json(resultado)
    }

   })
   
})

app.get('/selecoes/:id', (req, res) => {
    //let index = req.params.id
    // res.json(buscarSelecaoPorId(req.params.id))

    const id = req.params.id
    const sql = "SELECT * FROM selecoes WHERE id=?;"

   conexao.query(sql, id, (erro, resultado) => {
    const linha = resultado[0]

    if(erro){
        res.status(404).json({'erro' : erro})
    } else {
        res.status(200).json(linha)
    }

   })
   
})

app.post('/selecoes', (req, res) => {
    // selecoes.push(req.body)
    // res.status(201).send('selecao cadastrada com sucesso!')

    const selecao = req.body
    const sql = "INSERT INTO selecoes SET ?;"

   conexao.query(sql, selecao, (erro, resultado) => {

    if(erro){
        res.status(400).json({'erro' : erro})
    } else {
        res.status(201).json(resultado)
    }

   })
})

//a funcao splice corta o elemento
app.delete('/selecoes/:id', (req, res) => {
    // let index = buscarIndexSelecao(req.params.id)
    // selecoes.splice(index, 1)
    // res.send(`selecao ${req.params.id} escluida com sucesso !`)

    const id = req.params.id
    const sql = "DELETE FROM selecoes WHERE id=?;"

   conexao.query(sql, id, (erro, resultado) => {

    if(erro){
        res.status(404).json({'erro' : erro})
    } else {
        res.status(200).json(resultado)
    }

   })
})

//atualizar selecao
app.put('/selecoes/:id', (req, res) => {
    //let index = buscarIndexSelecao(req.params.id)
    //selecoes[index].selecao = req.body.selecao
    //selecoes[index].grupo = req.body.grupo
    //res.json(selecoes)

    const id = req.params.id
    const selecao = req.body
    const sql = "UPDATE selecoes SET ? WHERE id=?;"

   conexao.query(sql, [selecao, id], (erro, resultado) => {

    if(erro){
        res.status(400).json({'erro' : erro})
    } else {
        res.status(200).json(resultado)
    }

   })
})




export default app
