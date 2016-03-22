/// <reference path="../angular-ui-route/angular-ui-router.js" />
/// <reference path="../angular-1.4.4/angular.min.js" />
var redboxapp = angular.module("redboxApp", ['ui.router','ngAnimate', 'ui.bootstrap']);
redboxapp.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/movie');
    $stateProvider
    .state("movie", {
        url: '/movie',
        templateUrl: 'routetemplate/movie.html',
        controller: 'movieCtrl'
    })
    .state("mymovie",{
        url:'/mymovie',
        templateUrl: 'routetemplate/mymovie.html',
        controller: 'mymovieCtrl'
    })
    .state("login", {
        url: '/login',
        templateUrl: 'routetemplate/login.html',
        controller: 'loginCtrl'
    })
    .state("register", {
        url: '/register',
        templateUrl: 'routetemplate/register.html',
        controller: 'registerCtrl'
    })
})

redboxapp.controller("widgetCtrl",function ($scope, $rootScope,$state) {
    $rootScope.initPage=function () {
        if (sessionStorage["user"] != null && sessionStorage["user"] != undefined) {
            $scope.loggedin=true;
            $scope.loggedinfirstname= sessionStorage["user"];
            $scope.notloggedin=false;
        }
        else
        {
            $scope.loggedin=false;
            $scope.notloggedin=true;
        }
    }
    $rootScope.signout=function () {
        if (confirm("Do you want to sign out?")) {
            sessionStorage.clear();
            $rootScope.initPage();
            $state.go("movie");
        }

    }

})
