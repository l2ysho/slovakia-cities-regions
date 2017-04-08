'use strict'

var cities = require('./').cities();
var districts = require('./').districts();
var regions = require('./').regions();

/*simple check*/

if (typeof cities === 'object' && typeof districts === 'object' && typeof regions === 'object') {
    return console.log('success');
}
