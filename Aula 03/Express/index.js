const express = require('express') // importando o 'express
const app = express() // constante app recebendo a função express
const port = 3000 // definindo a porta 3000


// Definindo a Rota '/' para mostrar a mensagem hello world
app.get('/home', (req, res) => { 
  res.send('Olá!') 
})


// O  servidor está escutando na porta 3000. Subiu o servidor.
app.listen(port, () => { 
  console.log(`Example app listening on port ${port}`)
})