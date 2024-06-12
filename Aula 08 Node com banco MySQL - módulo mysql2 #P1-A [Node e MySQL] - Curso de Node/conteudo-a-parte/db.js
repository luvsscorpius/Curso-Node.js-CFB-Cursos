const mysql = require('mysql2/promise')

// Criando a conexão com o banco de dados
const connection = async () => {
    // Try é usado para lançar uma exceção (ele tentará executar esse bloco de código)
    try {
        const conexao = await mysql.createConnection({
            host: 'localhost', // Endereço do host 
            user: 'root', // Usuário do banco
            password: 'January18Th*', // Senha do banco
            database: 'cfbcursos' // Nome do banco de dados
        })

        console.log('Conexão bem sucedida com o banco de dados')
        return conexao
        // Código que lida com a exceção (qualquer erro no código de cima)
    } catch (error) {
        console.error('Erro ao conectar ao banco de dados:', error.message)
        throw new error
    }
}


module.exports = connection

