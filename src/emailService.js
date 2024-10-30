const axios = require('axios');
const { getAccessToken } = require('./authService');

async function sendEmail() {
    const accessToken = await getAccessToken();

    const emailData = {
        "message": {
            "subject": "Teste SendEmail com Microsoft Graph",
            "body": {
                "contentType": "Text",
                "content": "Olá, este é um email de teste enviado via Microsoft Graph API!"
            },
            "toRecipients": [
                {
                    "emailAddress": {
                        "address": "email@gmail.com",
                    }
                }
            ]
        },
        "saveToSentItems": "true"
    };

    try {
        const response = await axios.post(
            'https://graph.microsoft.com/v1.0/users/dev@edukae.com.br/sendMail',
            emailData,
            {
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Content-Type': 'application/json'
                }
            }
        );
        console.log('Email enviado:', response.status);
    } catch (error) {
        console.error('Erro ao enviar email:', error.response ? error.response.data : error.message);
    }
}

module.exports = { sendEmail };
