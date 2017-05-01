app.controller('logout', function ($scope, userService, $rootScope, $location, $window, authentication) {
  $scope.logOut = function () {
    authentication.authMe().then(function (data) {
      userService.postReq('http://localhost:3000/logout', 'GET', ).then(function (data) {
        console.log("loged out");
        $window.sessionStorage.clear();
        $rootScope.showLogin = true;
        $rootScope.showSignUp = true;
        $rootScope.showLogout = false;
        $location.path('/map');
      }).catch(function (error, status) {
        $scope.data.error = { message: error, status: status }
        console.log($scope.data.error.status)
      });
    })
  }
});