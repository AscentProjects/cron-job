const axios = require("axios");
const cron = require("node-cron");

cron.schedule("*/10 * * * *", async () => {
    try {
        await axios.get("https://expert-tools.onrender.com");
        await axios.get("https://expert-tools-api.onrender.com");
        console.log("Pings enviados com sucesso!");
    } catch (error) {
        console.error("Erro ao fazer requisições:", error.message);
    }
});

console.log("Cron job iniciado!");
