app.controller('bus', function ($scope, isLoggedService, userService, $rootScope, $location, $window) {
  //   $scope.clickForCheck = function () {

  //     if ($scope.checkRestaurant) {
  //       console.log('smth1')
  //     }
  //     if ($scope.checkShop) {
  //       console.log('smth2')
  //     }

  //     if ($scope.checkEntertainment) {
  //       console.log('smth3')
  //     }
  //   }
  function requestData (url, data) {
    userService.postReq(url, 'POST', data).then(function (data) {
      console.log(data)
    })
  }
  $scope.searchMe = function () {
    var data = { value: $scope.searchResult}
    if ($scope.checkRestaurant && (!$scope.checkShop) && (!$scope.checkEntertainment)) {
      requestData('http://localhost:3000/businesses/restaurants', data)
    }
    if ((!$scope.checkRestaurant) && $scope.checkShop && (!$scope.checkEntertainment)) {
      requestData('http://localhost:3000/businesses/shopping', data)
    }
    if ($scope.checkEntertainment && (!$scope.checkShop) && (!$scope.checkRestaurant)) {
      requestData('http://localhost:3000/businesses/entertainment', data)
    }
    if ($scope.checkEntertainment && $scope.checkShop && (!$scope.checkRestaurant)) {
      requestData('http://localhost:3000/businesses/shop&enter', data)
    }
    if ($scope.checkEntertainment && (!$scope.checkShop) && $scope.checkRestaurant) {
      requestData('http://localhost:3000/businesses/rest&enter', data)
    }
     if ((!$scope.checkEntertainment) && $scope.checkShop && $scope.checkRestaurant) {
      requestData('http://localhost:3000/businesses/rest&shop', data)
    }

    if ($scope.checkRestaurant && $scope.checkShop && $scope.checkEntertainment) {
      requestData('http://localhost:3000/businesses', data)
    }
  }
})
