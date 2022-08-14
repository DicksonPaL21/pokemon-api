'use strict'

const router = require('express').Router();
const { types } = require('../controllers')

router.get('/types', types.findAll);
router.get('/type/:id', types.findOne);
router.put('/types/:id', types.update);
router.post('/types', types.create);
router.delete('/types/:id', types.delete);

module.exports = router;
