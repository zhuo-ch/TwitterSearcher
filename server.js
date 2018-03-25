const express = require('express');
const request = require('request');
const rp = require('request-promise');
const path = require('path');
const twitter = require('./lib/config').twitter;
const twitterAPI = require('./lib/twitter_api');
const app = express();

app.use(express.static(`${__dirname}/lib`));
app.use(express.static(`${__dirname}/node_modules`));

app.get('/search/:query', (req, res) => {
  const hashTag = req.params.query;
  const body = twitterAPI.genTwitter(twitter.searchUrl + 'q=' + hashTag);
  const bearer = twitterAPI.genTwitterBearer();
  console.log(bearer);

  request.post(bearer, function(e, r, b) {
    console.log('e:' + e, 'r:' + r, 'b:' + b)
  })
    // .then(response => {
    //   console.log(response)
    //   // response.json()
    // })
    // .catch(err => console.log(err))

    // .then(resolve => {
    //   console.log(resolve);
    //   resolve.pipe(res)
    // });
  // res.json({ result: request });
});

app.listen(8000, console.log('hello world'));
