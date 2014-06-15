'use strict';

obonApp.controller('LoginCtrl', function ($scope, $rootScope, $http, $location, $firebase, $firebaseSimpleLogin) {


    $scope.isActive = function(route) {
        return route === $location.path();
    };


    //$scope.init = function(){
    $scope.chatRef = new Firebase('https://resplendent-fire-7847.firebaseio.com');

    $scope.auth = new FirebaseSimpleLogin($scope.chatRef, function(error, user) {
        if (error) {
            // an error occurred while attempting login
            console.log(error);
        } else if (user) {
            // user authenticated with Firebase
            console.log('User ID: ' + user.uid + ', Provider: ' + user.provider);
            console.log('heyy');
            $rootScope.currentUser = user;

           // $location.path('/songs');



        } else {
            // user is logged out
        }
    });

    // };




    $scope.loginUser = function(provider){

        $scope.auth.login(provider, {
            rememberMe: true,
            scope: 'email, user_likes'
        });
        //after user logged in redirect him to another page.
        $location.path('/songs');

    };

    $scope.logoutUser = function(){
        $scope.auth.logout();
        $location.path('/radio');

        console.log('user logout');


    };


});
