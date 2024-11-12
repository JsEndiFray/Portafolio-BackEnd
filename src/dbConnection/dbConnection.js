const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const Contact = require('../models/contact.models')

let isConnected = false; // Variable para verificar si ya estamos conectados

// Función para conectar a la base de datos
const connectToDatabase = async () => {
    if (isConnected) return; // Reutiliza la conexión existente si ya está establecida
    try {
        await mongoose.connect(process.env.DB_CONNECTION);
        isConnected = true;
        console.log('Conectado correctamente a MongoDB');
    } catch (error) {
        console.log('Error de conexión:', error);
        throw error;
    }
};

// Función para crear un nuevo contacto
const createContact = async (newUser) => {
    await connectToDatabase();
    try {
        return await Contact.create(newUser);
    } catch (error) {
        console.error("Error al crear el contacto:", error);
        throw error;
    }
};

// Función para obtener los contactos
const getContact = async () => {
    await connectToDatabase();
    try {
        return await Contact.find().limit(5); // Limitar a los primeros 5 resultados
    } catch (error) {
        console.error("Error al obtener los contactos:", error);
        throw error;
    }
};

module.exports = {
    createContact,
    getContact,
};
/*
console.log("DB_CONNECTION:", process.env.DB_CONNECTION); //depuracion
mongoose.connect(process.env.DB_CONNECTION)
    .then(connection => {
        console.log('Conectado correctamente a mongoose');
    }).catch(error => {
    console.log('Error de conexion', error);
})

// Función para crear un nuevo contacto
function createContact(newUser) {
    return Contact.create(newUser);
}
// Función para obtener los contactos
function getContact() {
   return  Contact.find().limit(5);
}
module.exports = {
    createContact,
    getContact,
}*/
