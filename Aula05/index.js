const express = require('express')
const app = express()
const port = 3000


//nodemon
app.get('/nodemon', (req, res) => {
res.send("Rastreamento da aplicação sendo feito com nodemon")
})

//postman
app.post('/usuarios', (req, res)=>{
    res.send("Cadatro do Usuário!")
})



app.listen(port, ()=>{

    console.log("servidor rodando na porta", port)
})