const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UsuarioSchema = new mongoose.Schema({
    nombre: String,
    cedula: String,
    correo: { type: String, unique: true },
    rol: { type: String, enum: ['admin', 'operario'], default: 'operario' },
    password: String
});

UsuarioSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

module.exports = mongoose.model('Usuario', UsuarioSchema);
