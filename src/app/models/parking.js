'use strict';
module.exports = (sequelize, DataTypes) => {
    const parking = sequelize.define('parking', {
        name: DataTypes.STRING,
        location: DataTypes.JSON,
        price: DataTypes.DECIMAL,
        vacancy: DataTypes.INTEGER,
        vacancy_used: DataTypes.INTEGER
    }, {});
    parking.associate = function (models) {
        // associations can be defined here
    };
    
    return parking;
};