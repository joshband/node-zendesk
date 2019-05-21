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
// ====================================== Retrieving a Profile(s)
Profiles.prototype.show = function(identifierQuery, cb) {
    this.request('GET', ['profile', {identifier: identifierQuery}], cb);
};

// ====================================== Searching a Profile (with a matching feature)
Profiles.prototype.searchByFeature = function(desiredFeature, value, cb) {
    this.request('POST', ['profiles', 'search'], { query: { where: desiredFeature, equals: value}}, cb);
};

// ====================================== Create or Update (Upsert) Single Profile
Profiles.prototype.createOrUpdate = function(profile, cb) {
    this.request('POST', ['profile'], profile, cb);
};

// ====================================== Create or Update (Upsert) Bulk Profiles
Profiles.prototype.createOrUpdateBulk = function(profiles, cb) {
    this.request('POST', ['profile' , 'bulk'], profiles, cb);
};

// ====================================== Attach Profiles to Person
Profiles.prototype.attach = function(profiles, cb) {
    this.request('POST', ['profiles' , 'attach'], profiles, cb);
};

// ====================================== Delete Profile
Profiles.prototype.delete = function(searchTerm, cb) {
    this.request('DELETE', ['profile', {identifier: searchTerm}], cb);
};
