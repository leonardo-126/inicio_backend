import mysql from 'mysql'

const conexao = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '004557',
    database: 'bdcopa',
})

conexao.connect()

/**
 * executa um codigo sql com ou sem valores
 * @param {string} sql instrucao sql a ser executada
 * @param {string=id | [selecao, id] } valores valores a serem passados para o sql
 * @param {string } mensagemReject mensagem a ser exibida
 * @returns objeto da promisse
 */
export const consulta = (sql, valores = '', mensagemReject) => {
    return new Promise((resolve, reject) => {
        conexao.query(sql, valores, (erro, result) => {
            if(erro) return reject(mensagemReject)
            // fazer o parse dos resultados 
            const row = JSON.parse(JSON.stringify(result))
            return resolve(row)
        })
    })
}

export default conexao