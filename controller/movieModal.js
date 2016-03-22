/**
 * Created by tommy on 2016/3/21.
 */
redboxapp.controller("moviemodalCtrl",function ($modalInstance,$scope,modalFactory,selectedMovie,widgetFactory,orderedMovie,$state) {
    $scope.widgetFactory=widgetFactory;
    $scope.modalFactory=modalFactory;
    $scope.selectedMovie=selectedMovie;
    $scope.orderedMovie=orderedMovie;
    $scope.loggedin=false;
    $scope.alreadyordered=false;

    if (sessionStorage["user"] != null && sessionStorage["user"] != undefined) {
        $scope.loggedin=true;
    }
    else
    {
        $scope.loggedin=false;
    }

    if($scope.orderedMovie!=""&& $scope.orderedMovie!=undefined){
        for (var i=0; i<$scope.orderedMovie.length; i++){
            if($scope.orderedMovie[i].moviename==$scope.selectedMovie.moviename) {
                $scope.alreadyordered=true;
            }
        }

    }

    function getLoggedinUser() {
        $scope.user = [];
        if (localStorage["users"] != "" && localStorage["users"] != undefined) {
            $scope.user = JSON.parse(localStorage["users"]);
        }
        if (sessionStorage["user"] != "" && sessionStorage["user"] != undefined) {
            for (var i = 0; i < $scope.user.length; i++) {
                if ($scope.user[i].firstname == sessionStorage["user"]) {
                    $scope.loggedinuserx = $scope.user[i];
                }
            }
        }
    }

    $scope.order = function () {
        if (confirm("Do you want to rent this movie")) {
           getLoggedinUser();
            if ($scope.loggedinuserx.rentedmovie != "" && $scope.loggedinuserx.rentedmovie != undefined) {
                if($scope.loggedinuserx.rentedmovie.length<=2) {
                    $scope.loggedinuserx.rentedmovie.push(selectedMovie.moviename);
                    localStorage["users"] = JSON.stringify($scope.user);
                    $modalInstance.close('ordersuccess');
                    $state.go("mymovie");
                    parent.location.reload();
                }
                else {
                    alert("You cannot rent more than 3 movies");
                    return
                }
            }
            else {
                $scope.loggedinuserx.rentedmovie = [];
                $scope.loggedinuserx.rentedmovie.push(selectedMovie.moviename);
                localStorage["users"]=JSON.stringify($scope.user);
                $modalInstance.close('ordersuccess');
                $state.go("mymovie");
                parent.location.reload();
            }
        }


    };

    $scope.returnMovie=function () {

        if(confirm("Do you want to return the movie?")){
            getLoggedinUser();
            var returnIndex=$scope.loggedinuserx.rentedmovie.indexOf(selectedMovie.moviename);
            $scope.loggedinuserx.rentedmovie.splice(returnIndex,1);
            localStorage["users"]=JSON.stringify($scope.user);
            $modalInstance.close('returnsuccess');
            $state.go("mymovie");
            parent.location.reload();
        }

    }

    $scope.cancel = function () {
        $modalInstance.close('cancel');
    };
    
})