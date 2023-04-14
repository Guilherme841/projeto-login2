const express = require("express");
const bodyParser = require("body-parser");
const UserModel = require("../src/models/user.model");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/users", async (req, res) => {
  try {
    const user = await UserModel.create({
      nome: req.body.nome,
      ultimoNome: req.body.ultimoNome,
      email: req.body.email,
      pass: req.body.pass,
      profissao: req.body.profissao,
      data: req.body.data,
      telefone: req.body.telefone,
      iestado: req.body.iestado
    });

    res.status(201).json(user);
    console.log(req.body)
  } catch (error) {
    res.status(500).send(error.message);
  }
});

const port = 5500;

app.listen(port, () => {
  console.log(`Rodando com express na porta ${port}!`);
});
