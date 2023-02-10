const express = require('express')
const app = express()
const port = 3000
const locallhost = 'http://127.0.0.1'


app.use(express.json())


// importando os controllers
const usuarioController = require('./controllers/usuario-controller.js')
const tarefaController = require('./controllers/tarefa-controller.js')

usuarioController.rotas(app)
tarefaController.rotas(app)



app.listen(port, () => {
    console.log(`Servidor rodando na porta ${locallhost}:${port}`)
})