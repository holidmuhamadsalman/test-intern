'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('detail_transaksis', [
      {
        transaksiId: '1',
        produkId: '1',
        kuantitas: '2',
        harga: '200000',
        totalHarga: '400000',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        transaksiId: '2',
        produkId: '2',
        kuantitas: '3',
        harga: '100000',
        totalHarga: '300000',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
