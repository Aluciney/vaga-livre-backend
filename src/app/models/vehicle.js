'use strict';
module.exports = (sequelize, DataTypes) => {
    const vehicle = sequelize.define('vehicle', {
        id_user: DataTypes.INTEGER,
        type: DataTypes.STRING,
        brand: DataTypes.STRING,
        model: DataTypes.STRING,
        board: DataTypes.STRING,
        chassi: DataTypes.STRING,
        color: DataTypes.STRING,
        municipio: DataTypes.STRING,
        uf: DataTypes.STRING(2),
        year: DataTypes.STRING,
    }, {});
    vehicle.associate = function (models) {
        // associations can be defined here
    };
    
    return vehicle;
};