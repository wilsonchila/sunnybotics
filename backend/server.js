const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI);

// Rutas
app.use('/api/clientes', require('./routes/clientes'));
app.use('/api/proyectos', require('./routes/proyectos'));
app.use('/api/cuadrillas', require('./routes/cuadrillas'));
app.use('/api/personal', require('./routes/personal'));
app.use('/api/login', require('./routes/auth'));

app.listen(3001, () => console.log('Servidor corriendo en puerto 3001'));
