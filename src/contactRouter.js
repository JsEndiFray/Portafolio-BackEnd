const express = require('express');
const router = express.Router();

// Ruta GET
router.get('/', (req, res) => {
    res.status(200).json({ msg: 'Ruta GET funcionando correctamente' });
});

// Ruta POST
router.post('/', (req, res) => {
    const { name, email, message } = req.body;
    console.log('Datos recibidos:', { name, email, message });
    res.status(200).json({ msg: 'Mensaje enviado correctamente' });
});

module.exports = router;