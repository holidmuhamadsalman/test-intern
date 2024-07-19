const router = require('express').Router();

const produkRoutes = require('./produk');
const cartRoutes = require('./cart');
const transaksiRoutes = require('./transaksi');

router.use('/produk', produkRoutes);
router.use('/cart', cartRoutes);
router.use('/transaksi', transaksiRoutes);

module.exports = router;
