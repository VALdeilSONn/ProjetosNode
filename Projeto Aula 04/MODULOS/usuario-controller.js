function usuario(app) {
    app.get('/usuario', (req, res) => {
        res.send('<h1>Rota ativada com GET e recurso usuario</h1>')
    });
}

module.exports = usuario 