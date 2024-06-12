const express = require('express')
const app = express()

// Importando as middlewares
const logMiddleware = require('./Middlewares/Log.middleware')
const authMiddleware = require('./Middlewares/Auth.middleware')
const errorHandler = require('./Middlewares/errorHandler.middleware')

// Usando as middlewares
app.use(logMiddleware)
// Usando o middleware em rotas protegidas para que ela nao impeça a de erro.
app.use('/protected', authMiddleware)

app.get('/protected', (req, res) => {
    res.send('This is a protected route')
})

app.get('/', (req, res) => {
    res.send('Hello World')
})

// Middleware de tratamento de erros
app.get('/error', (req, res) => {
    throw new Error('This is a forced error!')
})

// Middlewares de erros devem ser as ultimas
app.use(errorHandler)

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})