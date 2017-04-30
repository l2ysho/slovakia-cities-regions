'use strict'

var cities = require('./').cities();
var citiesList = require('./').citiesList();
var districts = require('./').districts();
var districtsList = require('./').districtsList();
var regions = require('./').regions();
var regionsList = require('./').regionsList();

/*simple check*/

if (typeof cities === 'obsject' && typeof districts === 'object' &&
typeof regions === 'object' && typeof citiesList === 'object' ) {
    return console.log('success');
}
else {
    return console.log('Sum Tink Wong');
}
