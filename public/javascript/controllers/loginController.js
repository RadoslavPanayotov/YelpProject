app.controller('login', function($scope, userService, $rootScope) {
    $scope.errorMessage = '';

    $scope.logMe = function() {
        // $http({
        //     url: 'http://localhost:3000/users',
        //     method: "POST",
        //     data: JSON.stringify($scope.user),
        //     withCredentials: true,

        // })
        console.log(userService);
        userService.postReq('http://localhost:3000/users', 'POST', JSON.stringify($scope.user)).then(function(data) {
            console.log(data);
            if (data.data.value == "true") {
                $rootScope.isLogged = false;
            } else {
                $scope.errorMessage = "Username or password are invalid!"
            }
        }).catch(function(error, status) {
            $scope.data.error = { message: error, status: status };
            console.log($scope.data.error.status);
        });
    }

})