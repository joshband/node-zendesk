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

var profiles = {
  "profiles": [
      {
        "source": "sap",
        "identifiers": {
          "email": "foo@bar.com"
        },
        "attributes": {
          "favorite_color": "blue"
        }
      },
      {
          "source": "support",
          "identifiers": {
            "user_id": "456"
          },
          "attributes": {
            "favorite_color": "green"
          }
       }
   ]
}
// console.log(JSON.stringify(client,undefined,2));

client.profiles.createOrUpdateBulk(profiles, function (err, statusCode, body, response, res) {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`StatusCode: ${JSON.stringify(statusCode, null, 2, true)}`);
});
