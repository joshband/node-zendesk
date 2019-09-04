// Profiles.js: Client for the Zendesk Profile API.
// https://developer.zendesk.com/rest_api/docs/sunshine/resources#object-records

var util = require('util'),
    Client = require('../client').Client;


var Objects = exports.Objects = function(options) {
    this.jsonAPINames = [ 'objects' ];
    Client.call(this, options);
};

// Inherit from Client base object
util.inherits(Objects, Client);

// ######################################################## Objects
// ====================================== List Object Records by Type
Objects.prototype.listByType = function(objectType, cb) {
    this.requestAll('GET', ['objects', `records?type=${objectType}`], cb);
};

// ====================================== List Object Records by Id
Objects.prototype.listById = function(recordIds, cb) {
    this.requestAll('GET', ['objects', `records?ids=${recordIds.toString()}`], cb);
};

// ====================================== List Related Object Records
Objects.prototype.listRelatedObjectsRecords = function(recordId, relationshipType, cb) {
    this.requestAll('GET', ['objects', 'records', 'recordId', 'related', relationshipType], cb);
};

// ====================================== Show Object Record
Objects.prototype.show = function(recordId, cb) {
    this.request('GET', ['objects', 'records', recordId], cb);
};

// ====================================== Show Object Record By External ids
Objects.prototype.showByExternalId = function(objectType, externalIds, cb) {
    if(externalIds.length === 1) {
      this.request('GET', ['objects', `records?type=${objectType}&external_id=${externalIds.toString()}`], cb);
    } else {
      this.request('GET', ['objects', `records?type=${objectType}&external_ids=${externalIds.toString()}`], cb);
    }
};

// ====================================== Create Object Record
Objects.prototype.create = function(payload, cb) {
    this.request('POST', ['objects', 'records'], payload, cb);
};

// ====================================== Update Object Record
Objects.prototype.update = function(recordId, payload, cb) {
    this.request('PATCH', ['objects', 'records', recordId], payload, cb);
};

// ====================================== Delete Object Record
Objects.prototype.delete = function(recordId, cb) {
    this.request('DELETE', ['objects', 'records', recordId], cb);
};
