var app = angular.module('myApp', ['ngRoute', 'uiGmapgoogle-maps'])
app.run(function ($rootScope) {
  $rootScope.isLogged = true;
  $rootScope.isLogout = false;
  $rootScope.isSignUp = true;
})
app.config(function ($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: '../views/login.htm',
    controller: 'login'
  })
    .when('/register', {
      templateUrl: '../views/register.htm',
      controller: 'register'
    })
    .when('/map', {
      templateUrl: '../views/map.htm',
      controller: 'map'
    })
    .when('/req', {
      templateUrl: '../views/req.htm',
      controller: 'bus'
    })
})

app.config(['$locationProvider', function ($locationProvider) {
  $locationProvider.hashPrefix('');
}]);

app.config(['$qProvider', function ($qProvider) {
  $qProvider.errorOnUnhandledRejections(false);
}]);

// app.config(function (uiGmapGoogleMapApiProvider) {
//     uiGmapGoogleMapApiProvider.configure({
//         key: '',
//         v: '3',
//         libraries: 'weather,geometry,visualization'
//     });
// });