const express = require('express')
const router = express.Router()

const users = [
    { id: 1, name: 'and' },
    { id: 2, name: 'Rafa' },
    { id: 3, name: 'Liriel' },
]

router.get('/', (request, response) => {
    response.json({ ola: 'Seja bem-vindo' })
})

router.get('/:name', (request, response) => {
    const userName = request.params.name
    const userI = users.find(i => i.name == userName)
    if (!userI) {
        response.status(404)
    } else {
        response.status(200).send(userName)
    }
})

module.exports = router