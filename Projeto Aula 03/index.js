const express = require('express');
const app = express();
const port = 3000;


// Criação de rota para a entidade "medico"
app.get('/', (req, res) => {
    
    res.send(` <html> <body> <button onclick="location.href='/tarefa'">Paciente</button>
                            <button onclick="location.href='/usuario'">Medico</button></body> </html> `);
    
  });


// Criação de rota para a entidade "paciente"
app.get('/tarefa', (req, res) => {
  res.send(`
  <h1>Rota ativada com GET e recurso paciente</h1>
  <p>Valores de paciente devem ser retornados</p>
  <button onclick="window.history.back()">Voltar</button>
`);
});

// Criação de rota para a entidade "medico"
app.get('/usuario', (req, res) => {
  res.send(`
    <h1>Rota ativada com GET e recurso medico</h1>
    <p>Valores de medico devem ser retornados</p>
    <button onclick="window.history.back()">Voltar</button>
    `);
});



app.listen(port, () => {
  console.log(`API rodando na porta ${port}`);
});