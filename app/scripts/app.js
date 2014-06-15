'use strict';

var obonApp = angular.module('appsApp', ['ngGrid', 'ngCookies','ngResource', 'apiServices', 'ui.bootstrap', 'ui.directives',  ]);

// APPLICATION CONFIGURATION

// @refactor
// look URL for location - $location service
// TODO:
// if it is running on api-test.teachlinked.com = test
// if it is running on api-dev.teachlinked.com = development
// if it is running on api.teachlinked.com = production
// if it is running on api.teachlinked.com = staging



//var APIhttproot = 'http://api-test.teachlinked.com';

// main routings are defined here
// add and substact your pages


// @refactor:marat
// controller names should be camel case

obonApp.config(function ($routeProvider) {
    $routeProvider



		.when('/search', {
            templateUrl: 'views/search.html',
            controller: 'SearchCtrl'
        })
        .when('/artist/:artist', {
            templateUrl: 'views/artist/profile.html',
            controller: 'ArtistCtrl'
        })

        .when('/artist/:artist/song', {
            templateUrl: 'views/artist/songs.html',
            controller: 'ArtistCtrl'
        })
        .when('/artist/:artist/fan', {
            templateUrl: 'views/artist/fans.html',
            controller: 'ArtistCtrl'
        })
        .when('/user/:username', {
            templateUrl: 'views/user/profile.html',
            controller: 'ArtistCtrl'
        })
        .when('/user/:username/song', {
            templateUrl: 'views/user/songs.html',
            controller: 'ArtistCtrl'
        })
        .when('/user/:username/favorite', {
            templateUrl: 'views/user/favorites.html',
            controller: 'ArtistCtrl'
        })
        .when('/user/:username/playlist', {
            templateUrl: 'views/user/playlist.html',
            controller: 'ArtistCtrl'
        })
        .when('/user/:username/following', {
            templateUrl: 'views/user/followings.html',
            controller: 'ArtistCtrl'
        })
        .when('/user/:username/follower', {
            templateUrl: 'views/user/followers.html',
            controller: 'ArtistCtrl'
        })
        .when('/user/:username/playlist/:playlist', {
            templateUrl: 'views/user/playlistSong.html',
            controller: 'ArtistCtrl'
        })
        .when('/songs', {
            templateUrl: 'views/songs.html',
            controller: 'ArtistCtrl'
        })
        .when('/radio', {
            templateUrl: 'views/radio.html',
            controller: 'ArtistCtrl'
        })
        .when('/search', {
            templateUrl: 'views/search.html',
            controller: 'ArtistCtrl'
        })
        .when('/register', {
            templateUrl: 'views/register.html',
            controller: 'RegisterCtrl'
        })
        .otherwise({
            //redirectTo: '/'
        });
})

       


