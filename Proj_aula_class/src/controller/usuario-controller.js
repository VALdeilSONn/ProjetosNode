const Usuario = require('../modules/Usuario')

function usuarioGet(app) {
    
    app.get('/usuario', (req, res) => {
    
        const usuario = new Usuario ('Val', 'val@gmail.com', '123456')

        res.send({

            "Rota do usuário ativada: "  :usuario
        })

        console.log(usuario)
    })
}

function usuarioPost(app) {
    app.post('/user', (req, res) => {

        const usuario = new Usuario ('Valeria', 'valeria@gmail.com', '123456')

    
        res.send({'Usuário cadastrado' : usuario})

        console.log(usuario)

    })
}


module.exports = { usuarioGet, usuarioPost }
