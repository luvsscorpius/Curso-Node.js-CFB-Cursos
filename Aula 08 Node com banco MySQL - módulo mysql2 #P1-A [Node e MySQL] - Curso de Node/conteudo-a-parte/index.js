// Importando o express
const express = require('express')
const app = express()
const port = 3000

// Importando o arquivo de conexão com o banco de dados
const db = require('./db')

app.get('/', (request, response) => {
    response.status(200).send('Welcome to our DataBase')
});

app.get('/clientes', async (request, response) => {
    console.log('Obter todos os clientes')

    try {
        // Importando todoClientes
        const todoClientes = require('./todosClientes')
        const clientes = await todoClientes.todosClientes()

        response.json(clientes)
    } catch (error) {
        console.error('Erro ao obter clientes:', error);
        response.status(500).json({ error: 'Erro ao obter clientes' })
    }
})

app.get('/inserirClientes', async (request, response) => {
    console.log('Inserir todos os clientes')
    try {
        // Importando a função de InserirCliente
        const { InserirCliente } = require('./inserirCliente')

        // Precisamos chamar a função
        await InserirCliente(21, 'gabi', 20)

        response.status(201).send('Cliente inserido com sucesso')
        console.log('Cliente inserido com sucesso')
    } catch (error) {
        console.error('Erro ao processar a solicitação: ', error)
        response.status(500).send('Erro ao processar a solicitação')
    }
})


app.listen(3000, () => { console.log(`Servidor rodando na porta ${port}.`) })