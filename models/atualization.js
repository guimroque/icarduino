'use strict';
module.exports = (sequelize, DataTypes) => {
  const atualization = sequelize.define('atualization', {
    name: DataTypes.STRING
  }, {});
  atualization.associate = function(models) {
    // associations can be defined here
  };
  return atualization;
};