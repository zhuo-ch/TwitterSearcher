const express = require('express');
const request = require('request');
const app = express();

app.use(express.static('lib'));

app.get('/', (req, res) => {
  res.send('lib/index.html');
});

app.get('/search/:query', (req, res) => {
  const hashTag = req.params.query;
  console.log(hashTag, req.params);
  res.send('success ' + hashTag);
});

app.listen(3000, console.log('hello world'));
