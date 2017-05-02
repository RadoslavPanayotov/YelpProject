app.controller('reviewsController', function ($scope, $rootScope, userService, $window, $location) {
   
   var logedUser = $window.sessionStorage.getItem('userId')
  if (logedUser == undefined) {
    $location.path('/map')
  }
  $scope.reviewForWriting = false
  $scope.businessItem = $rootScope.clickedItem
  $scope.writeAReview = function () {
    console.log('sasa')
    $scope.reviewForWriting = true;
  }
  $scope.reviewError = '';
  $scope.textarea = '';
  $scope.submitReview = function () {
    var data = {objectId: $scope.businessItem._id, userId:logedUser,collection: $scope.businessItem.type, text: $scope.textarea};
    if($scope.textarea == ''){
      $scope.reviewError = "You can't send an empty review!";
      return;
    }
    userService.postReq("http://localhost:3000/reviews","POST",data).then(function(data){
      console.log(data);
    });
  }
  
 
})
