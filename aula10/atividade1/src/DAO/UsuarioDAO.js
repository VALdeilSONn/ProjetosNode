// Importa o bd.js para poder usar o banco de dados simulado
const { bdUsuarios } = require("../infra/bd");


// Essa classe encapsula o acesso ao Banco de Dados. Todos os métodos abaixos são estáticos. Isso quer dizer que não precisamos instanciar a classe para usá-los e serão chamados pelo nome da classe que eles pertencem UsuarioController... 
// Alguns vão dar retorno e em outros, isso não será necessário
class UsuarioDAO {
  // Executa a funcionalidade de retornar o conteúdo do Banco ao ser chamada pelo controller
  static listar() {
    return bdUsuarios;
  }


  // Executa a funcionalidade de inserir as informações no Banco ao ser chamada pelo controller. As informações chegam por parâmetro
  static inserir(usuario) {
    bdUsuarios.push(usuario);
  }


  // Recebe a chamada do controller sendo passada o email como parâmetro, ela busca  as informações no Banco e dar  um return devolvendo o conteúdo encontrado para quem a chamou
  static buscarPorEmail(email) {
    return bdUsuarios.find((usuario) => usuario.email === email);
  }


  // Recebe a chamada do controller sendo passada para ela o email como parâmetro, ela busca o susário daquele email informado no Banco, Deleta o usuário encontrado e dar um return devolvendo o Email de quem foi deletado.
  static deletar(email) {
    const usuario = bdUsuarios.find((usuario) => usuario.email === email);
    const index = bdUsuarios.indexOf(usuario);
    bdUsuarios.splice(index, 1);
    return usuario;
  }


  // Recebe a chamada do controller sendo passada para ela o email e um usuário como parâmetros, a função verifica o usuário dono do email e atualiza as informações de quem ele encontrou o email procurado. 
  static atualizar(email, usuario) {
    const usuarioAtual = bdUsuarios.find((usuario) => usuario.email === email);
    const index = bdUsuarios.indexOf(usuarioAtual);
    bdUsuarios[index] = usuario;
  }
}


// Exporta a classe
module.exports = UsuarioDAO;
