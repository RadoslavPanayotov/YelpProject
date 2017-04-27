
app.controller('login', function ($scope, userService, $rootScope, $window) {

    $scope.$on('$viewContentLoaded', function() {
    //call it here
    });
   $scope.errorMessage = '';
   
    $scope.logMe = function () {
        userService.postReq('http://localhost:3000/users','POST',JSON.stringify($scope.user)).then(function (data){    
            console.log(data);
            if(data.data.value == "true"){ 
               // $window.localStorage.setItem("userId",data.data.user);
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
