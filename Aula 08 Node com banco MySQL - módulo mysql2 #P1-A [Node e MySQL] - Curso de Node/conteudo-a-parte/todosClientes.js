const connection = require('./db');

const todosClientes = async () => {
    const conexao = await connection();
    const [linhas] = await conexao.query('SELECT * FROM cliente_node');
    return linhas;
}

module.exports = {
    todosClientes
};

