'use strict'

module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define("Trainers", {
    name: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    type_id: {
      type: DataTypes.INTEGER(4),
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
    console.log('Trainers table created successfully!');
  }).catch((error) => {
    console.error('Unable to create table : ', error);
  });

  return Model
}