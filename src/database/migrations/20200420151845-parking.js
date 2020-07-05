'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('parking', {
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
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      location: {
        allowNull: false,
        type: Sequelize.JSON
      },
      price_motorcycle: {
        allowNull: false,
        type: Sequelize.DECIMAL(11,2)
      },
      price_car: {
        allowNull: false,
        type: Sequelize.DECIMAL(11,2)
      },
      price_pickup: {
        allowNull: false,
        type: Sequelize.DECIMAL(11,2)
      },
      vacancy: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      vacancy_used: {
        allowNull: false,
        type: Sequelize.INTEGER
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
    return queryInterface.dropTable('parking');
  }
};
