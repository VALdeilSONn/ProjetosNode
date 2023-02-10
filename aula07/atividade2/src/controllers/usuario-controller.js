// Importa o bd.js para poder usar o banco de dados simulado
const { bdUsuarios } = require("../infra/bd") 

// Importa a classe Model Usuario para ser usada 
const Usuario = require("../models/Usuario")



class usuarioController {
    
    static rotas(app){

        // Rota para o recurso usuario
        app.get('/usuario', usuarioController.listar)
        app.post('/usuario', usuarioController.inserir)
    }

    static listar(req, res){
        const usuarios = bdUsuarios
        // Devolve a lista de usuarios
        res.send(usuarios)
    }

    static inserir(req, res){
        // Console log do corpo da requisição
        console.log(req.body)
        const usuario = new Usuario('João', 'joao@gmail.com', '*******')
        bdUsuarios.push(usuario)
        res.send(bdUsuarios)   
    }
}

module.exports = usuarioController