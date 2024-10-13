// Importer le client Lambda
const { LambdaClient, InvokeCommand } = require('@aws-sdk/client-lambda');
//require('dotenv').config();

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('send').addEventListener('click', async function(event) {
        event.preventDefault();
        
        const getMessage = document.getElementById('message');
        const getSender = document.getElementById('mail');
        const getObjet = document.getElementById('subject');
        const getUname = document.getElementById('name');

        const message = getMessage.value;
        const sender = getSender.value;
        const objet = getObjet.value;
        const uName = getUname.value;

        // Appel dynamique de la fonction Lambda
        const success = await invokeSendMail(sender, message, objet, uName);

        // Vider les champs du formulaire uniquement si l'envoi est réussi
        if (success) {
            alert("Votre message a été bien envoyé, Nous vous recontacterons sous peu");

            getUname.value = "";
            getMessage.value = "";
            getObjet.value = "";
            getSender.value = "";
        }
    });
});

// Créer un client Lambda
const lambdaClient = new LambdaClient({
    region: process.env.AWS_REGION, 
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID, 
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY 
    }
});

// Fonction pour déclencher la Lambda
const invokeSendMail = async (sender, message, subject, uName) => {
    // Créer les paramètres de la commande
    const params = {
        FunctionName: 'sendEmail', // Le nom de ta fonction Lambda
        Payload: JSON.stringify({
            sender:  sender,
            message: message,
            subject: subject,
            name: uName,
        }) // Les paramètres envoyés à ta fonction Lambda
    };

    try {
        // Exécuter la commande Invoke pour déclencher la Lambda
        const command = new InvokeCommand(params);
        const response = await lambdaClient.send(command);

        const responseParsed = JSON.parse(new TextDecoder('utf-8').decode(response.Payload));
        console.log('Lambda response:', responseParsed);

        // Retourner true si l'envoi est réussi
        return responseParsed.statusCode == 200;
    } catch (error) {
        console.error('Erreur lors de l\'appel de la fonction Lambda :', error);
        return false; // Retourner false si l'envoi échoue
    }
};
