const express = require('express');
const router = express.Router();
const controller = require('../controllers/cuadrilla.controller');
const { authMiddleware } = require('../middlewares/auth');

router.get('/', authMiddleware, controller.getCuadrillas);
router.get('/:id', authMiddleware, controller.getCuadrillaById);
router.post('/', authMiddleware, controller.createCuadrilla);
router.put('/:id', authMiddleware, controller.updateCuadrilla);
router.delete('/:id', authMiddleware, controller.deleteCuadrilla);

module.exports = router;
