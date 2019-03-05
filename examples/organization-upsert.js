var myConfigCore = require('../myConfigCore');
var zd = require('../lib/client');

var client = zd.createClient({
  username:  myConfigCore.auth.username,
  password:  myConfigCore.auth.password,
  remoteUri: myConfigCore.auth.remoteUri,
  debug: true,
  encoding: 'utf8',
});

console.log(JSON.stringify(client, undefined, 2));

var organization = {
  organization: {
    name: "My Organization",
  }
};

client.organizations.upsert(organization,  function(err, req, result) {
  if (err) return handleError(err);
  console.log(JSON.stringify(result, null, 2, true));
});

function handleError(err) {
    console.log(err);
    process.exit(-1);
}
