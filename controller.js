var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function ($scope, $http) {
    console.log("hello world from controller");
    $http({
        method: 'GET',
        url: '/contactlist'
    }).then(function (response) {
      
            console.log("got data i requested")
            $scope.contactlist = response;
    }), function (error) {
        console.log("error")
    };



        /*.get('/contactlist').success(function (response) {
        console.log("got data i requested");
        $scope.contactlist = response;
    });*/



}]);