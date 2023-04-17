const jwt = require("jsonwebtoken");
const express = require("express");
const bodyParser = require("body-parser");
const UserModel = require("../src/models/user.model");
require("dotenv").config();

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/cadastrado", async (req, res) => {
  res.send("logado com sucesso!")
});

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
      iestado: req.body.iestado,a
    });

    res.status(201).json(user);
    console.log(req.body);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, pass } = req.body;

    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(401).send("Email ou senha inválidos");
    }

    if (user.pass !== pass) {
      return res.status(401).send("Email ou senha inválidos");
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    // res.status(200).json({ token });
    res.redirect("http://localhost:5500/cadastrado")
  } catch (error) {
    res.status(500).send(error.message);
  }
});

const 

const port = 5500;

app.listen(port, () => {
  console.log(`Rodando com express na porta ${port}!`);
});
