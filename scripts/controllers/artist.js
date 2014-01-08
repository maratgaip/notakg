'use strict';

obonApp.controller('ArtistCtrl', function ($scope, $http, $location) {

    $scope.isActive = function(route) {
        return route === $location.path();
    }

});
