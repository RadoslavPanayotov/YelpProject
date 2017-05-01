app.controller('login', function ($scope, isLoggedService, userService, $rootScope, $location, $window) {
  // function getCookie(name) {
  //     var value = "; " + document.cookie
  //     var parts = value.split("; " + name + "=")
  //     if (parts.length == 2) return parts.pop().split(";").shift()
  // }
  // var c = getCookie("connect.sid")
  
  $scope.errorMessage = ''

  $scope.logMe = function () {
    userService.postReq('http://localhost:3000/login', 'POST', JSON.stringify($scope.user)).then(function (data) {
      console.log(data)
      if (data.data.value == 'true') {
        $window.sessionStorage.setItem('userId', data.data.user)
        $rootScope.isLogout = true; 
        $rootScope.isSignUp = false;
        $location.path('/');

      } else {
        $scope.errorMessage = 'Username or password are invalid!'
      }
    }).catch(function (error, status) {
      $scope.data.error = { message: error, status: status }
      console.log($scope.data.error.status)
    })
  }
})
