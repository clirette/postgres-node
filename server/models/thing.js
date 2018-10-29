'use strict';
module.exports = (sequelize, DataTypes) => {
  const Thing = sequelize.define('Thing', {
    content: DataTypes.STRING,
    complete: DataTypes.BOOLEAN
  }, {});
  Thing.associate = function(models) {
    // associations can be defined here
  };
  return Thing;
};