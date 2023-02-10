// Importa o bd.js para poder usar o banco de dados simulado
const db = require("../infra/db");

// Essa classe encapsula o acesso ao Banco de Dados. Todos os métodos abaixos são estáticos. Isso quer dizer que não precisamos instanciar a classe para usá-los e serão chamados pela classe UsuarioController... Alguns vão dar retorno e para outros, isso não será necessário
class UsuarioDAO {
  static listar() {
    const query = "SELECT * FROM USUARIOS";
    return new Promise((resolve, reject) => {
      db.all(query, (err, rows) => {
        if (err) {
          reject(err);
        }
        resolve(rows);
      });
    });
  }

  static inserir(usuario) {
    const query = `INSERT INTO USUARIOS (nome, email, senha) VALUES (?, ?, ?)`;

    return new Promise((resolve, reject) => {
      db.run(query, [usuario.nome, usuario.email, usuario.senha], (err) => {
        if (err) {
          reject({
            messagem: "Erro ao inserir o usuário",
            erro: err,
          });
        }
        resolve(usuario);
      });
    });
  }

  static buscarPorEmail(email) {
    const query = "SELECT * FROM USUARIOS WHERE email = ?";
    return new Promise((resolve, reject) => {
      db.get(query, [email], (err, row) => {
        if (err) {
          reject(false);
        }
        resolve(row);
      });
    });
  }

  static atualizar(email, usuario) {
    const query =
      "UPDATE USUARIOS SET nome = ?, email = ?, senha = ? WHERE email = ?";
    return new Promise((resolve, reject) => {
      db.run(
        query,
        [usuario.nome, usuario.email, usuario.senha, email],
        (err) => {
          if (err) {
            reject({
              mensagem: "Erro ao atualizar o usuário",
              erro: err,
            });
          }
          resolve({ mensagem: "Usuário atualizado com sucesso" });
        }
      );
    });
  }

  static deletar(email) {
    const query = "DELETE FROM USUARIOS WHERE email = ?";
    return new Promise((resolve, reject) => {
      db.run(query, [email], (err) => {
        if (err) {
          reject({
            mensagem: "Erro ao deletar o usuário",
            erro: err,
          });
        }

        resolve({ mensagem: "Usuário deletado com sucesso", email: email });
      });
    });
  }
}

// Exporta a classe
module.exports = UsuarioDAO;
