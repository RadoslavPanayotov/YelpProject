app.controller('reviewsController', function ($scope, $rootScope, userService, $window, $location) {
     console.log($scope.businessItem);
  // var logedUser = $window.sessionStorage.getItem('userId')
  // if (logedUser == undefined) {
  //   $location.path('/map')
  // }
  $scope.reviewForWriting = false
  $scope.businessItem = $rootScope.clickedItem
  $scope.writeAReview = function () {
    console.log('sasa')
    $scope.reviewForWriting = true
  }
  $scope.reviewError = '';
  $scope.textarea = '';
  $scope.submitReview = function () {
    // if($scope.textarea == ''){
    //   $scope.reviewError = "You can't send an empty review!";
    //   return;
    // }
    //userService.postReq("")
 
  }
  
 
})
