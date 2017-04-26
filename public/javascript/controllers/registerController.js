app.controller('register', function ($scope,$rootScope, $http) {
    // If scope.user.type = false means normal user, else business user
    $scope.user = {};
    $scope.user.type = false;
    $scope.doIfClicked = function(){
        if($scope.user.type){
             $scope.user.type = false;
        }
        else{
             $scope.user.type = true;
        }
    }

    $scope.regMe = function () {

        var usarname = $scope.user.username;
        var pass = $scope.user.password;
        // username validation 
        if(username.length > 32){
            $scope.errorUserMessage = "The username must be less then 32 characters!";
        }
        // username validation 
        if(username.length > 32){
            $scope.errorPassMessage = "The password must be at least 5 characters!";
        }
        // post request for creating new user
        console.log($scope.user);
        $http({
            url: 'http://localhost:3000/createUsers',
            method: "POST",
            data: JSON.stringify($scope.user),
            withCredentials: true
        })
        .then(function (data){
               console.log(data);
            if(data.data.value == "true"){ 
                $rootScope.isLogged = false;
             }else{
                $scope.errorMessage = "There is a user with such a username or an email!" 
             }
        }).catch(function(error){
            $scope.data = {};
            $scope.data.error = {message: error, status: status};
            console.log($scope.data.error.status);
        })

        
    }
   
})