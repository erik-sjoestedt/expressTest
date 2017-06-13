const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('HELLO WOLRD\n')
})

module.exports = app
