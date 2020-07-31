'use strict';
module.exports = (sequelize, DataTypes) => {
  const enviomission = sequelize.define('enviomission', {
    mission: DataTypes.STRING,
    equipe: DataTypes.STRING,
    link: DataTypes.STRING,
    validar: DataTypes.INTEGER
  }, {});
  enviomission.associate = function(models) {
    // associations can be defined here
  };
  return enviomission;
};