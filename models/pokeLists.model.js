'use strict'

// const types = require('./types.model')
// const statistics = require('./statistics.model')

module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define("PokeLists", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    type_ids: {
      type: DataTypes.TEXT,
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

  Model.associate = models => {
    Model.hasOne(models.Statistics, { foreignKey: 'poke_id', sourceKey: 'id' });
    // Model.hasMany(models.Portfolio) // if many portfolios per user
  }

  // Model.hasOne(statistics, { foreignKey: 'poke_id', targetKey: 'id' });
  // statistics.belongsTo(Model, { foreignKey: 'id', targetKey: 'poke_id' });

  sequelize.sync().then(() => {
    console.log('PokeIndex table created successfully!');
  }).catch((error) => {
    console.error('Unable to create table : ', error);
  });

  return Model
}