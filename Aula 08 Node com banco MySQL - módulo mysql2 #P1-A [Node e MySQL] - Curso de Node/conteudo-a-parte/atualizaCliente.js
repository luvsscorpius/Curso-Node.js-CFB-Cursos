// Importe a conexão com o banco de dados
const connection = require('./db')

// Criando a função assícrona para atualizar o cliente no banco de dados
const atualizaCliente = async (id, nome, idade) => {
    try {
        const con = await connection()
        const values = [nome, idade, id]
        const sql = `UPDATE cliente_node SET nome=?, idade=? WHERE id=?`

        const result = await con.query(sql, values)

        if (result.affectedRows > 0) {
            console.log('Cliente atualizado com sucesso')
        } else {
            console.log('Cliente não encontrado ou nenhum registro atualizado.')
        }
    } catch (error) {
        console.error('Erro ao atualizar cliente: ', error)
    }
}

module.exports = { atualizaCliente }