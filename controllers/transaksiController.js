const { transaksi, transaksiDetail, cart, produk } = require('../models');

exports.getAllTransaksi = async (req, res) => {
  try {
    const transaksis = await transaksi.findAll();
    res.json(transaksis);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getTransaksiById = async (req, res) => {
  try {
    const transaksi = await transaksi.findByPk(req.params.id, {
      include: [{ model: transaksiDetail }]
    });
    if (transaksi) {
      res.json(transaksi);
    } else {
      res.status(404).json({ message: 'transaksi not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.checkout = async (req, res) => {
  try {
    const cartItems = await cart.findAll({ where: { userId: req.body.userId } });

    if (cartItems.length === 0) {
      return res.status(400).json({ message: 'cart is empty' });
    }

    const totalAmount = cartItems.reduce((sum, item) => sum + (item.harga * item.kuantitas), 0);

    const newtransaksi = await transaksi.create({
      userId: req.body.userId,
      totalAmount,
      status: 'Completed'
    });

    const transaksiDetails = cartItems.map(item => ({
      transaksiId: newtransaksi.id,
      produkId: item.produkId,
      kuantitas: item.kuantitas,
      harga: item.harga,
      totalHarga: item.harga * item.kuantitas
    }));

    await detail_transaksi.bulkCreate(transaksiDetails);
    await cart.destroy({ where: { userId: req.body.userId } });

    res.status(201).json(newtransaksi);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
