const express = require('express');

const emojis = require('./emojis');

const { pokeLists } = require('../../routers')

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏'
  });
});

router.get('/db', (req, res) => {

  init();

  res.json({
    message: 'API - 👋🌎🌍🌏'
  });
});

router.use(pokeLists);
router.use('/emojis', emojis);

module.exports = router;
