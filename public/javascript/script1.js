var app = angular.module('myApp', []);
app.controller('login', function ($scope, $http) {
    $scope.logMe= function () {
        console.log($scope.user.password + " " + $scope.user.username);
        var x = JSON.stringify($scope.user);
        $http.post('https://projectxnr.herokuapp.com/users', x).then(function (response) {
           console.log(response.data);
        }), (function errorCallback(response) {
            console.log("Error" + response.data);
        });
    }

});