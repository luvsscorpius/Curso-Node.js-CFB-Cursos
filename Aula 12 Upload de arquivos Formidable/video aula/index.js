// Importando o módulo http
const http = require('http')
// Criando uma porta para o servidor
const porta = process.env.PORT || 3000
// Importando o módulo formidable
const formidavel = require('formidable')
// Importando o módulo fs
const fs = require('fs')

// Criando o servidor
const servidor = http.createServer((req, res) => {
    if (req.url == '/envioDeArquivo') {
        const form = new formidavel.IncomingForm();
        form.parse(req, (erro, campos, arquivos) => {
            const urlantiga = arquivos.filetoupload.path;
            const urlnova = 'C:/Users/ander/OneDrive/Área de Trabalho' + arquivos.filetoupload.name;
            fs.rename(urlantiga, urlnova, (erro) => {
                if (erro) throw erro
                res.write('Arquivo movido!')
                res.end()
            })
        })
    } else {
        res.writeHead(200, {'Content-Type' : 'text/html'})
        res.write('<form action="envioDeArquivo" method="post" enctype="multipart/form-data">')
        res.write('<input type="file" name="filetoupload"><br>')
        res.write('<input type="submit" value="Enviar">')
        res.write('</form>')
        return res.end()
    }
})

servidor.listen(porta)

