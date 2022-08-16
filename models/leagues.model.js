'use strict'

module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define("Leagues", {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false
    },
    terrain: {
      type: DataTypes.STRING,
      allowNull: false
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    slots: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    //  Max limit of total stats of the league
    stats_max_limit: {
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
    console.log('Leagues table created successfully!');
  }).catch((error) => {
    console.error('Unable to create table : ', error);
  });

  return Model
}