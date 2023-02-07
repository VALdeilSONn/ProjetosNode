const express = require('express')
const app = express()
const port = 3000
const locallhost = 'http://127.0.0.1'



app.use(express.json())


const { usuarioGet, usuarioPost } = require('./controller/usuario-controller')
usuarioGet(app)
usuarioPost(app)

const { tarefaGet, tarefaPost } = require('./controller/tarefa-controller')
tarefaGet(app)
tarefaPost(app)


app.listen(port, () => {
    console.log(`Servidor rodando na porta ${locallhost}:${port}`)
})


// module.exports = app
