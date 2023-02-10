// Importa o bd.js para poder usar o banco de dados simulado
const { bdUsuarios } = require("../infra/bd.js")

// Implementar Rota Delete

class usuarioController {
    static rotas(app){
        // Rota para o recurso usuario
        app.get('/usuario', usuarioController.listar)
        app.get('/usuario/email/:email', usuarioController.buscarPorEmail)
        app.post('/usuario', usuarioController.inserir)
    }

    static listar(req, res){
        const usuarios = bdUsuarios
        // Devolve a lista de usuarios
        res.send(usuarios)
    }

    static inserir(req, res){
        res.send('Rota ativada com POST e recurso usuario: usuario deve ser inserido')
        // Console log do corpo da requisição
        console.log(req.body)        
    }

    static buscarPorEmail(req, res){
        // Busca o email na lista de usuarios
        const usuario = bdUsuarios.find(usuario => usuario.email === req.params.email)
        console.log(usuario)
        // Se o usuario não for encontrado, devolve um erro
        if(!usuario){
            res.status(404).send('Usuário não encontrado')
        }
        // Se o usuario for encontrado, devolve o usuario
        res.send(usuario)
    }
}

module.exports = usuarioController