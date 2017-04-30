'use strict'

var cities = require('./').cities();
var citiesList = require('./').citiesList();
var districts = require('./').districts();
var districtsList = require('./').districtsList();
var regions = require('./').regions();
var regionsList = require('./').regionsList();

var assert = require('assert');

describe('Cities', function() {
  describe('#typeof', function() {
    it('should return object', function() {
      assert.equal('object', typeof cities);
    });
  });
});

describe('CitiesList', function() {
  describe('#typeof', function() {
    it('should return object', function() {
      assert.equal('object', typeof citiesList);
    });
  });
});

describe('Districts', function() {
  describe('#typeof', function() {
    it('should return object', function() {
      assert.equal('object', typeof districts);
    });
  });
});

describe('DistrictsList', function() {
  describe('#typeof', function() {
    it('should return object', function() {
      assert.equal('object', typeof districtsList);
    });
  });
});

describe('Regions', function() {
  describe('#typeof', function() {
    it('should return object', function() {
      assert.equal('object', typeof regions);
    });
  });
});

describe('RegionsList', function() {
  describe('#typeof', function() {
    it('should return object', function() {
      assert.equal('object', typeof regionsList);
    });
  });
});
