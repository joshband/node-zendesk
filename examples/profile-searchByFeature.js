var myConfigSunshine = require('../myConfigSunshine');
var fs = require('fs');
var zd = require('../lib/client');

var client = zd.createClient({
  username:  myConfigSunshine.auth.username,
  password:  myConfigSunshine.auth.password,
  remoteUri: myConfigSunshine.auth.remoteUri,
  sunshine: true,
  debug: true,
  encoding: 'utf8',
  disableGlobalState: true
});

const desiredFeature = 'identifiers.id';
const value = '1234';

client.profiles.searchByFeature(desiredFeature, value, function (err, statusCode, body, response, res) {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`StatusCode: ${JSON.stringify(statusCode, null, 2, true)}`);
  console.log(`body: ${JSON.stringify(body, null, 2, true)}`);
  console.log(`response: ${JSON.stringify(response, null, 2, true)}`);
  console.log(`res: ${JSON.stringify(res, null, 2, true)}`);
});
