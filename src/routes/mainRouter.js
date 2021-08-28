const express = require('express');
const router = express.Router();

const mainController = require('../controllers/mainController');

router.get('/', mainController.index);
router.get('/formulario', mainController.form);
router.get('/login', mainController.login);
router.get('/productCart', mainController.cart);
router.get('/productDetail', mainController.detail);

module.exports = router;