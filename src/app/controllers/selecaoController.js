import selecaoRepository from "../repositories/selecaoRepositories.js"

class selecaoControler {
    //async fala que e funcao assincrona 
    async index (req, res) {
        // await fala que a funcao tem que esperar o resultado para armazenar valores
        const result = await selecaoRepository.findAll()
        res.json(result)
    }

    async show (req, res) {
        const id = req.params.id
        const row = await selecaoRepository.findById(id)
        res.json(row)
    }
    async store (req, res) {

        const selecao = req.body
        const row = await selecaoRepository.create(selecao)
        res.json(row)
        
    }
    async update (req, res) {

        const id = req.params.id
        const selecao = req.body
        const row = await selecaoRepository.update(selecao, id)
        res.json(row)
    
    }
    async delete (req, res)  {

        const id = req.params.id
        const sql = "DELETE FROM selecoes WHERE id=?;"
        const row = await selecaoRepository.delete(id)
        res.json(row)
    }
}

export default new selecaoControler()