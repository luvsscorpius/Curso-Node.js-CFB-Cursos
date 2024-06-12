const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'January18Th*',
    database: 'cfbcursos'
})

connection.connect(err => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados', err)
    } else {
        console.log('Conexão bem-sucedida ao banco de dados.')
    }
})

const query = 'SELECT * FROM cliente_node'

connection.query(query, (err, results) => {
    if (err) {
        console.error('Erro ao executar a consulta: ', err)
    } else {
        console.log('Resultado da consulta: ', results)

        // Dispara um evento personalizado para lidar com o resultado
        // Por exemplo, usando o módulo 'events'
        const EventEmitter = require('events')
        const emitter = new EventEmitter()

        // Registre um ouvinte para o evento 'consultaConcluida'
        emitter.on('consultaConcluida', () => {
            console.log('Consulta concluída com sucesso')
        })

        // Emita o evento 'consultaConcluida' quando a consulta for bem-sucedida
        emitter.emit('consultaConcluida')
    }
})

connection.end(err => {
    if (err) {
        console.error('Erro ao fechar a conexão com o banco de dados: ', err)
    } else {
        console.log('Conexão com o banco de dados fechada com sucesso. ')
    }
})