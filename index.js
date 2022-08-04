require('dotenv').config();
const request = require('request');
const jwt = require('jsonwebtoken');

const creds = process.env.ZOOMAPIKEY+':'+process.env.ZOOMAPISECRET;


function getAccessToken(){
  var options = {
    method: 'POST',
    // Use the `me` keyword for the request below.
    url: `https://zoom.us/oauth/token?grant_type=account_credentials&account_id={${process.env.ACCOUNTID}}`,
    headers: {
      authorization: `Basic Base64Encoder(Pk2Yk1qMTWGjl48O3fwhZg:stAo8JEqxrU8SQqOj5QgH35w7oV5CcwI)`,
    },
  };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);

    console.log(body);
  });
}

getAccessToken();

function userInformation(){
  var options = {
    method: 'GET',
    // Use the `me` keyword for the request below.
    url: 'https://api.zoom.us/v2/users/me',
    headers: {
      authorization: `Bearer {${ accessToken }}`, // Do not publish or share your token with anyone.
    },
  };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);

    console.log(body);
  });
}
