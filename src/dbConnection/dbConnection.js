const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const Contact = require('../models/contact.models')


mongoose.connect(process.env.DB_CONNECTION)
    .then(connection => {
        console.log('Conectado correctamente a mongoose');
    }).catch(error => {
    console.log('Error de conexion', error);
})

function createContact(newUser) {
    Contact.create(newUser);
}

function getContact() {
   return  Contact.find();
}


module.exports = {
    createContact,
    getContact,

}