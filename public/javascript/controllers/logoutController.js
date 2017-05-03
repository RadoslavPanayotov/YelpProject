app.controller('logout', function($scope, userService, $rootScope, $location, $window, authentication) {
    $scope.logOut = function() {
        authentication.authMe().then(function(data) {
            userService.postReq('https://projectxnr.herokuapp.com/logout', 'GET').then(function(data) {
                $window.sessionStorage.clear();
                $rootScope.showLogin = true;
                $rootScope.showSignUp = true;
                $rootScope.showLogout = false;
                $location.path('/map');
            }).catch(function(error, status) {
                $scope.data.error = { message: error, status: status }

            });
        });
    }
});