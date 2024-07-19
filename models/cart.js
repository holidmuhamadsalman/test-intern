'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      cart.belongsTo(models.user, { foreignKey: 'userId' });
      cart.belongsTo(models.produk, { foreignKey: 'produkId' });
    }
  }
  cart.init({
    userId: DataTypes.INTEGER,
    produkId: DataTypes.INTEGER,
    kuantitas: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'cart',
  });
  return cart;
};