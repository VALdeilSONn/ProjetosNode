const Tarefa = require("../models/Tarefa")

class tarefaController {
    static rotas(app){
        // Rota para o recurso tarefa
        app.get('/tarefa', tarefaController.listar)
        app.post('/tarefa', tarefaController.inserir)
    }

    static listar(req, res){
        const tarefa = new Tarefa('Título da tarefa', 'Descrição da tarefa', 'A fazer', new Date())
        res.send('Rota ativada com GET e recurso tarefa: lista de tarefas deve ser retornada')
        // Console log do objeto tarefa
        console.log(tarefa)
    }

    static inserir(req, res){
        res.send('Rota ativada com POST e recurso tarefa: tarefa deve ser inserida')
        // Console log do corpo da requisição
        console.log(req.body)
    }
}

module.exports = tarefaController