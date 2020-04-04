// Make a call to the MBTA API, and display data for a train stop along the MBTA line.

const express = require('express');
const router = express.Router();
const request = require('request');

router.get('/', function(req, res, next) {
    const options = {
        'method': 'GET',
        'url': 'https://api-v3.mbta.com/stops/78606',
        'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    };

    const temp = request(options, function (error, response) {
        if (error) throw new Error(error);
        const data = JSON.parse(response.body);
        const parsedData = {
            name: data.data.attributes.name,
            lat: data.data.attributes.latitude,
            lon: data.data.attributes.longitude,
            mun: data.data.attributes.municipality
        };
        //const util = require('util'), obj = data;
        //const api_response = util.inspect(obj,{depth:null});
        console.log(parsedData)
        res.render('ps4', {resp: parsedData});
    });
});

module.exports = router;
