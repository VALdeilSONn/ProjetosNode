function usuario() {
   const usuario = app.get('/usuario', (req, res) => {
        res.send(`
          <h1>Rota ativada com GET e recurso medico</h1>
          <p>Valores de medico devem ser retornados</p>
          <button onclick="window.history.back()">Voltar</button>
          `)}); }


module.exports = usuario           