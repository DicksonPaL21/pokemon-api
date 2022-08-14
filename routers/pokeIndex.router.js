'use strict'

const router = require('express').Router();
const { pokeIndex } = require('../controllers')

router.get('/pokeindex', pokeIndex.findAll);
router.get('/pokeindex/:id', pokeIndex.findOne);
router.put('/pokeindex/:id', pokeIndex.update);
router.post('/pokeindex', pokeIndex.create);
router.delete('/pokeindex/:id', pokeIndex.delete);

module.exports = router;
