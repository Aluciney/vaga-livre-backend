'use strict';
module.exports = (sequelize, DataTypes) => {
    const historic = sequelize.define('historic', {
        id_user: DataTypes.INTEGER,
        id_user_parking: DataTypes.INTEGER,
        type: DataTypes.STRING,
        brand: DataTypes.STRING,
        model: DataTypes.STRING,
        board: DataTypes.STRING,
        year: DataTypes.STRING,
        date_time_input: DataTypes.DATE,
        date_time_exit: DataTypes.DATE,
        value: DataTypes.DECIMAL,
    }, {});
    historic.associate = function (models) {
        // associations can be defined here
    };
    
    return historic;
};