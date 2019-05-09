// People.js: Client for the Zendesk Profile API.
// https://developer.zendesk.com/rest_api/docs/events-and-profiles-api/people

var util = require('util'),
    Client = require('../client').Client;


var People = exports.People = function(options) {
    this.jsonAPINames = [ 'people' ];
    Client.call(this, options);
};

// Inherit from Client base object
util.inherits(People, Client);

// ######################################################## People
// ====================================== List People/Persons
People.prototype.list = function(cb) {
    this.request('GET', ['people'], cb);
};
