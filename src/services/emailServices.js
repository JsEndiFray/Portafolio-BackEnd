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
        to: process.env.EMAIL_USER,
        subject: `Nuevo mensaje de ${contact.name}`,
        text:
            `Has recibido un nuevo mensaje. 
             De: ${contact.name} 
            Email: ${contact.email}
            Mensaje: ${contact.message}
            
            -------------------------
            Este mensaje fue enviado desde el formulario de contacto de tu página web.`

    };
    return transporter.sendMail(mailOptions);
}

module.exports = sendEmailNotification;