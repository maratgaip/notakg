'use strict';

obonApp.controller('SearchCtrl', function ($scope, MediaService) {
    $scope.awesomeThings = [
      'music sss',
      'AngularJS',
      'hello',
        'HTML5 Boilerplate',
        'AngularJS',
        'hello',
      'Karma'
    ];

$scope.searchTerm = "Kanikey";
    $scope.filterTerm = "";
    $scope.showFlag = false;

    $scope.doSearch = function () {
        MediaService.get({query:$scope.searchTerm},function(response){
            $scope.mediaResults = response;
        });
    }

    $scope.playVideo = function(item) {
        $scope.showFlag = true;
        $scope.url = item.previewUrl;
        if  (item.trackName != null) $scope.title = item.trackName
        else $scope.title = item.collectionName;

        $scope.artist = item.artistName;
    }

    $scope.closeVideo = function() {
        $scope.showFlag = false;
    }



;


  });
obonApp.directive('videoLoader', function(){
    return function (scope, element, attrs){
        console.log(scope.url);
        scope.$watch("url",  function(newValue, oldValue){ //watching the scope url value
            element[0].children[0].attributes[3].value=newValue; //set the URL on the src attribute
            element[0].load();
            element[0].play();
        }, true);
        scope.$watch("showFlag",  function(newValue, oldValue){
            if (!newValue) // if the showFlag is false, stop playing the video (modal was closed)
                element[0].pause();
        }, true);
    }
});

obonApp.directive('showModal', function(){
    return function (scope, element, attrs){
        scope.$watch("showFlag",  function(newValue, oldValue){
            console.log(newValue);
            if (newValue)
                element.addClass("show");
            else element.removeClass("show");
        }, true);
    }
});


obonApp.filter('capitalize', function() {
    return function(input, scope) {
        if (input!=null)
            return input.substring(0,1).toUpperCase()+input.substring(1);
    }
});


