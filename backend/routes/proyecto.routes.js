const express = require('express');
const router = express.Router();
const controller = require('../controllers/proyecto.controller');
const { authMiddleware } = require('../middlewares/auth');

router.get('/', authMiddleware, controller.getProyectos);
router.get('/:id', authMiddleware, controller.getProyectoById);
router.post('/', authMiddleware, controller.createProyecto);
router.put('/:id', authMiddleware, controller.updateProyecto);
router.delete('/:id', authMiddleware, controller.deleteProyecto);

module.exports = router;
