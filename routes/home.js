const routes = require('express').Router();
const path = require('path');

routes.get('/', (req, res) => {
  //res.send('Home Page')
  res.sendFile(path.join(__dirname, '../index.html'));
});

module.exports = routes  