app.controller('register', function ($scope, $rootScope, userService, $window, $location) {
    // If scope.user.type = false means normal user, else business user

    $rootScope.showLogin = true;
    $rootScope.showSignUp = false;
    $rootScope.showLogout = false;

    $scope.user = {};
    $scope.user.type = false;
    $scope.doIfClicked = function () {
        if ($scope.user.type) {
            $scope.user.type = false;
        } else {
            $scope.user.type = true;
        }
    }

    $scope.regMe = function () {

        // username validation 
        if (username.length > 32) {
            $scope.errorUserMessage = "The username must be less then 32 characters!";
        }
        // username validation 
        if (username.length > 32) {
            $scope.errorPassMessage = "The password must be at least 5 characters!";
        }
        // post request for creating new user
        userService.postReq('http://localhost:3000/createUsers', 'POST', JSON.stringify($scope.user)).then(function (data) {
            console.log(data);
            if (data.data.value == "true") {
                $rootScope.showLogin = false;
                $rootScope.showSignUp = false;
                $rootScope.showLogout = true;
                $window.sessionStorage.setItem("userId", data.data.user);
                $location.path('/map');
            } else {
                $scope.errorMessage = "There is a user with such a username or an email!"
            }
        }).catch(function (error, status) {
            $scope.data = {};
            $scope.data.error = { message: error, status: status };
            //console.log($scope.data.error.status);
        })
        

    }



})