'use strict'

module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define("Types", {
    type: {
      type: DataTypes.STRING(11),
      allowNull: false
    },
    createdBy: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    updatedBy: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    deletedBy: {
      type: DataTypes.INTEGER,
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