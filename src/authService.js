const axios = require('axios');
const config = require('./msGraph');

let accessToken = null;
let tokenExpiration = 0;

async function getAccessToken() {
    const now = Date.now();

    // Verifica se o token ainda é válido
    if (accessToken && now < tokenExpiration) {
        return accessToken;
    }

    // Gera um novo token
    const response = await axios.post(
        config.tokenEndpoint,
        new URLSearchParams({
            client_id: config.clientId,
            client_secret: config.clientSecret,
            scope: config.scope,
            grant_type: 'client_credentials'
        })
    );

    accessToken = response.data.access_token;
    // Define o tempo de expiração (1 hora a partir de agora)
    tokenExpiration = now + 3600 * 1000;

    return accessToken;
}

module.exports = { getAccessToken };
