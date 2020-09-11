'use strict';
module.exports = (sequelize, DataTypes) => {
  const dinossauro = sequelize.define('dinossauro', {
    nome: DataTypes.STRING,
    img: DataTypes.STRING,
    comprimento: DataTypes.INTEGER,
    altura: DataTypes.INTEGER,
    peso: DataTypes.INTEGER,
    velocidade: DataTypes.INTEGER,
    caracteristicas: DataTypes.TEXT
  }, {});
  dinossauro.associate = function(models) {
    // associations can be defined here
  };
  return dinossauro;
};