app.factory('authentication', function ($http, $rootScope, $location, userService, $q) {

    function Auth() {
        var self = this;
        self.authMe = function () {
            return $http.get("http://localhost:3000/auth");
        };
    };
    return new Auth();
});