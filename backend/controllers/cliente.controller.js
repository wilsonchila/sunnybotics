const Cliente = require('../models/Cliente');

exports.getClientes = async (req, res) => {
    const clientes = await Cliente.find();
    res.json(clientes);
};

exports.getClienteById = async (req, res) => {
    const cliente = await Cliente.findById(req.params.id);
    if (!cliente) return res.status(404).json({ message: 'No encontrado' });
    res.json(cliente);
};

exports.createCliente = async (req, res) => {
    const cliente = new Cliente(req.body);
    await cliente.save();
    res.status(201).json(cliente);
};

exports.updateCliente = async (req, res) => {
    const cliente = await Cliente.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(cliente);
};

exports.deleteCliente = async (req, res) => {
    await Cliente.findByIdAndDelete(req.params.id);
    res.json({ message: 'Eliminado' });
};
