'use strict'

const router = require('express').Router();
const { pokeLists } = require('../controllers')

router.get('/pokeindex', pokeLists.findAll);
router.get('/pokeindex/:id', pokeLists.findOne);
router.put('/pokeindex/:id', pokeLists.update);
router.post('/pokeindex', pokeLists.create);
router.delete('/pokeindex/:id', pokeLists.delete);

module.exports = router;
