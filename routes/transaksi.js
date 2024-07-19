const express = require('express');
const transaksiController = require('../controllers/transaksiController');

const router = express.Router();

router.get('/', transaksiController.getAllTransaksi);
router.get('/:id', transaksiController.getTransaksiById);
router.post('/checkout', transaksiController.checkout);

module.exports = router;
