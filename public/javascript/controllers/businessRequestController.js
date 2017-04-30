app.controller('bus', function ($scope, isLoggedService, userService, $rootScope, $location, $window) {
  var data = {value: 'Divaka'}
  userService.postReq('http://localhost:3000/businesses', 'POST', data).then(function (data) {
    console.log(data)
  })

})
