var myConfigSunshine = require('../myConfigSunshine');
var fs = require('fs');
var zd = require('../lib/client');

var client = zd.createClient({
  username:  myConfigSunshine.auth.username,
  password:  myConfigSunshine.auth.password,
  remoteUri: myConfigSunshine.auth.remoteUri,
  sunshine: true,
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
