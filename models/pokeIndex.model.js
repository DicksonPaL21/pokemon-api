'use strict'

module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define("PokeIndex", {
    name: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    type_ids: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  });

  sequelize.sync().then(() => {
    console.log('PokeIndex table created successfully!');
  }).catch((error) => {
    console.error('Unable to create table : ', error);
  });

  return Model
}