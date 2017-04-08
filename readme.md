# slovakia-cities-regions

List of all cities(villages), all districts and all regions in Slovakia.

## install

`npm install slovakia-cities-regions`

## basic usage

```javascript
var cities = require('slovakia-cities-regions').cities();  //list of cities(name, zip, abreviation, district, region)
var districts = require('slovakia-cities-regions').districts() // list of districts(name, longname, abreviation)
var regions = require('slovakia-cities-regions').regions() // list of regions(name, abreviation)

```

## data example

```json
{
    "Paština Závada": {
        "name": "Paština Závada",
        "zip": "013 41",
        "abr": "ZA",
        "district": "Žilina",
        "region": "Žilinský kraj"
    },
    "Pastovce": {
        "name": "Pastovce",
        "zip": "935 74",
        "abr": "LV",
        "district": "Levice",
        "region": "Nitriansky kraj"
    },
    "Pastovník": {
        "name": "Pastovník",
        "zip": "065 44",
        "abr": "SL",
        "district": "Stará Ľubovňa",
        "region": "Prešovský kraj"
    },
    "Pastuchov": {
        "name": "Pastuchov",
        "zip": "920 63",
        "abr": "HC",
        "district": "Hlohovec",
        "region": "Trnavský kraj"
    }
}
```

## licence
---
The MIT License
