// Importando a biblioteca mysql/promise
const mysql = require('mysql2/promise')

// Função assincrona para conectar ao banco de dados
const conectar = async () => {
    //Verifica se ja existe uma conexão global e se ela não está desconectada
    if (global.conexao && global.conexao.state != 'disconected')
        return global.conexao // Retorna a conexão existente

    // Se não houver uma conexão global ou se estiver desconectada, cria uma nova
    const conexao = mysql.createConnection('mysql://root:January18Th*@localhost:3306/cfbcursos')

    // Mostra que o banco de dados foi conectado
    console.log('Conectou ao banco')

    // Armazena a conexão na variável global para reutilização posterior
    global.conexao = conexao

    // Retorna a conexão
    return conexao
}

// Função assincrona para obter todos os clientes do SGBD 
const todosClientes = async () => {
    const conexao = await conectar()

    // Executa uma query sql para obter todos os clientes do SGBD dentro de um um array de objetos
    const [linhas] = await conexao.query('SELECT * FROM cliente_node')
    return await linhas
}

// Função insert
const insereCliente = async (cliente) => {
    const conexao = await conectar()

    // Executa uma query sql inserir clientes no banco de dados
    const sql = 'INSERT INTO cliente_node (id, nome, idade) VALUES (?, ?, ?)'
    const valores = [cliente.id, cliente.nome, cliente.idade]
    await conexao.query(sql, valores)
}

// Exportando a função todos os clientes para que ela possa ser executada em outros módulos
module.exports = { todosClientes, insereCliente }