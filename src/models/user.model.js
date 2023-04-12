const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    nome: {
        type: String,
        require: true,
    },
    sobrenome: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    senha: {
        type: String,
        require: true,
    },
    profissao: {
        type: String,
        require: true,
    },
    nascimento: {
        type: String,
        require: true,
    },
    telefone: {
        type: String,
        require: true,
    },
    estado: {
        type: String,
        require: true,
    },
})

const UserModel = mongoose.model("user", userSchema)

module.exports = UserModel;