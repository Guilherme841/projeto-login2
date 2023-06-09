const jwt = require("jsonwebtoken");
const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const path = require("path")
const cookieParser = require("cookie-parser")
const UserModel = require("../src/models/user.model");
require("dotenv").config();

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname)));
app.use(cookieParser());

// app.get("/cadastrado", async (req, res) => {
//   res.send("Logado com sucesso!")
// });

app.use((req, res, next) => {
  const token = req.cookies.token; // Obtém o token do cookie

  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        console.log("token Invalido")
        next();
      } else {
        // Token válido, definir informações de autenticação no objeto de solicitação (req)
        console.log("token valido")
        req.user = decoded;
        res.sendFile(path.join(__dirname, "../logado.html"));
      }
    });
  } else {
    // Nenhum token encontrado, continuar sem autenticação
    console.log("Nenhum token encontrado!")
    next();
  }
});

app.post("/users", async (req, res) => {
  try {

    const { pass } = req.body;

    const saltRound = 10
    const hashedPass = await bcrypt.hash( pass , saltRound ) 

    const user = await UserModel.create({
      nome: req.body.nome,
      ultimoNome: req.body.ultimoNome,
      email: req.body.email,
      pass: hashedPass,
      profissao: req.body.profissao,
      data: req.body.data,
      telefone: req.body.telefone,
      iestado: req.body.iestado,
    });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    if (token) {
      res.cookie('token', token, { secure: true, httpOnly: true });
      res.sendFile(path.join(__dirname, "../logado.html"));
    } else {
      res.status(500).send("Erro ao criar token de autenticação");
    }
    // res.send("Cadastrado com sucesso!")
    // res.status(201).json(user);
    // console.log(req.body);
  } catch (error) {
    res.status(500).send(error.message);
    console.log(error)
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, pass } = req.body;

    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(401).send("Email ou senha inválidos");
    }

    const sincPass = await bcrypt.compare(pass, user.pass);

    if (!sincPass) {
      return res.status(401).send("Email ou senha inválidos");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});

const port = 5500;

app.listen(port, () => {
  console.log(`Rodando com express na porta ${port}!`);
});
