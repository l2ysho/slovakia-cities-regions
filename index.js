'use strict'

module.exports.cities = function() {
    return require('./src/cities.json');
}

module.exports.citiesList = function() {
    return require('./src/citiesList.json');
}

module.exports.districts = function() {
    return require('./src/districts.json');
}

module.exports.districtsList = function() {
    return require('./src/districtsList.json');
}

module.exports.regions = function() {
    return require('./src/regions.json');
}

module.exports.regionsList = function() {
    return require('./src/regionsList.json');
}
