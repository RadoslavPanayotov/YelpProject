app.controller('optionsController', function ($scope, userService, $rootScope, $window, $location) {
  $scope.passConf = true
  $scope.confPassError = ''
  $scope.newUsernameError = ''
  $scope.newPassError = ''
  $scope.newEmailError = ''
  $scope.newUser = ''
  $scope.newPass = ''
  $scope.newEmail = ''
  var idOfCurrentUser = $window.sessionStorage.getItem('userId')
  if (idOfCurrentUser == undefined) {
    alert('Please login before trying to change your options.')
    $location.path('/login')
  }

  $scope.checkPass = function () {
    var data = { userId: idOfCurrentUser, password: $scope.passConfirmation }

    userService.postReq('https://projectxnr.herokuapp.com/options', 'POST', data).then(function (data) {
      if (data.data.value == 'true') {
        $scope.passConf = false
      } else {
        $scope.confPassError = 'Wrong password!'
      }
    })
  }

  $scope.sendNewUser = function () {
    var data = { userId: idOfCurrentUser, username: $scope.newUser }
    userService.postReq('https://projectxnr.herokuapp.com/options/newUser', 'POST', data).then(function (data) {
      if (data.data.value == 'true') {
        $scope.newUser = ''
        $scope.newUsernameError = 'Username Changed!'
      } else {
        $scope.newUsernameError = 'Username Change failed!'
      }
    })
  }
  $scope.sendNewPass = function () {
    var data = { userId: idOfCurrentUser, password: $scope.newPass }

    userService.postReq('https://projectxnr.herokuapp.com/options/newPass', 'POST', data).then(function (data) {
      if (data.data.value == 'true') {
        $scope.newPass = ''
        $scope.newPassError = 'Password Changed!'
      } else {
        $scope.newPassError = 'Password Change failed!'
      }
    })
  }
  $scope.sendNewEmail = function () {
    var data = { userId: idOfCurrentUser, email: $scope.newEmail }
    userService.postReq('https://projectxnr.herokuapp.com/options/newEmail', 'POST', data).then(function (data) {
      if (data.data.value == 'true') {
        $scope.newEmail = ''
        $scope.newEmailError = 'Email Changed!'
      } else {
        $scope.newEmailError = 'Email Change failed!'
      }
    });
  }
})
