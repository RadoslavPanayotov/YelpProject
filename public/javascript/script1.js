var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider.when('/login', {
        templateUrl: "../views/login.htm",
        controller: 'login'
    })
    .when('/register', {
        templateUrl: "../views/register.htm",
        controller: 'register'
    });
});

