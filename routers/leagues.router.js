'use strict'

const router = require('express').Router();
const { leagues } = require('../controllers')

router.get('/leagues', leagues.findAll);
router.get('/league/:id', leagues.findOne);
router.put('/leagues/:id', leagues.update);
router.post('/leagues', leagues.create);
router.delete('/leagues/:id', leagues.delete);

module.exports = router;
