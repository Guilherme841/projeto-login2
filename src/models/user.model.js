const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  ultimoNome: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  pass: {
    type: String,
    required: true,
  },
  profissao: {
    type: String,
    required: true,
  },
  data: {
    type: String,
    required: true,
  },
  telefone: {
    type: String,
    required: true,
  },
  iestado: {
    type: String,
    required: true,
  },
  token: {
    type: String,
    require: true
  }
});

const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;

