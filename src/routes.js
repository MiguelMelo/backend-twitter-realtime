const express = require('express');

const routes = express.Router();

routes.get('/', (req, res) => {
  return res.send('Backend Twitter Realtime');
});

module.exports = routes;