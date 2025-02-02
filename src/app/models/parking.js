'use strict';
module.exports = (sequelize, DataTypes) => {
    const parking = sequelize.define('parking', {
        id_user: DataTypes.INTEGER,
        name: DataTypes.STRING,
        location: DataTypes.JSON,
        price_motorcycle: DataTypes.DECIMAL,
        price_car: DataTypes.DECIMAL,
        price_pickup: DataTypes.DECIMAL,
        vacancy: DataTypes.INTEGER,
        vacancy_used: DataTypes.INTEGER
    }, {});
    parking.associate = function (models) {
        // associations can be defined here
    };
    
    return parking;
};