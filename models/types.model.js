'use strict'

module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define("Types", {
    type: {
      type: DataTypes.STRING(11),
      allowNull: false
    }
  });

  sequelize.sync().then(() => {
    console.log('Types table created successfully!');
  }).catch((error) => {
    console.error('Unable to create table : ', error);
  });

  return Model
}