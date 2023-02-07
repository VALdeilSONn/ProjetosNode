class UsuarioController {

    static rotas(app){

         app.get('/usuario', UsuarioController.listar)
         app.get('/usuario', UsuarioController.inserir)
    }

    //GET
    static listar(req, rea){
        res.send("Rota GET do usuario ativada")

    }

    //POST
    static inserir(req, rea){

        res.send("Rota POST do usuario ativada")
    }
}

module.exports = UsuarioController