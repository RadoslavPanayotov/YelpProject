app.controller('register', function ($scope, $http) {
    // If scope.user.type = false means normal user, else business user
    $scope.user.type = true;
    $scope.doIfClicked = function(){
        if($scope.user.type){
             $scope.user.type = false;
        }
        else{
             $scope.user.type = true;
        }
    }

    $scope.regMe = function () {
        // $http.get('https://projectxnr.herokuapp.com/users').then(function (response) {
        //    console.log(response.data);
        // });
        //console.log($scope.user);
       // var x = JSON.stringify($scope.user);
        //console.log(x);
        $http({
            url: 'https://projectxnr.herokuapp.com/createUsers',
            method: "POST",
            data: JSON.stringify($scope.user),
            withCredentials: true
        })
        .then(function (data){
               
            if(data.data.value == "true"){ 
                $rootScope.isLogged = false;
             }else{
                $scope.errorMessage = "There is a user with such a username or an email!" 
             }
        }).catch(function(error){
            $scope.data.error = {message: error, status: status};
            console.log($scope.data.error.status);
        })

        // $http.post('http://localhost:3000/users', x).then(function (response) {
        //     console.log(response.data);
        // }, (function errorCallback(response) {
        //     console.log("Error" + response.data);
        // }));
    }
    $scope.neshto = 'Tova ti e home stranicata';
})