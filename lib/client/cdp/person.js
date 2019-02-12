// Person.js: Client for the Zendesk Profile API.
// https://developer.zendesk.com/rest_api/docs/events-and-profiles-api/people

// TODO: add merge flag - https://developer.zendesk.com/rest_api/docs/events-and-profiles-api/people#list-profiles-of-person-with-filters-on-profile-sourcestypes

var util = require('util'),
    Client = require('../client').Client;


var Person = exports.Person = function(options) {
    this.jsonAPINames = [ 'person' ];
    Client.call(this, options);
};

// Inherit from Client base object
util.inherits(Person, Client);

// ######################################################## Person
// ====================================== List Profiles of Person
Person.prototype.list = function(person_id, cb) {
    this.request('GET', ['person', person_id], cb);
};

// ====================================== List Profiles of Person with identifier query
Person.prototype.listWithIdentifierQuery = function(identifier_query, cb) {
    this.request('GET', ['person', {identifier: identifier_query}], cb);
};

// ====================================== List Profiles of Person with filters on Profile Source/Type
Person.prototype.listWithProfileFilter = function(person_id, filter, cb) {
    this.request('GET', ['person', person_id, {included_profiles: filter}], cb);
};

// ====================================== List Profiles of Person with identifier query and with filters on Profile Source/Type
Person.prototype.listWithIdentifierQueryAndProfileFilter = function(identifier_query, filter, cb) {
    this.request('GET', ['person', {identifier: identifier_query, included_profiles: filter}], cb);
};

// ====================================== Delete Profile
Person.prototype.delete = function(person_id, cb) {
    this.request('DELETE', ['person', person_id], cb);
};

// ====================================== Delete Profile
Person.prototype.deleteWithIdentifierQuery = function(identifier_query, cb) {
    this.request('DELETE', ['person', {identifier: identifier_query}], cb);
};
