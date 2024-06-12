// Constante para requisição do módulo HTTP
const http = require('http')

// Função para criar o servidor
http.createServer((request, response) => {
    // Escrevendo no cabeçalho, primeiro parâmetro é o status = 200 ('Ok'), segundo é contexto normal
    response.writeHead(200, { 'Content-Type': 'text/plain' })
    // Aqui é oque ele vai ver
    response.write('and - Curso de Node.js')
    // Indicando o final da resposta
    response.end()

    // Porta em que o servidor ouve
}).listen(2020)
