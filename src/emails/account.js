const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        subject: 'Thanks for joining!',
        from: 'yurageyvakh@gmail.com',
        text: `Welcome to the app, ${name}`
    });
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        subject: 'Unsubscribe',
        from: 'yurageyvakh@gmail.com',
        text: `So sad to see tou leaving us!(`
    });
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}