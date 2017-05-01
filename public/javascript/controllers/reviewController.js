app.controller('reviewsController', function ($scope, $rootScope, userService, $window, $location) {
  var logedUser = $window.sessionStorage.getItem('userId')
  if (logedUser == undefined) {
    $location.path('/map');   
  }
  $scope.businessItem = $rootScope.clickedItem;
  $scope.name = $scope.businessItem;
console.log($scope.name);
})
