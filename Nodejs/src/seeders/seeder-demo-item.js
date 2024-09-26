'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Items', [
      {
        name: 'Colleges & Universities',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Courses & Classes',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Education Services',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Language Learning',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Music & Theater Classes',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'School & High School',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Specials Schools',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Items', null, {});
  }
};
