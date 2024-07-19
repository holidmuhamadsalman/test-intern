'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class detail_transaksi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      detail_transaksi.belongsTo(models.transaksi, { foreignKey: 'transaksiId' });
      detail_transaksi.belongsTo(models.produk, { foreignKey: 'produkId' });
    }
  }
  detail_transaksi.init({
    transaksiId: DataTypes.INTEGER,
    produkId: DataTypes.INTEGER,
    kuantitas: DataTypes.INTEGER,
    harga: DataTypes.DECIMAL,
    totalHarga: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'detail_transaksi',
  });
  return detail_transaksi;
};