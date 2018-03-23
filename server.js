const express = require('express');
const request = require('request');
const path = require('path');
const twitter = require('./config.js');
const app = express();

app.use(express.static(`${__dirname}/lib`));

app.get('/search/:query', (req, res) => {
  const hashTag = req.params.query;
  console.log(hashTag);
  fetch(twitter.search + 'q=' + hashTag)
    .then(response => response.json())
    .then(resolve => resolve.pipe(res))
  // res.json({ result: hashTag });
});

app.listen(8000, console.log('hello world'));

// $ curl --request GET
//  --url 'https://api.twitter.com/1.1/search/tweets.json?q=nasa&result_type=popular'
//  --header 'authorization: OAuth oauth_consumer_key="consumer-key-for-app",
//  oauth_nonce="generated-nonce", oauth_signature="generated-signature",
//  oauth_signature_method="HMAC-SHA1", oauth_timestamp="generated-timestamp",
//  oauth_token="access-token-for-authed-user", oauth_version="1.0"'

// OAuth oauth_consumer_key="xvz1evFS4wEEPTGEFPHBog",
// oauth_nonce="kYjzVBB8Y0ZFabxSWbWovY3uYSQ2pTgmZeNu2VS4cg",
// oauth_signature="tnnArxj06cWHq44gCs1OSKk%2FjLY%3D",
// oauth_signature_method="HMAC-SHA1",
// oauth_timestamp="1318622958",
// oauth_token="370773112-GmHxMAgYyLbNEtIKZeRNFsMKPR9EyMZeS9weJAEb",
// oauth_version="1.0"

nonce = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
