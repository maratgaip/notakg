// ---------------------------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------     LOAD LIBRARIES -----------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------------------------

// Loading node modules
var http = require('https');

//var lookup = require('./example-usage/lookup');

// var conn = require('./database');
//var configuration = require('./config/configuration');

// application-wide utilities and assorted candies
//var utilities = require('./includes/utilities');

var redis = require("redis");

// Loading Hapi libraries
var Hapi = require('hapi');

/*

// exception handling
process.on('exit', function () {
    console.log(process.env.NODE_ENV + 'About to exit.');
});

process.on('uncaughtException', function (err) {
    console.log('Caught exception: ' + err.message + '-' + err.stack);

});
  */

    var http = new Hapi.Server('localhost', 8000);

    // Start redis connection
 //   redisClient = redis.createClient('6379', '127.0.0.1');
  //  redisClient.select('10', function(err) { if(err)	console.log(err); });

    // Add the API routes and wait until onions are going pink.:P
    http.route(
        {
            method: 'GET',
            path: '/{path*}',
            handler: {
                directory: { path: './app', listing: false, index: true }
            }
        }
    );
/*

    http.addRoutes([
        {
            method: 'GET',
            path: '/suggestion/key/{key}/value/{value}',
            config: {
                handler: lookup.getSuggestions,
                cache: {
                    expiresIn: 2000000,
                    staleIn: 10000,
                    staleTimeout: 500,
                    mode: 'client+server'
                }
            }
        },
        {
            method: 'POST',
            path: '/suggestion/key/{key}/value/{value}',
            config: {
                handler: lookup.saveSuggestion
            }
        }


    ]);

    */

    // Ignite the server
    http.start(function () {
        console.log('Server started at: ' + http.info.uri);
    });


