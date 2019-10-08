var myConfigSunshine = require('../myConfigSunshine');
var fs = require('fs');
var zd = require('../lib/client');

var client = zd.createClient({
  username:  myConfigSunshine.auth.username,
  password:  myConfigSunshine.auth.password,
  remoteUri: myConfigSunshine.auth.remoteUri,
  sunshine: true,
  disableGlobalState: true,
  // customHeaders: { // attaches below header to all API calls
  //   'Z-Handle-Synchronously': true,
  // },
});

var payload = {
  data: {
    attributes: {
      id: '5',
      name: 'Hotdog Chewing Gum 2',
    },
  },
};

var recordId = '5c6b9984-d423-11e9-9816-d929af05d04d';

client.objects.update(recordId, payload, function (err, statusCode, body, response, res) {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`StatusCode: ${JSON.stringify(statusCode, null, 2, true)}`);
  console.log(`body: ${JSON.stringify(body, null, 2, true)}`);
  console.log(`response: ${JSON.stringify(response, null, 2, true)}`);
  console.log(`res: ${JSON.stringify(res, null, 2, true)}`);
});
