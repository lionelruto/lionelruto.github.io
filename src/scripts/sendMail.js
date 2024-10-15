// Importer le client Lambda
const { LambdaClient, InvokeCommand } = require('@aws-sdk/client-lambda');
require('dotenv').config();

document.getElementById('emailForm').addEventListener('click', function(event) {
    console.log("sending mail")
    event.preventDefault();
    const message = document.getElementById('message').value;
    const sender = document.getElementById('mail').value;
    const objet = document.getElementById('subject').value;
    const uName = document.getElementById('name').value;
    // Appel dynamique de la fonction Lambda
    invokeSendMail(sender, message,objet);
});

    // Créer un client Lambda
    const lambdaClient = new LambdaClient({
        region: process.env.AWS_REGION, // Remplace par la région de ta fonction Lambda
        credentials: {
            accessKeyId: process.env.AWS_ACCESS_KEY_ID , // Remplace par ton Access Key
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY // Remplace par ton Secret Key
        }
    });

    // Fonction pour déclencher la Lambda
    const invokeSendMail = async (sender, uName, message, subject) => {
        // Créer les paramètres de la commande
        const params = {
            FunctionName: 'sendMail', // Le nom de ta fonction Lambda
            Payload: JSON.stringify({
                sender:  sender,
                name: uName,
                message: message,
                subject: subject
            }) // Les paramètres envoyés à ta fonction Lambda
        };

        try {
            // Exécuter la commande Invoke pour déclencher la Lambda
            const command = new InvokeCommand(params);
            const response = await lambdaClient.send(command);

            // Afficher la réponse de la Lambda
            console.log('Lambda response:', JSON.parse(new TextDecoder('utf-8').decode(response.Payload)));
        } catch (error) {
            console.error('Erreur lors de l\'appel de la fonction Lambda :', error);
        }
    };