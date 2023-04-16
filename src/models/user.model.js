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
});

const authSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  pass: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
});

const UserModel = mongoose.model("user", userSchema);
const authModel = mongoose.model("auth", authSchema);

module.exports = UserModel;
module.exports = authModel;
