'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class produk extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      produk.hasMany(models.cart, { foreignKey: 'produkId' });
      produk.hasMany(models.detail_transaksi, { foreignKey: 'produkId' });
    }
  }
  produk.init({
    nama: DataTypes.STRING,
    deskripsi: DataTypes.STRING,
    harga: DataTypes.DECIMAL,
    stok: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'produk',
  });
  return produk;
};