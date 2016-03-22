/**
 * Created by tommy on 2016/3/21.
 */
redboxapp.factory('widgetFactory',function () {


    var getstar=function (num) {
        var starArray=[];
        for (var i=0;i<num;i++){
            starArray.push(i);
        }
        return starArray;
    }
    return {
        getstar:getstar
    };

})