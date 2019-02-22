const request = require('request');

let geocodeAddress = (address, callback) =>{
    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyC1V-Bwwr4VEjNSsN17-X572aPX6axUa88`,
        json: true
    }, (error,response,body) =>{
        if (error) {
            callback('Unable to connect to Google server`s');
        } else if (body.status === 'ZERO_RESULTS'){
            callback('Unable to find that address.')
        } else if (body.status === 'OK'){
            callback(undefined, {
                address: body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat,
                longtitude: body.results[0].geometry.location.lng
            });
        }    
    });    
}

let weather = () => {
    request({
        url: `https://api.darksky.net/forecast/393fa78632c73bce1a232bc08dc20899/49524756,25.5889832`,
        json: true
    }, (error, response, body) =>{
        if (!error && response.statusCode === 200) {
            console.log(body.currently.temperature);
        } else {
            console.log('Unable to fetch weather');
        } 
    });
}

module.exports = {
  geocodeAddress,
  weather
};