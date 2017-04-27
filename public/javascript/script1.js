var app = angular.module('myApp', ['ngRoute','ngCookies'])
app.run(function ($rootScope) {
  $rootScope.isLogged = true
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
    .when('/home', {
      templateUrl: '../views/home.htm',
      controller: 'home'
    })
})

// function request(url, method, data){

//     $http({
//             url: url,
//             method: method,
//             data: data,
//             withCredentials: true,

//         })
// }///////QUESTION FOR THE BOSS/////////////////
