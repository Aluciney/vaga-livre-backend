'use strict';
module.exports = (sequelize, DataTypes) => {
    const user = sequelize.define('user', {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password_hash: DataTypes.STRING,
        type_user: DataTypes.STRING,
        avatar_url: DataTypes.STRING,
        expo_token: DataTypes.STRING
    }, {});
    user.associate = function (models) {
        // associations can be defined here
    };
    
    return user;
};