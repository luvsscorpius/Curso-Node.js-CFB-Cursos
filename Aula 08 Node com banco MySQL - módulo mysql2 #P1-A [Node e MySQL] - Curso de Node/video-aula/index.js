(async () => {
    const db = require('./db')
    console.log('Inserir novo cliente')
    const id = 2
    const nom = 'Camila'
    const ida = 33
    await db.insereCliente({ id: id, nome: nom, idade: ida })

    console.log('Obter todos os cliente')
    const clientes = await db.todosClientes()
    console.log(clientes)
})()
