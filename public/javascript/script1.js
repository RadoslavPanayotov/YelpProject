var app = angular.module('myApp', []);
app.controller('login', function ($scope, $http) {
    $scope.logMe = function () {
        // $http.get('https://projectxnr.herokuapp.com/users').then(function (response) {
        //    console.log(response.data);
        // });
        // console.log($scope.user.password + " " + $scope.user.username);
        // var x = JSON.stringify($scope.user);
        $http({
            // 'https://projectxnr.herokuapp.com/users', x
            url: 'https://projectxnr.herokuapp.com/users',
            method: "POST",
            data: $scope.user,
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            }
        });
        // //     }).then(function (response) {
        // //         console.log(response.data);
        // //     }), (function errorCallback(response) {
        // //         console.log("Error" + response.data);
        // //     });
        // // }
    }
});