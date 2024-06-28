'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Reviews', {

            // title: DataTypes.STRING,
            // content: DataTypes.STRING,
            // status: DataTypes.STRING,
            // dateExperience: DataTypes.STRING,
            // star: DataTypes.STRING,
            // like: DataTypes.STRING,
            // share: DataTypes.STRING,
            // report: DataTypes.STRING,

            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            title: {
                type: Sequelize.STRING
            },
            content: {
                type: Sequelize.STRING
            },
            status: {
                type: Sequelize.STRING
            },
            dateExperience: {
                type: Sequelize.DATE
            },
            star: {
                type: Sequelize.STRING
            },
            like: {
                type: Sequelize.STRING
            },
            share: {
                type: Sequelize.STRING
            },
            report: {
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
        await queryInterface.dropTable('Reviews');
    }
};