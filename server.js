const express = require('express');
const request = require('request');
const path = require('path');
const app = express();

app.use(express.static(`${__dirname}/lib`));

app.get('/search/:query', (req, res) => {
  const hashTag = req.params.query;
  console.log(hashTag);
  res.send('sa');
});

app.listen(8000, console.log('hello world'));
