const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();


const dbConnection = require('./src/dbConnection/dbConnection');
const sendEmailNotification = require('./src/services/emailServices')

const app = express();
const port = process.env.PORT || 5001;

// Acceso a log
// const logStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {
//     flags: 'a'
// })
//La se convierte en string
// app.use((req, res, next) => {
//     req.requesTime = new Date().toISOString();
//     next();
// })
// // que que hago pedir la ip fecha el metodo el tiempo
// app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] - :response-time ms - :request-body - :request-time', {stream: logStream}));
//
//
// morgan.token('request-body', (req)=> JSON.stringify(req.body));
// morgan.token('request-time', (req)=> req.requesTime);

//Debug middleware verificar todas solicitudes.
// app.use((req, res, next)=>{
//     //Debug of the request
//     console.log('Request received');
//
//     //Debug of the body
//     console.log('Body:', req.body);
//
//     //Debug of the query
//     console.log('Query:', req.query);
//
//     //Debug of the params
//     console.log('Params:', req.params);
//
//     //Debug of the header
//     console.log('Headers:', req.headers);
//
//     next();
// })
//Integrar Sentry para Monitoreo de Errores


// Middleware
app.use(cors({
    origin: ['https://efmv.es', 'https://www.efmv.es', 'http://localhost:4200'],
    methods: ['GET', 'POST','OPTIONS'],
    allowedHeaders: ['content-type', 'Authorization'],
    credentials: true
}));

app.options('*', cors());
app.use(express.json());


//Ruta conexión con vercel.
app.get("/", (req, res) => res.send("Express en Vercel"));

//Ruta para enviar mensaje
app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;
    console.log('Contacto guardado en la base de datos'); // prueba
    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }
    try {
        await dbConnection.createContact({ name, email, message });
        res.status(200).json({ msg: 'El mensaje  se ha enviado correctamente' });

        // Enviar el correo en segundo plano
        sendEmailNotification({ name, email, message })
            .then(() => {
                console.log('Correo enviado correctamente')
            })
            .catch((error) => console.error('Error al enviar el correo:', error));
    } catch (error) {
        //console.error('Error al guardar el contacto:', error);
        res.status(500).json({ error: 'Error al procesar la solicitud' });
    }
});









// Ruta para obtener mensajes
app.get('/api/contact', (req, res) => {
    dbConnection.getContact()
        .then(contact => {
            res.status(200).json(contact);
        }).catch(error => {
        console.error("Error al obtener los contactos:", error);
        res.status(500).json({error: 'Error al obtener los contactos'});
    })
});


app.listen(port, () => {
    console.log('Servidor conectado en el puerto:', port);
});
