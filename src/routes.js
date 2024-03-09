import { Router } from "express";
import selecaoController from "./app/controllers/selecaoController.js";

const router = Router()

//ROTAS
//req e res == requisicao, resposta
router.get('/selecoes', selecaoController.index )
router.get('/selecoes/:id', selecaoController.show)
router.post('/selecoes', selecaoController.store)
//atualizar selecao
router.put('/selecoes/:id', selecaoController.update)
//a funcao splice corta o elemento
router.delete('/selecoes/:id', selecaoController.delete)

export default router