app.controller('login', function ($scope, userService, $rootScope, $location, $window) {

  $scope.errorMessage = '';
  $rootScope.showLogin = false;
  $rootScope.showSignUp = true;
  $rootScope.showLogout = false;
  $scope.logMe = function () {
    userService.postReq('http://localhost:3000/login', 'POST', JSON.stringify($scope.user)).then(function (data) {
      if (data.data.value == 'true') {
        $window.sessionStorage.setItem('userId', data.data.user);
        $rootScope.loggedCurrentUser = $scope.user.username;
        $rootScope.showLogin = false;
        $rootScope.showSignUp = false;
        $rootScope.showLogout = true;
        $location.path('/map');
      } else {
        $scope.errorMessage = 'Username or password are invalid!';
      }
    }).catch(function (error, status) {
      $scope.data.error = { message: error, status: status }
      console.log($scope.data.error.status);
    })
  }
})


