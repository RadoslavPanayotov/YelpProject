var app = angular.module('myApp', ['ngRoute',
  'uiGmapgoogle-maps',
]);
app.run(function ($rootScope) {
  $rootScope.showLogin = true;
  $rootScope.showSignUp = true;
  $rootScope.showLogout = false;
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
    .when('/reviews', {
      templateUrl: '../views/reviews.htm',
      controller: 'reviewsController'
    })
    .when('/options', {
      templateUrl: '../views/options.htm',
      controller: 'optionsController'
    })
})

app.config(['$locationProvider', function ($locationProvider) {
  $locationProvider.hashPrefix('')
}])

app.config(['$qProvider', function ($qProvider) {

  $qProvider.errorOnUnhandledRejections(false)
}])

// app.config(function (uiGmapGoogleMapApiProvider) {
//     uiGmapGoogleMapApiProvider.configure({
//         key: '',
//         v: '3',
//         libraries: 'weather,geometry,visualization'
//     })
// })



