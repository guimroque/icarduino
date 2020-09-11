'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('dinossauros', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING
      },
      img: {
        type: Sequelize.STRING
      },
      comprimento: {
        type: Sequelize.INTEGER
      },
      altura: {
        type: Sequelize.INTEGER
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
    return queryInterface.dropTable('dinossauros');
  }
};