'use strict';

obonApp.controller('TabCtrl', function ($scope, $location) {

    $scope.isActive = function(route) {
        return route === $location.path();
    }


  });


