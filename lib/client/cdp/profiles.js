// Profiles.js: Client for the Zendesk Profile API.
// https://developer.zendesk.com/rest_api/docs/events-and-profiles-api/profiles

var util = require('util'),
    Client = require('../client').Client;


var Profiles = exports.Profiles = function(options) {
    this.jsonAPINames = [ 'profile', 'profiles' ];
    Client.call(this, options);
};

// Inherit from Client base object
util.inherits(Profiles, Client);

// ######################################################## Profiles
// ====================================== Searching Available Profiles
Profiles.prototype.search = function(searchTerm, cb) {
    this.request('GET', ['profile', {query: searchTerm}], cb);
};

// ====================================== Create or Update (Upsert) Single Profile
Profiles.prototype.createOrUpdate = function(profile, cb) {
    this.request('POST', ['profile'], profile, cb);
};

// ====================================== Create or Update (Upsert) Bulk Profiles
Profiles.prototype.createOrUpdateBulk = function(profiles, cb) {
    this.request('POST', ['profile' , 'bulk'], profiles, cb);
};

// ====================================== Delete Profile
Profiles.prototype.delete = function(searchTerm, cb) {
    this.request('DELETE', ['profile', {query: searchTerm}], cb);
};
