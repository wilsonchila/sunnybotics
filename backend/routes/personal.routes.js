const express = require('express');
const router = express.Router();
const controller = require('../controllers/personal.controller');
const { authMiddleware } = require('../middlewares/auth');

router.get('/', authMiddleware, controller.getPersonal);
router.get('/:id', authMiddleware, controller.getPersonalById);
router.post('/', authMiddleware, controller.createPersonal);
router.put('/:id', authMiddleware, controller.updatePersonal);
router.delete('/:id', authMiddleware, controller.deletePersonal);

module.exports = router;
