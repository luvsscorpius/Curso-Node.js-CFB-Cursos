const http = require('http')
const fs = require('fs')
const porta = process.env.PORT

const server = http.createServer((request, response) => {
    fs.readFile('site.html', (error, arquivo) => {
        response.writeHead(200, { 'Content-Type': 'text/html' })
        response.write(arquivo)
        return response.end()
    })
})

server.listen(porta || 3000, () => { console.log('Servidor rodando') })