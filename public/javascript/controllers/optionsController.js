app.controller('optionsController', function ($scope, userService, $rootScope, $window, $location) {
    $scope.passConf = true;
    $scope.confPassError = "";
    $scope.newUsernameError = "";
    $scope.newPassError = "";
    $scope.newEmailError = "";
    $scope.newUser = "";
    $scope.newPass = "";
    $scope.newEmail = "";
    var idOfCurrentUser = $window.sessionStorage.getItem("userId");
    if (idOfCurrentUser == undefined) {
        console.log("tyja fsafhasf")
        alert("Please login before trying to change your options.");
        $location.path("/login");
    }

    $scope.checkPass = function () {
        var data = { userId: idOfCurrentUser, password: $scope.passConfirmation };
        console.log(data);
        userService.postReq('http://localhost:3000/options', 'POST', data).then(function (data) {
            console.log(data);
            if (data.data.value == "true") {
                $scope.passConf = false;
            } else {
                $scope.confPassError = "Wrong password!";
            }
        }, function (responce) { }).catch(function () { });
    }


    $scope.sendNewUser = function () {
        var data = { userId: idOfCurrentUser, username: $scope.newUser };
        userService.postReq('http://localhost:3000/options/newUser', 'POST', data).then(function (data) {
            console.log(data);
            if (data.data.value == "true") {
                $scope.newUsernameError = "Username Changed!";
            } else {
                $scope.newUsernameError = "Username Change failed!";
            }
        }, function (responce) { }).catch(function () { });
    }
    $scope.sendNewPass = function () {
        var data = { userId: idOfCurrentUser, password: $scope.newPass };
        console.log("Sending new pass " + $scope.newPass)
        userService.postReq('http://localhost:3000/options/newPass', 'POST', data).then(function (data) {
            console.log(data);
            if (data.data.value == "true") {
                $scope.newPassError = "Password Changed!";
            } else {
                $scope.newPassError = "Password Change failed!";
            }
        }, function (responce) { }).catch(function () { });
    }
    $scope.sendNewEmail = function () {
        var data = { userId: idOfCurrentUser, email: $scope.newEmail };
        userService.postReq('http://localhost:3000/options/newEmail', 'POST', data).then(function (data) {
            console.log(data);
            if (data.data.value == "true") {
                $scope.newEmailError = "Email Changed!";
            } else {
                $scope.newEmailError = "Email Change failed!";
            }
        }, function (responce) { }).catch(function () { });
    }


});