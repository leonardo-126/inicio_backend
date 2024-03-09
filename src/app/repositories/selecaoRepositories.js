import {consulta} from "../database/conexao.js"

class selecaoRepository {
    //crud
    create(selecao) {
        const sql = "INSERT INTO selecoes SET ?;"
    
        return consulta(sql, selecao, 'nao foi possivel cadastrar!')
    }
    findAll() {
        const sql = "SELECT * FROM selecoes;"
        return consulta(sql, 'Nao foi possivel localizar! ')
    }
    findById(id) {
        const sql = "SELECT * FROM selecoes WHERE id=?;"
    
        return consulta(sql, id, 'Nao foi possivel localizar! ')
    }
    update(selecao, id) {
        const sql = "UPDATE selecoes SET ? WHERE id=?;"
        return consulta(sql, [selecao, id],'Nao foi possivel atualizar! ')
    }
    delete(id) {
        const sql = "DELETE FROM selecoes WHERE id=?;"
        return consulta(sql, id,'Nao foi possivel deletar ! ')
    }
}

export default new selecaoRepository()