app.service('isLoggedService', function ($rootScope, $location, userService) {
  this.auth = function () {
    $rootScope.isLogged = false;
    userService.postReq('http://localhost:3000/login', 'GET').then(function (data) {
      if (data.data.value == 'false') {
        $location.path('/login')
      } else {
        $location.path('/')
      }
    })
    // console.log("smth")
    // var theCookies = $cookies.getAll()

    // // return aString

    // console.log("all in" + JSON.stringify(theCookies))

    // // console.log("all in" + theCookies)
    // // if(aString){
    // //     console.log("real")
    // //     $location.path('/home')
    // // }
    // // else{
    // //     console.log("no cookie")
    // // }
  }
})
