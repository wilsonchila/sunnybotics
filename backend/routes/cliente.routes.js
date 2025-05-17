const express = require('express');
const router = express.Router();
const controller = require('../controllers/cliente.controller');
const { authMiddleware } = require('../middlewares/auth');

router.get('/', authMiddleware, controller.getClientes);
router.get('/:id', authMiddleware, controller.getClienteById);
router.post('/', authMiddleware, controller.createCliente);
router.put('/:id', authMiddleware, controller.updateCliente);
router.delete('/:id', authMiddleware, controller.deleteCliente);

module.exports = router;
