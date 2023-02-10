const Usuario = require('../models/Usuario.js')

// Classe importada exclusivamente para fazer o acesso ao Banco de Dados. Para qualquer operação, ela será utilizada
const UsuarioDAO = require('../DAO/UsuarioDAO.js')


class usuarioController {
    static rotas(app){
        // Rota para os recursos usuario. O parâmtro das rotas aparece na primeira parte entre aspas simples e logo depois são chamados os métodos da classse
        app.get('/usuario', usuarioController.listar)
        app.get('/usuario/email/:email', usuarioController.buscarPorEmail)
        app.post('/usuario', usuarioController.inserir)
        app.put('/usuario/email/:email', usuarioController.atualizaUsuario)
        app.delete('/usuario/email/:email', usuarioController.deletarUsuario)
    }



    // Abaixo todos os métodos dessa classe são estáticos, isso quer dizer que podemos usá-los, SEM a necessidade de instanciá-los usando a palavrinha NEW
    
    static async listar(req, res){
        // Chama a classe usuarioDAO com o método listar, q agora é resposável pelo acesso ao Banco de Dados. Todas as vezes, a partir dessa REFATORAÇÃO, que nosso sistema tiver que acessar o banco, quem vai fazer isso, será a classe UsuarioDAO. 
        const usuarios = await UsuarioDAO.listar()

        // Devolve a lista de usuarios e o status code 200. Quer dizer que a rquisição ocorreu com sucesso.
        res.status(200).send(usuarios)
    }



    static async inserir(req, res){
        // Cria um novo usuario recebendo as informações que vem do corpo da requisição através do req.body     
        const usuario = {
            nome: req.body.nome,
            email: req.body.email,
            senha: req.body.senha
        }


        // Classe UsuarioDAO é chamada com o método inserir Adiciona o usuario na lista de usuarios        
        const result = await UsuarioDAO.inserir(usuario)

        if(result.erro) {
            res.status(500).send(result)
        }

        // Padrão POST, o status code de recurso criado é o 201, ou seja, houve a criação de um recurso. Abaixo personalizamos a resposta que será mostrada, caso o cadastro se realize. Será mostrada as mensagens abaixo e também o objeto cadastrado
        res.status(201).send({"Menssagem": "Usuário Criado com Sucesso", "Novo Usuário: ": usuario})
       
    }



    static async buscarPorEmail(req, res){
        // Classe UsuarioDAO é chamada com o método de Busca ao email na lista de usuarios
        const usuario = await UsuarioDAO.buscarPorEmail(req.params.email)

        // Se o usuario não for encontrado, devolve um erro
        if(!usuario){
            // O status code que informa se o conteúdo não foi encontrado
            res.status(404).send('Usuário não encontrado')
        }
        // Se o usuario for encontrado, devolve o usuario e mostra o status code 200, que quer dizer operação bem suceddida
        res.status(200).send(usuario)
    }



    static async atualizaUsuario(req,res) {
        //Classe UsuarioDAO é chamada com o método de busca pelo email
        // const usuario = await UsuarioDAO.buscarPorEmail(req.params.email)
        const usuario = new Usuario(req.body.nome, req.body.email, req.body.senha)


        //Classe UsuarioDAO é chamada com o método atualizar, que será reponsável por acessar o banco e cadastrar o objeto usuário já preenchido com as informações que vieram do corpo via req.body na requisição. Observe que estamos enviando o usuário criado e preenchido como o req.body logo acima. Também passaremos o email pela URL do nosso endpoint, pois na clase UsuarioDAO será verificado o suário certo que será feita a atualização. Lembre-se que quem faz o acesso ao banco agora é a classe DAO, por isso estamos passando para ela
        const result = await UsuarioDAO.atualizar(req.params.email, usuario)
        

        if (result.erro) {
            res.status(500).send('Erro ao atualizar o usuário')
        }

        // Tudo correndo certo, uma mensagem será informada com o status de bem sucedido (200). Também personalizamos um pouco o response (resposta) para mostrar como ficaram as informações do usuário.

        res.status(200).send({"Menssagem": "Dados atualizado", "Usuário: ": usuario})
        
    }



    static async deletarUsuario(req, res){
        // Busca o email na lista de usuarios através da classe UsuarioDAO com o método deletar, passando por parâmetro o email que virá da URL em nossa rota, ou seja, em nosso endpoint através do req.params.email
        const usuario = await UsuarioDAO.deletar(req.params.email)
        
        // Se o usuario não for encontrado, devolve um erro staus code 404
        if(usuario.erro){
           return res.send({'Menssagem': 'Usuário não encontrado'})
        }
   
        // Status code 204 NÃO Devolve o usuario deletado || O 200 é solicitação bem sucedida. Pode ser usada aqui, se for usada, a resposta abaixo pode ser mostrada
        res.status(200).send({"Mensagem: ": `O usuário do email ${usuario.email} foi deletado`})
    }
}

//  Exporta o usuarioController para poder ser acessado a partir de outros arquivos
module.exports = usuarioController