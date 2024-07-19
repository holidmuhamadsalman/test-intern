const express = require('express');
const cartController = require('../controllers/cartController');

const router = express.Router();

router.get('/', cartController.getCartItems);
router.post('/', cartController.addItemToCart);
router.delete('/:produkId', cartController.removeItemFromCart);

module.exports = router;
