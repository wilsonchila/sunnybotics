const mongoose = require('mongoose');

const CuadrillaSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  proyectoAsignado: { type: mongoose.Schema.Types.ObjectId, ref: 'Proyecto' },
  personalAsignado: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Personal' }]
});

module.exports = mongoose.model('Cuadrilla', CuadrillaSchema);


