'use strict'

module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define("Statistics", {
    poke_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    health: {
      type: DataTypes.INTEGER(6),
      allowNull: false
    },
    attack: {
      type: DataTypes.INTEGER(6),
      allowNull: false
    },
    sp_attack: {
      type: DataTypes.INTEGER(6),
      allowNull: false
    },
    defense: {
      type: DataTypes.INTEGER(6),
      allowNull: false
    },
    sp_defense: {
      type: DataTypes.INTEGER(6),
      allowNull: false
    },
    speed: {
      type: DataTypes.INTEGER(6),
      allowNull: false
    }
  });

  sequelize.sync().then(() => {
    console.log('Statistics table created successfully!');
  }).catch((error) => {
    console.error('Unable to create table : ', error);
  });

  return Model
}