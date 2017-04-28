app.controller('logout', function ($scope, isLoggedService, userService, $rootScope, $location, $window) {
    
  //$scope.errorMessage = ''
  //isLoggedService.auth()
  $scope.logOut = function () {
    userService.postReq('http://localhost:3000/logout', 'GET', ).then(function (data) {  
        console.log("in");
      if (data.data.value == 'true') {
          console.log(data.data.value);
        $window.sessionStorage.clear();
        $rootScope.isLogout = false;
        $rootScope.isLogged = true;
        $location.path('/')
      } else {
          console.log("wrong");
      }
    }).catch(function (error, status) {
      $scope.data.error = { message: error, status: status }
      console.log($scope.data.error.status)
    })
  }
})
