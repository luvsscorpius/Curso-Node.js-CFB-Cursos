(async () => {
    const db = require('./db')
    console.log('Obter todos os cliente')
    const clientes = await db.todosClientes()
    console.log(clientes)
})()
