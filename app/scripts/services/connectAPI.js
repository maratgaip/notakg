'use strict';

var apiServices = angular.module('apiServices',['ngResource', '$strap.directives']);
//global user info


apiServices.
    factory('getUserInfo', function($resource){
        return ($resource, '/profile');
    });
apiServices.
    factory('asd', function($resource){
        return getResource($resource, '/search');
    });

