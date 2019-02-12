var myConfig = require('../myConfig');
var fs = require('fs');
var zd = require('../lib/client');

var client = zd.createClient({
  username:  myConfig.auth.username,
  password:  myConfig.auth.password,
  remoteUri: myConfig.auth.remoteUri,
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
const searchTerm = 'support:id:123';

client.profiles.search(searchTerm, function (err, statusCode, body, response, res) {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`StatusCode: ${JSON.stringify(statusCode, null, 2, true)}`);
  console.log(`Body: ${JSON.stringify(body, null, 2, true)}`);
});
