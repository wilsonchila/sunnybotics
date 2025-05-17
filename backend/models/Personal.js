const mongoose = require('mongoose');

const PersonalSchema = new mongoose.Schema({
    nombre: String,
    cedula: String,
    rol: { type: String, enum: ['técnico', 'supervisor', 'coordinador'] },
    cuadrillaId: { type: mongoose.Schema.Types.ObjectId, ref: 'Cuadrilla' }
});

module.exports = mongoose.model('Personal', PersonalSchema);

