const nodemailer = require('nodemailer');
const dotenv = require('dotenv').config();

//configuracion del nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail',//este sera el proveedor
    auth: {
        user: process.env.EMAIL_USER,//mi correo
        pass: process.env.EMAIL_PASS,// mi contraseña de aplicaciones
    },
});

const sendEmailNotification = (contact) => {
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: 'endifraymv@gmail.com',
        subject: 'Tienes un nuevo mensaje',
        text: `Has recibido un nuevo mensaje de ${contact.name}. email: ${contact.email}. Mensaje: ${contact.message}`,
    };
    return transporter.sendMail(mailOptions);
}

module.exports = sendEmailNotification;