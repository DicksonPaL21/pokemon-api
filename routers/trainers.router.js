'use strict'

const router = require('express').Router();
const { trainers } = require('../controllers')

router.get('/trainers', trainers.findAll);
router.get('/trainer/:id', trainers.findOne);
router.put('/trainers/:id', trainers.update);
router.post('/trainers', trainers.create);
router.delete('/trainers/:id', trainers.delete);

module.exports = router;

