function tarefa(app) {
    app.get('/tarefa', (req, res) => {
        res.send('<h1>Rota ativada com GET e recurso tarefa</h1>')
    });
}


module.exports = tarefa