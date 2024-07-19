const { cart, produk } = require('../models');

exports.getCartItems = async (req, res) => {
  try {
    const cartItems = await cart.findAll();
    res.json(cartItems);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.addItemToCart = async (req, res) => {
  try {
    const { produkId, kuantitas } = req.body;
    const produk = await produk.findByPk(produkId);

    if (produk) {
      const cartItem = await cart.create({ userId: req.body.userId, produkId, kuantitas });
      res.status(201).json(cartItem);
    } else {
      res.status(404).json({ message: 'produk not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.removeItemFromCart = async (req, res) => {
  try {
    await Cart.destroy({ where: { produkId: req.params.produkId } });
    res.json({ message: 'produk removed from cart' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
