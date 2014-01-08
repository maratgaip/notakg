'use strict';

obonApp.controller('IndexCtrl', function ($scope, $http, $location, $route, $routeParams, $modal) {
    $http.get('data/json/artist.json').success(function(data) {
        $scope.mediaResults = data[0];
        $scope.allan=$route;
        $scope.irchi = data;

        $scope.isArtist = function(data) {
            return data.info.uniqueName === $route.artist;
        };
    })

    $scope.$route = $route;
    $scope.$location = $location;
    $scope.$routeParams = $routeParams;


    $scope.playVideo = function(item) {
        $scope.showFlag = true;
        $scope.url = item.mp3;
        if  (item.trackName != null) $scope.title = item.trackName
        else $scope.title = item.collectionName;

        $scope.artist = item.artistName;
    }

    // Login actions
    $scope.openSignIn = function () {
        $scope.loginModal = true;
    };

    $scope.alerts = [
        { type: 'error', msg: 'Username tuura emes!' }
    ];


    $scope.closeAlert = function(index) {
        $scope.alerts.splice(index, 1);
    };

    $scope.loginFail=false;
    $scope.signOut = function() {
        $scope.login = "false"
    }
    $scope.signIn = function () {
        if ($scope.username==="marattig"){
            $scope.shouldBeOpen = false;
            $scope.login=true;
        }
        else if ($scope.username!="marattig"){
            $scope.loginFail=true;
        }

    }

    $scope.songLimit=5;
    $scope.showMoreSong = function () {
        $scope.songLimit=100;
        $scope.showMoreSongSpan = true;
    };
    $scope.showLessSong = function () {
        $scope.songLimit=5;
        $scope.showMoreSongSpan = false;
    };

    // Sign in Modal Open
    $scope.open = function () {
        $scope.shouldBeOpen = true;
        $scope.register=false;
    };
    $scope.registerOpen = function () {
        $scope.shouldBeOpen = true;
        $scope.register=true;
    };
    // Sign in Modal Close
    $scope.close = function () {
        $scope.shouldBeOpen = false;
    };
    // Sign in Modal Open/Close Smoothly
    $scope.opts = {
        backdropFade: true,
        dialogFade:true
    };

    // Create Playlist dropdown
    $scope.addToPlaylistDropdown = [
        {text: "{{currentUserPlaylist[0].playlistName}}", href: '#'},
        {text: "{{currentUserPlaylist[1].playlistName}}", href: '#'},
        {text: 'Create new Playlist', click: "createPlaylist()"}
    ];
    // Create Playlist modal
    $scope.createPlaylist = function() {
        // do something
        var modal = $modal({
            template: 'views/templates/createPlaylist.html',
            show: true,
            backdrop: 'static',
            scope: $scope
        });
    }
    //Search music
    $scope.search = function(value) {
        $location.path('/search').search({key: value});
        $http.get('data/json/currentUser/currentUserSong.json').success(function(data) {
            $scope.searchReturn = data;

        })
    }


    //Load Current User Information
    $http.get('data/json/currentUser/currentUserInfo.json').success(function(data) {
        $scope.currentUserInfo = data;
    })

    $http.get('data/json/currentUser/currentUserPlaylist.json').success(function(data) {
        $scope.currentUserPlaylist = data;
    })

    $http.get('data/json/currentUser/currentUserRecentSong.json').success(function(data) {
        $scope.currentUserRecentSong = data;
    })

    $http.get('data/json/currentUser/currentUserSong.json').success(function(data) {
        $scope.currentUserSong = data;
    })

    $http.get('data/json/currentUser/currentUserFollower.json').success(function(data) {
        $scope.currentUserFollower = data;
    })
    $http.get('data/json/currentUser/currentUserFollowing.json').success(function(data) {
        $scope.currentUserFollowing = data;
    })
    $http.get('data/json/currentUser/currentUserComment.json').success(function(data) {
        $scope.currentUserComment = data;
    })

    // Show Lyrics false.
    $scope.isCollapsed = false;

  });
