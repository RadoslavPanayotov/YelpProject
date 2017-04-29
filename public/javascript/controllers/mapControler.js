app.controller('map', function ($scope) {
    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition, function (error){
                console.log("an error has occured" + error)
            }
            , {
                enableHighAccuracy: true,
                timeout: 5000,
                maximumAge: 0
            });
        } else {
            console.log("Geolocation is not supported by this browser.");
        }
    }

    var currentPosition = {
        id: 0, options: { draggable: false }, coords: {}
    }
    function showPosition(position) {
        currentPosition.coords.latitude = position.coords.latitude;
        currentPosition.coords.longitude = position.coords.longitude;
        $scope.map = { center: { latitude: position.coords.latitude, longitude: position.coords.longitude }, zoom: 8 }
    }
    getLocation();

    $scope.map = { center: { latitude: 42.6887943, longitude: 23.3557421 }, zoom: 8 };
    $scope.options = { scrollwheel: true, draggable: true };
    $scope.coordsUpdates = 0;
    $scope.dynamicMoveCtr = 0;
    $scope.marker = currentPosition;
});