app.service("loginService", function (request) {
    $http({
        url: 'https://projectxnr.herokuapp.com/users',
        method: "POST",
        data: request,
        withCredentials: true,
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    }).success(function (responce) {
        return responce;
    });
});