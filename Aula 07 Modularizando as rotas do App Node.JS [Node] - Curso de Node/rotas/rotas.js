const express = require('express')
const rotas = express.Router()

let cursosInfo = [
    { 'curso': 'node', 'infor': 'Curso de Node' },
    { 'curso': 'react', 'infor': 'Curso de react' },
    { 'curso': 'java', 'infor': 'Curso de java' },
    { 'curso': 'arduino', 'infor': 'Curso de arduino' },
]

rotas.get('/', (request, response) => {
    response.json({ ola: 'Seja bem-vindo' })
})

rotas.get('/:cursoid', (request, response) => {
    const curso = request.params.cursoid
    const cursoI = cursosInfo.find(i => i.curso == curso)
    if (!cursoI) {
        response.status(404).json(
            { erro: 'Curso não encontrado', cursoPesquisado: curso }
        )
    } else {
        response.status(200).json(cursoI)
    }
})

module.exports = rotas