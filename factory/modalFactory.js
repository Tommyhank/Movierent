/**
 * Created by tommy on 2016/3/21.
 */
redboxapp.factory('modalFactory',function ($modal) {
    var openModal=function (movieItem,matchedrentedmovie) {
        var modalInstance=$modal.open({
        templateUrl: 'routetemplate/moviemodal.html',
        controller: 'moviemodalCtrl',
        size:'lg',
        resolve: {
            selectedMovie: function(){
                return movieItem
            },
            orderedMovie:function () {
                return matchedrentedmovie
            }
        }
    });
 /*       modalInstance.result.then(function () {
            console.log("success");

        }, function () {
            console.log('Modal dismissed at: ' + new Date());
        });*/
    }

    return{
        openModal:openModal
    }
    
})