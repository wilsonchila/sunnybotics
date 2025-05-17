const mongoose = require('mongoose');

const ClienteSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    contacto: String,
    email: String,
    direccion: String
});

module.exports = mongoose.model('Cliente', ClienteSchema);
