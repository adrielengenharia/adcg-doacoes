const https = require('https');
const fs = require('fs');
const axios = require('axios');

async function registerWebhook() {
  const cert = fs.readFileSync('cora_certs/certificate.pem');
  const key = fs.readFileSync('cora_certs/private-key.key');
  const clientId = 'int-2LTnZVEZClvxMZiPJcscY5';
  
  const httpsAgent = new https.Agent({ cert, key });
  
  try {
    console.log("1. Obtendo token da Cora...");
    const authData = new URLSearchParams();
    authData.append('grant_type', 'client_credentials');
    authData.append('client_id', clientId);
    
    const authRes = await axios.post('https://matls-clients.api.cora.com.br/token', authData.toString(), {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      httpsAgent
    });
    
    const token = authRes.data.access_token;
    console.log("Token obtido com sucesso!");
    
    console.log("2. Registrando webhook...");
    // Alguns endpoints para testar em produção, geralmente /v1/webhooks ou /v2/webhooks
    const webhookUrl = 'https://doacoes-igreja.vercel.app/api/cora/webhook';
    
    const webhookRes = await axios.post('https://matls-clients.api.cora.com.br/v2/webhooks', {
      url: webhookUrl,
      events: ["CASH_IN.PIX.RECEIVED"] 
    }, {
      headers: { 
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      httpsAgent
    });
    
    console.log("Webhook registrado com sucesso!", webhookRes.data);
  } catch (error) {
    console.error("Erro:", error.response ? JSON.stringify(error.response.data, null, 2) : error.message);
    
    // Tentar PUT se o POST falhar por já existir
    if (error.response && error.response.status === 400 && error.response.data?.error?.includes('exist')) {
      console.log("Webhook já existe. Tentando atualizar com PUT...");
      // Ação alternativa...
    }
  }
}

registerWebhook();
