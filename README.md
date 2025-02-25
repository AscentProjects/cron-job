# CronJob Script

Este projeto mantém seu servidor ativo ao enviar requisições periódicas para evitar que ele entre em modo standby.

## 🚀 Como funciona?
O script utiliza **node-cron** para executar requisições HTTP a cada 15 minutos, garantindo que seu servidor permaneça ativo.

## 📦 Tecnologias utilizadas
- Node.js
- Axios
- Node-cron

## 📌 Instalação e execução local

1. Clone este repositório:
   ```sh
   git clone https://github.com/seu-usuario/cron-job.git
   cd cron-job
   ```

2. Instale as dependências:
   ```sh
   npm install
   ```

3. Execute o script:
   ```sh
   npm start
   ```

## ☁️ Hospedagem no Render

1. Faça login em [Render](https://dashboard.render.com/).
2. Crie um **Background Service** e conecte ao repositório do GitHub.
3. Configure os comandos:
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
4. Escolha um plano gratuito e inicie o serviço.

## 🔄 Agendamento
O script é executado a cada 15 minutos, enviando requisições para as URLs especificadas.

```javascript
const axios = require("axios");
const cron = require("node-cron");

cron.schedule("*/15 * * * *", async () => {
    try {
        await axios.get("https://meusite.com/ping");
        await axios.get("https://meusite.com/ping2");
        console.log("Pings enviados com sucesso!");
    } catch (error) {
        console.error("Erro ao fazer requisições:", error.message);
    }
});

console.log("Cron job iniciado!");
```

## 📄 Licença
Este projeto está sob a licença MIT. Sinta-se à vontade para utilizá-lo e modificá-lo conforme necessário.

---

Desenvolvido por [Danilo Sousa](https://www.linkedin.com/in/danilloubr/), qualquer dúvida entra em contato :)

