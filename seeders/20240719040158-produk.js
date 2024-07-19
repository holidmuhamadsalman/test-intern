'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('produks', [
      {
        nama: 'Produk 1',
        deskripsi: 'deskripsi untuk produk 1',
        harga: 100.000,
        stok: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama: 'Produk 2',
        deskripsi: 'deskripsi untuk produk 2',
        harga: 200.000,
        stok: 20,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('produk', null, {});
  }
};
