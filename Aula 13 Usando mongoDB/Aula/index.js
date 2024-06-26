<<<<<<< HEAD
const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://luvsscorpius:January18Th*@cluster0.xlf2lsa.mongodb.net/?retryWrites=true&w=majority";

async function run() {
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();

    const dbo = client.db('nodejscurso');
    const obj = { curso: 'Curso de NodeJS', canal: 'CFB Cursos' };
    const colecao = 'cursos';
    
    await dbo.collection(colecao).insertOne(obj);
    console.log('Um novo curso inserido');
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
=======
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

    //Aula 15 Query
    // const query = {curso: /.t/} // Somente os cursos que terminam com a letra t
    // const query = {} // Somente os cursos que comecam com a letra c

    // // Utilizando o find
    // // Ele pega tudo da coleção
    // // O projection serve para a inclusao ou exclusao em uma consulta para inclusao utilize o valor: 1 e para exlusão a 0.    
    // const documents = await db.collection('cursos').find(query, {projection : {_id: 0}}).toArray();
    // console.log(documents);

    // Aula 17 - Deletar objetos da coleção
    // let query = {curso: 'Curso de React'}
    // const documentss = await db.collection('cursos').deleteMany(query)
    // console.log('Um curso deletado')

    // // Aula 16 - Sort
    // const ordenacao = {curso:1} // Se a ordenação for por ordem crescente eu indico 1, se ela for por ordem decrescente eu indico -1.
    // query = {}
    // const documents = await db.collection('cursos').find(query).sort(ordenacao).toArray(); // coloque o .sort depois de query para sortear
    // console.log(documents);

    // Aula 18 - Contando registros inseridos
    // const query = [{curso: 'Curso de HTML', canal: 'CFB Cursos'}, {curso: 'Curso de CSS', canal: 'CFB Cursos'}]
    // const documents = await db.collection('cursos').insertMany(query)
    // console.log(documents.insertedCount + ' novo(s) cursos(s) inseridos(s)')

    // Aula 19 - Atualizando objetos 
    // UpdateOne
    // const query = {curso: 'Curso de HTML'}
    // const novoObj = {$set: {curso: 'Curso de HTML 2021'}}
    // const documents = await db.collection('cursos').updateOne(query, novoObj)
    // console.log('1 novo cursos atualizados')

    // UpdateMany
    const query = {curso: 'Curso de NodeJS'}
    const novoObj = {$set: {curso: 'Curso de NodeJS 2024'}}
    const documents = await db.collection('cursos').updateMany(query, novoObj)
    console.log(documents.modifiedCount + ' novos cursos atualizados')

    const documentss = await db.collection('cursos').find({}).toArray();
    console.log(documentss);

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


>>>>>>> 975a3e6e42069501b7a9b4910ca59461e3e31977

