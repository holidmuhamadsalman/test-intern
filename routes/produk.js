const express = require('express');
const produkController = require('../controllers/produkController');

const router = express.Router();

router.get('/', produkController.getAllProduks);
router.get('/:id', produkController.getProdukById);
router.post('/', produkController.createProduk);

module.exports = router;
