const express = require('express')
const rotas = require('./rotas/cursos')
const users = require('./rotas/users')
const porta = process.env.PORT || 3000

const app = express()

app.use('/cursos/', rotas)
app.use('/users/', users)

app.listen(porta, () => { console.log('Servidor rodando') })