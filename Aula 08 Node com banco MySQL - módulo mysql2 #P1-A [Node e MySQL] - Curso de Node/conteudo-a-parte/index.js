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

app.get('/atualizarClientes', async (request, response) => {
    console.log('Atualizar cliente')
    try {
        // Precisamos importar a função de atualizar cliente
        const { atualizaCliente } = require('./atualizaCliente')

        // Agora chamamos a função passando o id, o nome e a idade a serem atualizados
        await atualizaCliente(20, 'Monica', 60)

        // enviamos um status de ok 
        response.status(201).send('Cliente atualizado com sucesso')
        console.log('Cliente atualizado com sucesso')
    } catch (error) {
        console.error('Erro ao atualizar o cliente: ', error)
        response.status(500).send('Erro ao processar a solicitação')
    }
})

app.get('/deletarCliente', async (request, response) => {
    console.log('Deletar cliente')

    try {
        // Importaremos a função de deletar o cliente
        const { deletaCliente } = require('./deletaCliente')

        // Agora chamamos a função passando o id
        await deletaCliente(20)

        // Enviaremos um status de ok quando for deletado
        response.status(201).send('Cliente deletado com sucesso')
        console.log('Cliente deletado com sucesso')
    } catch (error) {
        console.error('Erro ao deletar o cliente: ', error)
        response.status(500).send('Erro ao processar a solicitação')
    }
})

app.listen(3000, () => { console.log(`Servidor rodando na porta ${port}.`) })