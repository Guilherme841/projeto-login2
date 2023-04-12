const mongoose = require("mongoose");

async function connectToDataBase() {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.user_name}:${process.env.senha_pass}@cadastro.asvkcx7.mongodb.net/?retryWrites=true&w=majority`
    );
    console.log("Conexão estabelecida com sucesso!");
  } catch (error) {
    console.error("Erro ao conectar com o banco de dados:", error);
  }
}

module.exports = connectToDataBase;
