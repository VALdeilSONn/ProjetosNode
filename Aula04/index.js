// importação
const express = require('express') //CommonJS
const s = require('./MODULOS/constante')
const obj = require('./MODULOS/objeto')
const app = express()
const port = 3000

//import uma função
const funcao = require('./MODULOS/funcao')
funcao()



// testando uma rota
const usuario = require('./MODULOS/constante')
usuario()



// descontruir e imprimindo na tela
const {msg1, msg2} = require ('./MODULOS/descontruindoObj')
console.log(msg1, msg2)


// imprimir na tela
console.log(s)
console.log(obj)

app.listen(port, () =>{
console.log("Servidor rodando na porta ", port)
})