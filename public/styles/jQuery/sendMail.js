const nodemailer = require('nodemailer');
const { GMAIL_MAIL, GMAIL_PASS } = process.env;

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: GMAIL_MAIL,
        pass: GMAIL_PASS
    }
});

const form = document.getElementById('emailForm');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(form);
    const mail = formData.get('mail');
    const subject = formData.get('subject');
    const message = formData.get('message');
    const name = formData.get('name');

    const mailOptions = {
        from: mail,
        to: GMAIL_MAIL,
        subject: subject,
        text: message
    };

    sendEmail(mailOptions)
        .then(info => {
            console.log('Email envoyé: ' + info.response);
        })
        .catch(error => {
            console.error(error);
        });
});

function sendEmail(mailOptions) {
    return new Promise((resolve, reject) => {
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                reject(error);
            } else {
                resolve(info);
            }
        });
    });
}
