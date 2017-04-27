app.controller('login', function($scope, userService, $rootScope, $window, isLoggedService) {

   isLoggedService.listCookies();
   

    // function getCookie(name) {
    //     var value = "; " + document.cookie;
    //     var parts = value.split("; " + name + "=");
    //     if (parts.length == 2) return parts.pop().split(";").shift();
    // }
    // var c = getCookie("connect.sid");
    $scope.errorMessage = '';

    $scope.logMe = function() {
        userService.postReq('http://localhost:3000/users', 'POST', JSON.stringify($scope.user)).then(function(data) {
            console.log(data);
            if (data.data.value == "true") {
                $rootScope.isLogged = false;
               
                $window.localStorage.setItem("userId", data.data.user);
            } else {
                $scope.errorMessage = "Username or password are invalid!"
            }
        }).catch(function(error, status) {
            $scope.data.error = { message: error, status: status };
            console.log($scope.data.error.status);
        });

    }
})