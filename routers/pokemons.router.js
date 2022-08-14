'use strict'

const router = require('express').Router();
const { pokemons } = require('../controllers')

router.get('/pokemons', pokemons.findAll);
router.get('/pokemon/:id', pokemons.findOne);
router.put('/pokemons/:id', pokemons.update);
router.post('/pokemons', pokemons.create);
router.delete('/pokemons/:id', pokemons.delete);

module.exports = router;
