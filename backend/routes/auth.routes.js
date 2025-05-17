const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Usuario = require('../models/Usuario');
const router = express.Router();

router.post('/register', async (req, res) => {
    const user = new Usuario(req.body);
    await user.save();
    res.status(201).json(user);
});

router.post('/login', async (req, res) => {
    const { correo, password } = req.body;
    const user = await Usuario.findOne({ correo });
    if (!user || !(await bcrypt.compare(password, user.password)))
        return res.status(401).json({ message: 'Credenciales inválidas' });

    const token = jwt.sign({ id: user._id, rol: user.rol }, process.env.JWT_SECRET, { expiresIn: '1d' });
    res.json({ token });
});

module.exports = router;
