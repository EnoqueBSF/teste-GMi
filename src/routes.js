const { Router } = require('express');

const routes = new Router();

routes.get('/', (req, res) => {
  return res.json([{razao: "Enoque Belmiro", codCli: "C09999", cnpj: "99.999.999/0002-99", senha: "123456", uf:"PB", cidade: "João Pessoa", vendedor: "DIEGO SILVA", codVendedor: "99999", emailCadastro: "enoque.filho@gmimportacao.com.br", verAcesso: "0"}])
});

module.exports = routes;