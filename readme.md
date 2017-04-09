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
### cities

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

### citiesList
```json
[
    {
        "name": "Vybúchanec",
        "zip": "071 01",
        "abr": "MI",
        "district": "Michalovce",
        "region": "Košický kraj"
    }, {
        "name": "Výčapky",
        "zip": "951 25",
        "abr": "NR",
        "district": "Nitra",
        "region": "Nitriansky kraj"
    }, {
        "name": "Výčapy - Opatovce",
        "zip": "951 44",
        "abr": "NR",
        "district": "Nitra",
        "region": "Nitriansky kraj"
    }, {
        "name": "Východná",
        "zip": "032 32",
        "abr": "LM",
        "district": "Liptovský Mikuláš",
        "region": "Žilinský kraj"
    }
]
```

### districts
```json
{
    "Zvolen": {
        "name": "Zvolen",
        "longName": "Okres Zvolen",
        "abr": "ZV"
    },
    "Žarnovica": {
        "name": "Žarnovica",
        "longName": "Okres Žarnovica",
        "abr": "ZC"
    },
    "Žiar nad Hronom": {
        "name": "Žiar nad Hronom",
        "longName": "Okres Žiar nad Hronom",
        "abr": "ZH"
    },
    "Žilina": {
        "name": "Žilina",
        "longName": "Okres Žilina",
        "abr": "ZA"
    }
}    
```

### regions
```json
{
    "Prešovský kraj": {
        "name": "Prešovský kraj",
        "abr": "PV"
    },
    "Trenčiansky kraj": {
        "name": "Trenčiansky kraj",
        "abr": "TC"
    },
    "Trnavský kraj": {
        "name": "Trnavský kraj",
        "abr": "TA"
    },
    "Žilinský kraj": {
        "name": "Žilinský kraj",
        "abr": "ZI"
    }
}
```
## license

The MIT License
