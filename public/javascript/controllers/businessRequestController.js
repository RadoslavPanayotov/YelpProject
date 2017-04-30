app.controller('bus', function($scope, isLoggedService, userService, $rootScope, $location, $window) {
    $scope.searchMe = function() {
        var data = {value: $scope.searchResult};
        console.log(data);
        userService.postReq('http://localhost:3000/businesses', 'POST', data).then(function(data) {
            console.log(data);
        });
    }

})