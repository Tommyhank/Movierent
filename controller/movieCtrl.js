/// <reference path="../angular-1.4.4/angular.js" />
/// <reference path="../routejs/redbox.js" />
redboxapp.controller('movieCtrl', function ($scope,$http,$rootScope,widgetFactory,modalFactory) {
    $scope.modalFactory=modalFactory;
    $scope.widgetFactory=widgetFactory;
    $rootScope.movieList = [];
    $http.get("json/movie.json").success(function (data) {
        $rootScope.movieList= data;
    })

})