const express = require('express')
const app = express()
const porta = process.env.PORT

app.get('/', (request, response) => {
    response.send('Welcome')
})

app.get('/canal', (request, response) => {
    response.json({ canal: 'CFB Cursos' })
})

app.listen(porta || 3000, () => console.log(`Servidor rodando na porta ${porta}`))