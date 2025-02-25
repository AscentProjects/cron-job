const axios = require("axios");
const cron = require("node-cron");
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

cron.schedule("*/10 * * * *", async () => {
  try {
    await axios.get("https://expert-tools.onrender.com");
    await axios.get("https://expert-tools-api.onrender.com");
    console.log("Pings enviados com sucesso!");
  } catch (error) {
    console.error("Erro ao fazer requisições:", error.message);
  }
});

// Rota para verificar se o servidor está rodando
app.get("/", (req, res) => {
  res.send("Keep-Alive Server is Running 🚀");
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta: ${PORT}`);
});

console.log("Cron job iniciado!");
