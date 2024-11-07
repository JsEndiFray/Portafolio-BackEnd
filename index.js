const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();


const dbConnection = require('./src/dbConnection/dbConnection')
const app = express();

const port = process.env.PORT;

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


//Middleware
app.use(cors({ //los metodos puestos es para poder hacer pruebas en locales. luego se borran
    origin: '*',
    method: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['content-type', 'Authorization']
}));
app.use(express.json());

//Routes
app.get("/", (req, res)=>res.send("Express en vercel"))

// enviar mensaje
app.post('/api/contact', (req, res) => {
    const {name, email, message} = req.body;
    dbConnection.createContact({name, email, message});
    res.status(200).json({msg: 'Mensaje enviado correctamente'})
})

// ver los mensaje
app.get('/api/contact', async (req, res) => {
    const listContact = await dbConnection.getContact(); // Asegúrate de que sea una función asíncrona
    return res.json({listContact})

});


app.listen(port, () => {
    console.log('Conexion exitosa al puerto:', port);
})
