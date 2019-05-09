var myConfigSunshine = require('../myConfigSunshine');
var fs = require('fs');
var zd = require('../lib/client');

var client = zd.createClient({
  username:  myConfigSunshine.auth.username,
  password:  myConfigSunshine.auth.password,
  remoteUri: myConfigSunshine.auth.remoteUri,
  sunshine: true,
  /* debug: true,  // Uncommenting this and next line will allow for console message with full response
  encoding: 'utf8',*/
  disableGlobalState: true
});

const identifier_query = 'support:user_id:456';
const profile_filter = 'sap';

client.person.listWithIdentifierQueryAndProfileFilter(identifier_query, profile_filter, function (err, statusCode, body, response, res) {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`StatusCode: ${JSON.stringify(statusCode, null, 2, true)}`);
  console.log(`Body: ${JSON.stringify(body, null, 2, true)}`);
});
