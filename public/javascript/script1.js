var app = angular.module('myApp', []);
app.controller('login', function ($scope, $http) {
    $scope.logMe= function () {
        console.log($scope.user.password + " " + $scope.user.username);
        $http.get('https://projectxnr.herokuapp.com/users', $scope.user).then(function (response) {
           console.log(response.data);
        }), (function errorCallback(response) {
            console.log("Error" + response.data);
        });
    }

});