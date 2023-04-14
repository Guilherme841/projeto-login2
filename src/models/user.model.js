const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    nome: {
        type: String,
        require: true,
    },
    ultimoNome: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    pass: {
        type: String,
        require: true,
    },
    profissao: {
        type: String,
        require: true,
    },
    data: {
        type: String,
        require: true,
    },
    telefone: {
        type: String,
        require: true,
    },
    iestado: {
        type: String,
        require: true,
    },
})

const UserModel = mongoose.model("user", userSchema)

module.exports = UserModel;