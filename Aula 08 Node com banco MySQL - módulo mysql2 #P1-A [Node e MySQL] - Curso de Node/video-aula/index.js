(async () => {
    const db = require('./db')
    // console.log('Inserir novo cliente')
    // const id = 2
    // const nom = 'Camila'
    // const ida = 33
    // await db.insereCliente({ id: id, nome: nom, idade: ida })

    // console.log('Cliente ' + 'atualizado')
    // const id = 21
    // const nom = 'Gabriella'
    // const ida = 15
    // await db.atualizaCliente(id, { nome: nom, idade: ida })

    const id = 21
    await db.deletaCliente(id)
    console.log('Cliente ' + id + ' deletado')

    console.log('Obter todos os cliente')
    const clientes = await db.todosClientes()
    console.log(clientes)
})()
