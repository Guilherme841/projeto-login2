const express = require("express");
const UserModel = require("../src/models/user.model");

const app = express();
app.use(express.json());

// app.get("/nome", (req,res) => {
//     res.status(200).send("<h1>Hello world<h1>");
// })

app.post("/users", async (req, res) => {
  try {
    const user = await UserModel.create(req.body);

    res.status(201).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

const port = 5500;

app.listen(port, () => {
  console.log(`Rodando com express na porta ${port}!`);
});
