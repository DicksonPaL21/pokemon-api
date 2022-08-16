'use strict'

module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define("Pokemons", {
    trainer_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    poke_id: {
      type: DataTypes.INTEGER,
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
    console.log('Pokemons table created successfully!');
  }).catch((error) => {
    console.error('Unable to create table : ', error);
  });

  return Model
}