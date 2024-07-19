const { produk } = require('../models');

exports.getAllProduks = async (req, res) => {
  try {
    const produks = await produk.findAll();
    res.json(produks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getProdukById = async (req, res) => {
  try {
    const produk = await produk.findByPk(req.params.id);
    if (produk) {
      res.json(produk);
    } else {
      res.status(404).json({ message: 'produk not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createProduk = async (req, res) => {
  try {
    const produk = await produk.create(req.body);
    res.status(201).json(produk);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
