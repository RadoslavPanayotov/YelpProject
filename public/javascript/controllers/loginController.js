app.controller('login', function ($scope, $http, $rootScope) {
   $scope.errorMessage = '';
   
    $scope.logMe = function () {
        // $http.get('https://projectxnr.herokuapp.com/users').then(function (response) {
        //    console.log(response.data);
        // });
        //console.log($scope.user);
        var x = JSON.stringify($scope.user);
        //console.log(x);
        $http({
            url: 'http://localhost:3000/users',
            method: "POST",
            data: x,
            withCredentials: true,
          
        })
        .then(function (data){
            
            if(data.data.value == "true"){ 
                $rootScope.isLogged = false;
             }else{
                $scope.errorMessage = "Username or password are invalid!" 
             }
           
        }).catch(function(error, status){
            $scope.data.error = {message: error, status: status};
            console.log($scope.data.error.status);
        });
        // $http.post('http://localhost:3000/users', x).then(function (response) {
        //     console.log(response.data);
        // }, (function errorCallback(response) {
        //     console.log("Error" + response.data);
        // }));
    }

})