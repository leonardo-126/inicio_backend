import conexao from "../database/conexao.js"

class selecaoRepository {
    //crud
    create(selecao) {
        const sql = "INSERT INTO selecoes SET ?;"
    
        return new Promise((resolve, reject) => {
            conexao.query(sql, selecao, (erro, result) => {
                if(erro) return reject("nao foi possivel cadastrar")

                // fazer o parse dos resultados 
                const row = JSON.parse(JSON.stringify(result))
                return resolve(row)
            })
        })
    }
    findAll() {
        const sql = "SELECT * FROM selecoes;"
    
        return new Promise((resolve, reject) => {
            conexao.query(sql, (erro, result) => {
                if(erro) return reject("nao foi possivel cadastrar")

                // fazer o parse dos resultados 
                const row = JSON.parse(JSON.stringify(result))
                return resolve(row)
            })
        })
    }
    findById(id) {
        const sql = "SELECT * FROM selecoes WHERE id=?;"
    
        return new Promise((resolve, reject) => {
            conexao.query(sql, id, (erro, result) => {
                if(erro) return reject("nao foi possivel localizar")

                // fazer o parse dos resultados 
                const row = JSON.parse(JSON.stringify(result))
                return resolve(row)
            })
        })
    }
    update(selecao, id) {
        const sql = "UPDATE selecoes SET ? WHERE id=?;"
        return new Promise((resolve, reject) => {
            conexao.query(sql, [selecao, id], (erro, result) => {
                if(erro) return reject("nao foi possivel atualizar")

                // fazer o parse dos resultados 
                const row = JSON.parse(JSON.stringify(result))
                return resolve(row)
            })
        })
    }
    delete(id) {
        const sql = "DELETE FROM selecoes WHERE id=?;"
        return new Promise((resolve, reject) => {
            conexao.query(sql, id, (erro, result) => {
                if(erro) return reject("nao foi possivel deletar")

                
                // fazer o parse dos resultados 
                const row = JSON.parse(JSON.stringify(result))
                return resolve(row)
            })
        })
    }
}

export default new selecaoRepository()