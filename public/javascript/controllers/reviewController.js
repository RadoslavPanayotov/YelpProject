app.controller('reviewsController', function($scope, $rootScope, userService, $window, $location) {
    var logedUser = $window.sessionStorage.getItem('userId')
    if (logedUser == undefined) {
        $location.path('/map');
    }
    $scope.reviewForWriting = false;
    $scope.businessItem = $rootScope.clickedItem;
    $scope.writeAReview = function() {
        $scope.reviewForWriting = true;
    }
    $scope.reviewError = '';
    $scope.textarea = '';
    $scope.writeAScore = function() {
        $scope.raitingForWriting = true;
    }
    $scope.minScore = 0;
    $scope.maxScore = 5;
    $scope.submitReview = function() {
        var data = { objectId: $scope.businessItem._id, userId: logedUser, collection: $scope.businessItem.type, text: $scope.textarea }
        if ($scope.textarea == '') {
            $scope.reviewError = "You can't send an empty review!";
            return
        }
        userService.postReq('https://projectxnr.herokuapp.com/reviews', 'POST', data).then(function(data) {
            $scope.reviewForWriting = false;
        });
    }
    $scope.submitScore = function() {

        var data = {
            objectId: $scope.businessItem._id,
            score: $scope.score,
            collection: $scope.businessItem.type
        };
        userService.postReq('http://projectxnr.herokuapp.com/score', 'POST', JSON.stringify(data)).then(function(data) {

            $scope.reviewForWriting = false;
            $scope.raitingForWriting = false;
            if (data.data.value == 'true') {
                alert('success');
            } else {
                alert('try again');
            }
        });
    }
});