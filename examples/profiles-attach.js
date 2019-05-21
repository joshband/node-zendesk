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
          "source": "sfdc",
          "identifiers": {
            "user_id": "456"
          },
          "attributes": {
            "favorite_color": "black"
          }
       }
   ],
   "target_person": {
     "identifier": "support:default:user_id:360148496032"
   },
};


client.profiles.attach(profiles, function (err, statusCode, body, response, res) {
  if (err) {
    console.log(err);
    console.log(err.result.toString());
    return;
  }
  console.log(`StatusCode: ${JSON.stringify(statusCode, null, 2, true)}`);
  console.log(`body: ${JSON.stringify(body, null, 2, true)}`);
  console.log(`response: ${JSON.stringify(response, null, 2, true)}`);
  console.log(`res: ${JSON.stringify(res, null, 2, true)}`);
});
