var myConfig = require('../myConfig');
var fs = require('fs');
var zd = require('../lib/client');

var client = zd.createClient({
  username:  myConfig.auth.username,
  password:  myConfig.auth.password,
  remoteUri: myConfig.auth.remoteUri,
  cdp: true,
  disableGlobalState: true
});

client.people.list(function (err, statusCode, body, response, res) {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`StatusCode: ${JSON.stringify(statusCode, null, 2, true)}`);
  console.log(`Body: ${JSON.stringify(body, null, 2, true)}`);
});
