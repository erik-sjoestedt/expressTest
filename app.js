const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send("HELLO WOLRD\n");
});

module.exports = app

