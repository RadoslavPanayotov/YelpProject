app.controller('homePage', function($scope) {
    $scope.hideBtn = true;
    $scope.showDiv = function() {
        if ($scope.hideBtn) {
            $scope.hideBtn = false;
        } else {
            $scope.hideBtn = true;
        }

    }
});