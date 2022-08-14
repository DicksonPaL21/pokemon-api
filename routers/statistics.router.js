'use strict'

const router = require('express').Router();
const { statistics } = require('../controllers')

router.get('/statistics', statistics.findAll);
router.get('/statistic/:id', statistics.findOne);
router.put('/statistics/:id', statistics.update);
router.post('/statistics', statistics.create);
router.delete('/statistics/:id', statistics.delete);

module.exports = router;
