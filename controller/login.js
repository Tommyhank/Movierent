redboxapp.controller('loginCtrl', function ($scope,$rootScope,$state) {
    var userinfo2 = [];
    $scope.invaliduser=false;
    $scope.login=function () {

        if (localStorage["users"] != null && localStorage["users"] != undefined) {
            userinfo2 = JSON.parse(localStorage["users"]);
        }
        for(var i=0;i<userinfo2.length;i++){
            if (userinfo2[i].username==$scope.loginusername && userinfo2[i].password==$scope.loginpassword){
                sessionStorage["user"]=userinfo2[i].firstname;
                $rootScope.initPage();
                $state.go("movie");
            }
            else{
                $scope.invaliduser=true;
            }
        }

    }
})