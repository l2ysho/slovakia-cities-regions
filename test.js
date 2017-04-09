'use strict'

var cities = require('./').cities();
var citiesList = require('./').citiesList();
var districts = require('./').districts();
var regions = require('./').regions();

/*simple check*/

if (typeof cities === 'object' && typeof districts === 'object' && typeof regions === 'object' && typeof citiesList === 'object' ) {
    return console.log('success');
}
else {
    return console.log('Sum Tink Wong');
}
