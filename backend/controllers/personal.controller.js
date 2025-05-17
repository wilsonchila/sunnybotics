const Personal = require('../models/Personal');

exports.getPersonal = async (req, res) => {
    const personal = await Personal.find().populate('cuadrillaId');
    res.json(personal);
};

exports.getPersonalById = async (req, res) => {
    const persona = await Personal.findById(req.params.id).populate('cuadrillaId');
    if (!persona) return res.status(404).json({ message: 'No encontrado' });
    res.json(persona);
};

exports.createPersonal = async (req, res) => {
    const persona = new Personal(req.body);
    await persona.save();
    res.status(201).json(persona);
};

exports.updatePersonal = async (req, res) => {
    const persona = await Personal.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(persona);
};

exports.deletePersonal = async (req, res) => {
    await Personal.findByIdAndDelete(req.params.id);
    res.json({ message: 'Eliminado' });
};
