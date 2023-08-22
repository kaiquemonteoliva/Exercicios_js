


// Importar as bibliotecas necessárias
const https = require("https");
const fs = require("fs");

// Criar uma função para enviar uma mensagem de parabens
function sendGreeting(contactName, contactNumber) {
    // Construir a URL da API do WhatsApp
    const url = https: api.whatsapp.com/send?phone=${contactNumber}&text=Feliz aniversário, ${contactName}!;

    // Fazer uma solicitação HTTP para a API
    const response = https.request(url, (res) => {
        // Verificar o status da resposta
        if (res.statusCode === 200) {
            // Sucesso!
            console.log('Mensagem enviada para ${contactName}');
        } else {
            // Falha!
            console.log('Erro ao enviar mensagem para ${contactName}');
        }
    });

    // Enviar a solicitação
    response.end();
}

// Ler a lista de contatos
const contacts = fs.readFileSync("contacts.json");

// Iterar sobre os contatos
for (const contact of contacts) {
    // Enviar uma mensagem de parabens
    sendGreeting(contact.name, contact.number);
}