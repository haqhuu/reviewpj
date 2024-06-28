'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Companies', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: {
                type: Sequelize.STRING
            },
            email: {
                type: Sequelize.STRING
            },
            telephone: {
                type: Sequelize.STRING
            },
            country: {
                type: Sequelize.STRING
            },
            address: {
                type: Sequelize.STRING
            },
            desciption: {
                type: Sequelize.STRING
            },
            logo: {
                type: Sequelize.STRING
            },
            tag: {
                type: Sequelize.STRING
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Companies');
    }
};