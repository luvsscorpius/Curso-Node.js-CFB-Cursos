const connection = require('./db')

const deletaCliente = async (id) => {
    const con = await connection()

    // Agora criaremos uma query sql para deletar o cliente
    const sql = `DELETE FROM cliente_node WHERE id=?`
    await con.query(sql, id)
}

module.exports = { deletaCliente }