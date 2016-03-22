redboxapp.controller('mymovieCtrl',function ($scope, $rootScope,$http,widgetFactory,modalFactory) {
    $scope.widgetFactory=widgetFactory;
    $scope.modalFactory=modalFactory;


    var userinfo3 = [];
    $scope.rentedmovie = [];
    $scope.matchedrentedmovie = [];
    if (localStorage["users"] != "" && localStorage["users"] != undefined) {
        userinfo3 = JSON.parse(localStorage["users"]);
    }
    if (sessionStorage["user"] != "" && sessionStorage["user"] != undefined) {
        for (var i = 0; i < userinfo3.length; i++) {
            if (userinfo3[i].firstname == sessionStorage["user"]) {
                $rootScope.loggedinuser = userinfo3[i];
            }
        }
    }
    else{
        return
    }
    $http.get("json/movie.json").success(function (data) {
        $scope.movieList = data;
        $scope.getMovieInfo();
    })

    $scope.getMovieInfo = function () {
        if ($rootScope.loggedinuser.rentedmovie != undefined && $rootScope.loggedinuser.rentedmovie != "") {

            $scope.rentedmovie = $rootScope.loggedinuser.rentedmovie;

            for (var k = 0; k < $scope.rentedmovie.length; k++) {
                for (var j = 0; j < $scope.movieList.length; j++) {
                    if ($scope.movieList[j].moviename == $scope.rentedmovie[k]) {
                        $scope.matchedrentedmovie.push($scope.movieList[j]);
                    }
                }
            }
        }
    }

})
