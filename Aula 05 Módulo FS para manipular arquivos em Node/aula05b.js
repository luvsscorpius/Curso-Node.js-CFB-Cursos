const http = require('http')
const fs = require('fs')
const porta = process.env.PORT

const server = http.createServer((request, response) => {
    fs.appendFile('test.txt', 'Curso de Node - CFB Cursos', (error, arquivo) => {
        if (error) throw error
        console.log('Arquivo criado')
    })
})

server.listen(porta || 3000, () => { console.log('Servidor rodando') })