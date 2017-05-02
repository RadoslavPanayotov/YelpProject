app.factory('authentication', function ($http, $rootScope, $location, userService, $q) {

    function Auth() {
        var self = this;
        self.authMe = function () {
            return $http.get("https://projectxnr.herokuapp.com/auth");
        };
    };
    return new Auth();
});