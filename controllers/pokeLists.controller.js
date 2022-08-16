'use strict'

const sequelize = require('../models').sequelize
const model = require('../models').pokeLists
const Statistics = require('../models').statistics
// const pokeListsModel = require('../models/pokeLists.model')

// sequelize.sync({ force: true });

const Controller = {
  findAll: async (req, res) => {
    const pokeListsModel = await model.findAll({ include: [{ model: Statistics }] });
    // const statistics = await statisticsModel.findAll();
    // var pokeListsModel = model.findAll({ include: { all: true } });
    console.log('cc-pokeListsModel', pokeListsModel)
    res.json(pokeListsModel);
    // res.json(['pokeLists-findAll', pokeListsModel]);
    // res.json(['pokeLists-findAll', '😀', '😳', '🙄']);
  },
  findOne: (req, res) => {
    res.json(['pokeLists-findOne', '😀', '😳', '🙄']);
  },
  update: (req, res) => {
    res.json(['pokeLists-update', '😀', '😳', '🙄']);
  },
  create: (req, res) => {
    res.json(['pokeLists-create', '😀', '😳', '🙄']);
  },
  delete: (req, res) => {
    res.json(['pokeLists-delete', '😀', '😳', '🙄']);
  },
}

module.exports = Controller