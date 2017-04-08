'use strict'

module.exports.cities = function() {
    return require('./src/cities.json');
}

module.exports.districts = function() {
    return require('./src/districts.json');
}

module.exports.regions = function() {
    return require('./src/regions.json');
}