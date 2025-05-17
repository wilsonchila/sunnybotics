const mongoose = require('mongoose');

const ProyectoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  clienteId: { type: mongoose.Schema.Types.ObjectId, ref: 'Cliente', required: true },
  fechaInicio: { type: Date, required: true },
  estado: { type: String, enum: ['Pendiente', 'En progreso', 'Finalizado'], default: 'Pendiente' }
});

module.exports = mongoose.model('Proyecto', ProyectoSchema);


