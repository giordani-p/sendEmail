module.exports = {
    clientId: process.env.YOUR_CLIENT_ID, // ID do aplicativo (cliente)
    clientSecret: process.env.YOUR_CLIENT_SECRET, // Valor do Segredo do Cliente
    tenantId: process.env.YOUR_TENANT_ID, // ID do diretório (locatário)
    scope: 'https://graph.microsoft.com/.default',
    tokenEndpoint: `https://login.microsoftonline.com/YOUR_TENANT_ID/oauth2/v2.0/token`
};
