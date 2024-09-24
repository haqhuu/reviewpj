'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [
      {
        name: 'John Doe',
        email: 'example@example.com',
        country: 'VN',
        roleId: '1',
        password: '',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Hanh To',
        email: 'hanh@example.com',
        country: 'VN',
        roleId: '1',
        password: '',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Nhan Ha',
        email: 'nhan@example.com',
        country: 'VN',
        roleId: '1',
        password: '',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
