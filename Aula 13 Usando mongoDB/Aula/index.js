const { MongoClient } = require('mongodb')
const url = "mongodb+srv://luvsscorpius:January18Th*@cluster0.xlf2lsa.mongodb.net/?retryWrites=true&w=majority";

// Função para conectar e executar o findOne

const Mongo = async () => {
  // Se conectando ao mongoDB
  try {
    const client = await MongoClient.connect(url)
    console.log('Conectado ao MongoDB')

    // Precisamos selecionar o banco de dados agora
    const db = client.db('nodejscurso')

    // Utilizando o findOne
    // Quando deixamos a chave vazia significa que estamos buscando um registro geral
    // const documents = await db.collection('cursos').findOne({});
    // console.log(documents);

    // Utilizando o find
    // Ele pega tudo da coleção
    // O projection serve para a inclusao ou exclusao em uma consulta para inclusao utilize o valor: 1 e para exlusão a 0.
    const documents = await db.collection('cursos').find({}, {projection : {_id: 0, canal: 0}}).toArray();
    console.log(documents);

    // Fechar a conexão
    client.close()
    console.log('Conexão com o banco de dados fechada')
  } catch (error) {
    console.error('Erro ao se conectar ao banco de dados: ', error)
  }
}

Mongo()

// Video aula (nao deu certo)

// mongodb.connect(url, (erro, banco) => {
//   if (erro) throw erro

//   const obj = {curso: "Curso de JavaScript", canal: 'CFB Cursos'}

//   // Usando o método find
//   // O findOne() ele encontra e mostra o primeiro registro que ele encontrar
//   // Quando deixamos a chave vazia significa que estamos buscando um registro geral tipo um select *
//   dbo.collection(colecao).findOne({}, (erro, resultado) => {
//     if(erro) throw erro
//     console.log(resultado)
//     banco.close()
//   })
// })



