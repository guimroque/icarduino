'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    modalidade: DataTypes.STRING,
    hole: DataTypes.INTEGER
  }, {});
  user.associate = function(models) {
    // associations can be defined here
  };
  return user;
};