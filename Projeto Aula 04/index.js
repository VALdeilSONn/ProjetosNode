const express = require('express')
const app = express()
const port = 3000
const locallhost = 'http://127.0.0.1'



const tarefa = require('./MODULOS/tarefa-controller')
tarefa(app)

const usuario = require('./MODULOS/usuario-controller')
usuario(app)



app.listen(port, ()=>{

console.log(`Example app listening on port ${locallhost}:${port}`)

})