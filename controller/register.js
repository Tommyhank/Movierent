/// <reference path="../controller/redbox.js" />
redboxapp.controller('registerCtrl', function ($scope,$state) {
    var userinfo=[];
    if (localStorage["users"] != null && localStorage["users"] != undefined) {
        userinfo = JSON.parse(localStorage["users"])
    }
    var newUser={};
    $scope.usernameempty=false;
    $scope.firstnameempty=false;
    $scope.lastnameempty=false;
    $scope.passwordnotmatch=false;
    $scope.passwordempty=false;
    $scope.regvalidate=function () {
        if($scope.regusername==""||$scope.regusername==undefined){
            $scope.usernameempty=true;
        }
        else {
            $scope.usernameempty=false;
        }

        if($scope.regfirstname==""||$scope.regfirstname==undefined){
            $scope.firstnameempty=true;
        }
        else{
            $scope.firstnameempty=false;
        }

        if($scope.reglastname==""||$scope.reglastname==undefined){
            $scope.lastnameempty=true;
        }
        else{
            $scope.lastnameempty=false;
        }

        if(($scope.regpassword!=$scope.regconfirmpassword)&&
            !(($scope.regpassword==undefined&&$scope.regconfirmpassword=="") ||($scope.regpassword==""&&$scope.regconfirmpassword==undefined))){
            $scope.passwordnotmatch=true;
        }
        else {
            $scope.passwordnotmatch=false;
        }

        if(($scope.regpassword==""&&$scope.regconfirmpassword=="")||($scope.regpassword==undefined && $scope.regconfirmpassword==undefined)
            ||($scope.regpassword==undefined&&$scope.regconfirmpassword=="") ||($scope.regpassword==""&&$scope.regconfirmpassword==undefined)){
            $scope.passwordempty=true;
        }
        else {
            $scope.passwordempty=false;
        }

        if( $scope.usernameempty==false||$scope.firstnameempty==false|| $scope.lastnameempty==false|| $scope.passwordnotmatch==false|| $scope.passwordempty==false){
            newUser={"username":$scope.regusername,"firstname":$scope.regfirstname,"lastname":$scope.reglastname,"password":$scope.regpassword};
            userinfo.push(newUser);
            localStorage["users"]=JSON.stringify(userinfo);
            $state.go("login");
        }
        else {
            return;
        }


    }

})