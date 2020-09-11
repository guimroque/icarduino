'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('dinos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING
      },
      comprimento: {
        type: Sequelize.INTEGER
      },
      integer: {
        type: Sequelize.STRING
      },
      peso: {
        type: Sequelize.INTEGER
      },
      velocidade: {
        type: Sequelize.INTEGER
      },
      caracteristicas: {
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('dinos');
  }
};