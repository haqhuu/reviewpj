'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Review extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Review.init({
        title: DataTypes.STRING,
        content: DataTypes.STRING,
        status: DataTypes.STRING,
        dateExperience: DataTypes.STRING,
        star: DataTypes.STRING,
        like: DataTypes.STRING,
        share: DataTypes.STRING,
        report: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'Review',
    });
    return Review;
};