'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class transaksi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      transaksi.belongsTo(models.user, { foreignKey: 'userId' });
      transaksi.hasMany(models.detail_transaksi, { foreignKey: 'transaksiId' });
    }
  }
  transaksi.init({
    userId: DataTypes.INTEGER,
    total: DataTypes.DECIMAL,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'transaksi',
  });
  return transaksi;
};