const http = require('http')
const porta = process.env.PORT || 3000
const retorno = () => { console.log('Servidor rodando') }
const eventos = require('events')
const EventoEmissor = new eventos.EventEmitter()

const final = () => {
    console.log('Fim do processo')
}

// Primeiro coloco o nome no evento e depois adiciono uma função
EventoEmissor.on('msg', () => { console.log('Curso de node') })
EventoEmissor.on('fim', final)

const servidor = http.createServer((request, response) => {
    EventoEmissor.emit('msg')
    response.writeHead(200, { 'Content-Type': 'text/plain' })
    response.write('and')
    EventoEmissor.emit('fim')
    response.end()
})

servidor.listen(porta, retorno)