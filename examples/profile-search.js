var myConfigSunshine = require('../myConfigSunshine');
var fs = require('fs');
var zd = require('../lib/client');

var client = zd.createClient({
  username:  myConfigSunshine.auth.username,
  password:  myConfigSunshine.auth.password,
  remoteUri: myConfigSunshine.auth.remoteUri,
  cdp: true,
  debug: true,
  encoding: 'utf8',
  disableGlobalState: true
});

var profile = {
   "profile":{
      "source":"support",
      "type":"default",
      "identifiers":{
         "id": '123'
      },
      "attributes":{
         "membership":"gold"
      }
   }
}
// console.log(JSON.stringify(client,undefined,2));
const searchTerm = 'NotFound:id:123';

client.profiles.search(searchTerm, function (err, statusCode, body, response, res) {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`StatusCode: ${JSON.stringify(statusCode, null, 2, true)}`);
  console.log(`body: ${JSON.stringify(body, null, 2, true)}`);
  console.log(`response: ${JSON.stringify(response, null, 2, true)}`);
  console.log(`res: ${JSON.stringify(res, null, 2, true)}`);
});
