const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

const authRoutes = require('./routes/auth.routes');
const clienteRoutes = require('./routes/cliente.routes');
const proyectoRoutes = require('./routes/proyecto.routes');
const cuadrillaRoutes = require('./routes/cuadrilla.routes');
const personalRoutes = require('./routes/personal.routes');

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/clientes', clienteRoutes);
app.use('/api/proyectos', proyectoRoutes);
app.use('/api/cuadrillas', cuadrillaRoutes);
app.use('/api/personal', personalRoutes);

module.exports = app;
