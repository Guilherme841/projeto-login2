// const express = require("express");
// const UserModel = require("../src/models/user.model");

// const app = express();
// app.use(express.json());

// // app.get("/nome", (req,res) => {
// //     res.status(200).send("<h1>Hello world<h1>");
// // })

// app.post("/users", async (req, res) => {
//   try {
//     const user = await UserModel.create(req.body);

//     res.status(201).json(user);
//   } catch (error) {
//     res.status(500).send(error.message);
//   }
// });

// const port = 5500;

// app.listen(port, () => {
//   console.log(`Rodando com express na porta ${port}!`);
// });

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
