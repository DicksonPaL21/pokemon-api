'use strict';

const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

// sequelize.sync({ force: true });

Object.assign(db, {
  leagues: require('./leagues.model')(sequelize, Sequelize.DataTypes),
  pokeLists: require('./pokeLists.model')(sequelize, Sequelize.DataTypes),
  pokemons: require('./pokemons.model')(sequelize, Sequelize.DataTypes),
  statistics: require('./statistics.model')(sequelize, Sequelize.DataTypes),
  trainers: require('./trainers.model')(sequelize, Sequelize.DataTypes),
  types: require('./types.model')(sequelize, Sequelize.DataTypes),
});

db.sequelize = sequelize;

module.exports = db;
