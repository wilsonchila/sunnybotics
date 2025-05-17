const Cuadrilla = require('../models/Cuadrilla');

exports.getCuadrillas = async (req, res) => {
    const cuadrillas = await Cuadrilla.find()
        .populate('proyectoAsignado')
        .populate('personalAsignado');
    res.json(cuadrillas);
};

exports.getCuadrillaById = async (req, res) => {
    const cuadrilla = await Cuadrilla.findById(req.params.id)
        .populate('proyectoAsignado')
        .populate('personalAsignado');
    if (!cuadrilla) return res.status(404).json({ message: 'No encontrada' });
    res.json(cuadrilla);
};

exports.createCuadrilla = async (req, res) => {
    const cuadrilla = new Cuadrilla(req.body);
    await cuadrilla.save();
    res.status(201).json(cuadrilla);
};

exports.updateCuadrilla = async (req, res) => {
    const cuadrilla = await Cuadrilla.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(cuadrilla);
};

exports.deleteCuadrilla = async (req, res) => {
    await Cuadrilla.findByIdAndDelete(req.params.id);
    res.json({ message: 'Eliminada' });
};
