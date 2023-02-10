const Usuario = require('../models/usuario.js')
const Tarefa = require('../models/tarefa.js')

// Cria vários objetos e os adiciona a um array para simular uma lista de objetos
const bdUsuarios = []
const bdTarefas = []



// Cria dois objetso do tipo Usuario e adiciona ao array bdUsuarios
const usuario = new Usuario('Nome do usuário', 'Email', 'Senha')
bdUsuarios.push(usuario)

const usuario2 = new Usuario('Nome do usuário 2', 'Email 2', 'Senha 2')
bdUsuarios.push(usuario2)



// Cria dois objetos do tipo Tarefa e adiciona ao array de bdTarefas
const tarefa = new Tarefa('Título da tarefa', 'Descrição da tarefa', 'A fazer', new Date())
bdTarefas.push(tarefa)

const tarefa2 = new Tarefa('Título da tarefa 2', 'Descrição da tarefa 2', 'A fazer', new Date())
bdTarefas.push(tarefa2)


// Exporta as listas de objetos
module.exports = { bdUsuarios, bdTarefas }