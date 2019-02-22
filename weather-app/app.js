// const yargs = require('yargs');

const geocode = require('./geocode/geocode');

// const argv = yargs
// .options({
//     a: {
//             demand: true,
//             alias: 'address',
//             describe: 'Address to fetch weather for',
//             string: true
//     }
// })
// .help()
// .alias('help', 'h')
// .argv;

// geocode.geocodeAddress(argv.address, (errorMessage,results) => {
//     if (errorMessage){
//         console.log(errorMessage);
//     } else {
//         console.log(JSON.stringify(results, undefined, 2))
//     }
// });

// https://api.darksky.net/forecast/393fa78632c73bce1a232bc08dc20899/37.8267,-122.4233

geocode.weather();

