const hmac = require('hmacsha1');
const twitter = require('./config.js').twitter;

exports.genTwitterBearer = () => {
  const encodedSecret = new Buffer(twitter.consumerKey.toString('base64') + ':' + twitter.consumerSecret.toString('base64')).toString('base64').trim();
  return ({
    url: 'https://api.twitter.com/oauth2/token',
    header: {
      'Authorization': `Basic ` + encodedSecret,
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    },
    body: 'grant_type=client_credentials',
  });
}

exports.genTwitter = options => {
  const keys = getKeys();
  const signature = getSignature(keys);

  return ({
    url: options,
    header: `Authorization: OAuth ${ keys }, oauth_signature="${ signature }"`,
  });
}

const getSignature = data => {
  return hmac(twitter.consumerSecret + '&' + twitter.accessTokenSecret, data);
}

const getKeys = keys => {
  return `oauth_consumer_key="${ twitter.consumerKey }", oauth_nonce="${ genNonce(44) }", oauth_token="${ twitter.accessToken }", oauth_version="1.0", oauth_signature_method="HMAC-SHA1", oauth_timestamp="${ genTimeStamp() }"`;
}

const genTimeStamp = () => {
  return new Date().getTime();
}

const genNonce = len => {
  const str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//   let idx = 0;
//   let nonce = '';
//
//   while (idx < len) {
//     nonce = nonce + str[Math.floor(Math.random(str.length))];
//     idx += 1;
//     console.log(nonce);
//   }
// console.log(nonce);
//   return nonce;
  return new Array(len).fill(0).map(el => str[Math.floor(Math.random() * len)]).join('');
}

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
