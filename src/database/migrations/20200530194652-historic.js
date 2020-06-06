'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('historic', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            id_user: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: {
                    model: 'user'
                }
            },
            id_user_parking: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: {
                    model: 'user'
                }
            },
            type: {
                allowNull: false,
                type: Sequelize.STRING
            },
            brand: {
                allowNull: false,
                type: Sequelize.STRING
            },
            model: {
                allowNull: false,
                type: Sequelize.STRING
            },
            board: {
                allowNull: false,
                type: Sequelize.STRING
            },
            year: {
                allowNull: false,
                type: Sequelize.STRING
            },
            date_time_input: {
                allowNull: false,
                type: Sequelize.DATE
            },
            date_time_exit: {
                allowNull: false,
                type: Sequelize.DATE
            },
            value: {
                allowNull: false,
                type: Sequelize.DECIMAL(6,2)
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
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('historic');
    }
};
