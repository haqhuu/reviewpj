'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Categories', [
      {
        name: "Animals and Pets",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Beauty and Well-being',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Business Services',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        name: 'Construction and Manufacturing',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        name: 'Education and Training',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
      , {
        name: 'Electronics and Technology',
        createdAt: new Date(),
        updatedAt: new Date(),
      }

      , {
        name: 'Events and Entertainment',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
      , {
        name: 'Food, Beverages and Tobacco',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
      , {
        name: 'Health and Medical',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
      , {
        name: 'Hobbies and Crafts',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
      , {
        name: 'Home and Garden',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
      , {
        name: 'Home Services',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
      , {
        name: 'Legal Services and Government',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
      , {
        name: 'Media and Publishing',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
      , {
        name: 'Money and Insurance',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
      , {
        name: 'Public and Local Services',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
      , {
        name: 'Restaurants and Bars',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
      , {
        name: 'Shopping and Fashion',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
      , {
        name: 'Sports',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
      , {
        name: 'Utilities',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
      , {
        name: 'Vehicles and Transportation',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },
  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Categories', null, {});
  }
};
