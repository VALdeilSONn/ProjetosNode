const Usuario = require("../models/Usuario")

class usuarioController {
    static rotas(app){
        // Rota para o recurso usuario
        app.get('/usuario', usuarioController.listar)
        app.post('/usuario', usuarioController.inserir)
    }

    static listar(req, res){
        const usuario = new Usuario('Nome do usuário', 'Email', 'Senha')
        res.send('Rota ativada com GET e recurso usuario: lista de usuarios deve ser retornada')
        // Console log do objeto usuario
        console.log(usuario)
    }

    static inserir(req, res){
        res.send('Rota ativada com POST e recurso usuario: usuario deve ser inserido')
        // Console log do corpo da requisição
        console.log(req.body)        
    }
}

module.exports = usuarioController