app.service("userService", function($http, $rootScope) {
    this.postReq = function(url, method, data) {
        this.req = $http({
            url: url,
            method: method,
            data: data || null,
            withCredentials: true
        });
        return this.req;
    }
});


//this can be changed 