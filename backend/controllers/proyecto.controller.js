const Proyecto = require('../models/Proyecto');

exports.getProyectos = async (req, res) => {
    const proyectos = await Proyecto.find().populate('clienteId');
    res.json(proyectos);
};

exports.getProyectoById = async (req, res) => {
    const proyecto = await Proyecto.findById(req.params.id).populate('clienteId');
    if (!proyecto) return res.status(404).json({ message: 'No encontrado' });
    res.json(proyecto);
};

exports.createProyecto = async (req, res) => {
    const proyecto = new Proyecto(req.body);
    await proyecto.save();
    res.status(201).json(proyecto);
};

exports.updateProyecto = async (req, res) => {
    const proyecto = await Proyecto.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(proyecto);
};

exports.deleteProyecto = async (req, res) => {
    await Proyecto.findByIdAndDelete(req.params.id);
    res.json({ message: 'Eliminado' });
};
