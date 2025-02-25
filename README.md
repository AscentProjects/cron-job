# CronJob Script

Este projeto mantém seu servidor ativo ao enviar requisições periódicas para evitar que ele entre em modo standby e agora inclui um servidor web para monitoramento.

## 🚀 Como funciona?

O script utiliza **Express.js** para criar um servidor web e **node-cron** para executar requisições HTTP a cada 15 minutos, garantindo que seu servidor permaneça ativo.

## 📦 Tecnologias utilizadas

- Node.js
- Express.js
- Axios
- Node-cron

## 📌 Instalação e execução local

1. Clone este repositório:

   ```sh
   git clone https://github.com/AscentProjects/cron-job
   cd cron-job
   ```

2. Instale as dependências:

   ```sh
   npm install
   ```

3. Execute o servidor:

   ```sh
   npm start
   ```

4. Acesse o servidor no navegador:
   ```
   http://localhost:3000
   ```

## ☁️ Hospedagem no Render

1. Faça login em [Render](https://dashboard.render.com/).
2. Crie um **Web Service** e conecte ao repositório do GitHub.
3. Configure os comandos:
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
4. Escolha um plano gratuito e inicie o serviço.

## 🔄 Agendamento e servidor web

O script é executado a cada 15 minutos, enviando requisições para as URLs especificadas, além de oferecer um servidor web para monitoramento.

```javascript
const express = require("express");
const axios = require("axios");
const cron = require("node-cron");

const app = express();
const PORT = process.env.PORT || 3000;

// Agendamento da cron job a cada 15 minutos
cron.schedule("*/15 * * * *", async () => {
  try {
    await axios.get("https://meusite.com/ping");
    await axios.get("https://meusite.com/ping2");
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
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
```

## 📄 Licença

Este projeto está sob a licença MIT. Sinta-se à vontade para utilizá-lo e modificá-lo conforme necessário.

---

Desenvolvido por [Danilo Sousa](https://www.linkedin.com/in/danilloubr/), qualquer dúvida entra em contato :)
