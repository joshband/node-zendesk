// Profiles.js: Client for the Zendesk Profile API.
// https://developer.zendesk.com/rest_api/docs/sunshine/relationships#relationship-records

var util = require('util'),
    Client = require('../client').Client;


var Relationships = exports.Relationships = function(options) {
    this.jsonAPINames = [ 'relationships' ];
    Client.call(this, options);
};

// Inherit from Client base object
util.inherits(Relationships, Client);

// ######################################################## Relationships
// ====================================== List Relationship Records by Object Record
// GET /api/sunshine/objects/records/{id}/relationships/{relationship_type}
// should this be in objects?
Relationships.prototype.listByType = function(recordId, relationshipType, cb) {
    this.requestAll('GET', ['objects', 'records', recordId, 'relationships', relationshipType], cb);
};

// ====================================== List Relationship Records by Type
// GET /api/sunshine/relationships/records?type={relationship_type}
Relationships.prototype.listById = function(relationshipType, cb) {
    this.requestAll('GET', ['relationships', `records?type=${relationshipType}`], cb);
};

// ====================================== Create Relationship Record
// POST /api/sunshine/relationships/records
Relationships.prototype.create = function(payload, cb) {
    this.request('POST', ['relationships', 'records'], payload, cb);
};

// ====================================== Delete Relationship Record
// DELETE /api/sunshine/relationships/records/{id}
Relationships.prototype.delete = function(relationshipId, cb) {
    this.request('DELETE', ['relationships', 'records', relationshipId], cb);
};
