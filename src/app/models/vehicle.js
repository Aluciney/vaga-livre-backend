'use strict';
module.exports = (sequelize, DataTypes) => {
    const vehicle = sequelize.define('vehicle', {
        id_user: DataTypes.INTEGER,
        type: DataTypes.STRING,
        board: DataTypes.STRING,
    }, {});
    vehicle.associate = function (models) {
        // associations can be defined here
    };
    
    return vehicle;
};