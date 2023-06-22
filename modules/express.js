const jwt = require("jsonwebtoken");
const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const path = require("path");
const cookieParser = require("cookie-parser");
const UserModel = require("../src/models/user.model");
require("dotenv").config();
// const Cookies = require('js-cookie');
// const Cookies = require("universal-cookie");
// const session = require("express-session");
// const passport = require("passport");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname)));
app.use(cookieParser());

app.post("/users", async (req, res) => {
  try {
    const { pass } = req.body;

    const saltRound = 10;
    const hashedPass = await bcrypt.hash(pass, saltRound);

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
    res.setHeader("Set-Cookie", `token=${token}; HttpOnly`);
    res.cookie('token', token, { secure: false, httpOnly: false, path: "/" });
    res.sendFile(path.join(__dirname, "../logado.html"));
  } catch (error) {
    res.status(500).send(error.message);
    console.log(error);
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, pass } = req.body;

    const user = await UserModel.findOne({ email });

    if (!user) {
      // return console.log("Credencias inválidas!")
      return res.status(401).send("Email ou senha inválidos");
    }

    const sincPass = await bcrypt.compare(pass, user.pass);

    if (!sincPass) {
      // return console.log("Credencias inválidas!")
      return res.status(401).send("Email ou senha inválidos");
    } else {
      res.sendFile(path.join(__dirname, "../logado.html"));
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// app.post("/login", async (req, res) => {
//   try {

//     const {email, pass} = req.body;

//     const user = await UserModel.findOne({email});

//     if (user) {

//       const match = await bcrypt.compare(pass, user.pass)
//       if (match) {

//         const token = jwt.sign({email: user.email}, "Chave", {expiresIn: "10h"})

//         req.session.user = {
//           username: user.email,
//           loggedIn: true,
//         };
//         res.send("Logado com sucesso!")
//         res.cookie("token", token, {httpOnly: true})
//         res.sendFile(path.join(__dirname, "../logado.html"))
//       } else {
//         res.send("Credencias inválidas")
//       }
//     } else {
//       res.send("Credencias invalidas!");
//     }

//   } catch (err) {
//     console.log("Erro no sistema express", err);
//   }
// });

const port = 5500;

app.listen(port, () => {
  console.log(`Rodando com express na porta ${port}!`);
});
