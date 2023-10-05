    // Importe a conexão com o banco de dados
    const connection = require('./db')

// Crie uma função onde receba de parametros as informações não nulas do DB
const InserirCliente = async (id, nome, idade) => {
    // crie uma constante para se conectar ao banco de dados
    const con = await connection()

    // Criando constantes para receber os valores
    const ide = id
    const nom = nome
    const ida = idade

    // Executar a consulta SQL de inserção
    const sql = `INSERT INTO cliente_node (id, nome, idade) VALUES (?, ?, ?)`
    const values = [id, nome, idade]

    await con.query(sql, values, (err, results) => {
        if (err) {
            console.error('Erro ao inserir dados: ', err)
            return
        }
        console.log('Dados inseridos com sucesso. ID do novo registro:', results)
    })

}

module.exports = { InserirCliente }

