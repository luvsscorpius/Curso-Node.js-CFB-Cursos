const http = require('http')
const porta = 3000
const host = '127.0.0.10'

const servidor = http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/html' })
    if (request.url == '/') {
        response.write('<h1>Welcome</h1>')
    } else if (request.url == '/canal') {
        response.write('<h1>CFB Cursos')
    } else if (request.url == '/curso') {
        response.write('<h1>Curso de Node.js</h1>')
    }
    response.end()
})

servidor.listen(porta, host, () => (console.log(`Servidor rodando na porta ${porta}`)))