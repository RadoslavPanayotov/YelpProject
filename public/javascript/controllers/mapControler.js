app.controller('map', function ($scope, userService) {
    // function to find the users lat and lng coordinates
    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition, function (error) {
                console.log("Failed to get current position " + error)
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
    //Store user location after calling getLocation
    var currentPosition = {
        id: "userPos", options: { draggable: false }, coords: {}
    };
    //Callback for getCurrent position, stores user location in currentPosition, 
    //sets map center on user location, gives user marker a custom icon and user's lat and lng.
    function showPosition(position) {
        currentPosition.coords.latitude = position.coords.latitude;
        currentPosition.coords.longitude = position.coords.longitude;
        $scope.map = { center: { latitude: position.coords.latitude, longitude: position.coords.longitude }, zoom: 10 };
        markers[0] = {
            latitude: currentPosition.coords.latitude,
            longitude: currentPosition.coords.longitude,
            id: currentPosition.id,
            icon: {
                url: '../../images/google-maps-hi.png',
                scaledSize: new google.maps.Size(25, 40),
            },
            zindex: 1
        }
    }
    //initialises map
    $scope.map = {
        center: {
            latitude: 42.6641409,
            longitude: 23.2879827
        },
        zoom: 10,
        bounds: {
            northeast: {
                latitude: 42.6643616,
                longitude: 23.2883011
            },
            southwest: {
                latitude: 42.6639396,
                longitude: 23.2877111
            }
        }
    }

    //Initialise markers storage array with an empty position for user marker, later populated by get getLocation.
    var markers = [{},];

    // function to create markers.
    var createMarker = function (obj, index) {
        var mark = {
            latitude: obj.geometry.location.lat,
            longitude: obj.geometry.location.lng,
            id: index,
            description: obj.description,
            tittle: obj.name,
        };
        console.log("vikam te");
        mark.content = '<div class="infoWindowContent">' + obj.description + '</div>';
        return mark;
    };
    //get the user location and set it as first marker 
    getLocation();

    //set initial markers on map
    $scope.mapMarkers = markers;
    // sends search request to backend from input, receives an array of objects, 
    // empties markers array, sets user as initial marker and uses 
    // createmarker to populate from result array.
    $scope.searchMe = function () {
        var data = { value: $scope.searchResult };
        console.log(data);
        userService.postReq('http://localhost:3000/businesses', 'POST', data).then(function (data) {
            console.log(data);
            markers = [];
            markers[0] = {
                latitude: currentPosition.coords.latitude,
                longitude: currentPosition.coords.longitude,
                id: currentPosition.id,
                icon: {
                    url: '../../images/google-maps-hi.png',
                    scaledSize: new google.maps.Size(25, 40),
                },
            };

            // var infoWindow = new google.maps.InfoWindow();

            //Put all search result and user location on the map
            for (var index = 0; index <= data.data.length - 1; index++) {
                markers.push(createMarker(data.data[index], index));
                // google.maps.event.addListener(markers[index + 1], 'click', function () {
                //     infoWindow.close();
                //     infoWindow.setContent('<h2>' + markers[index + 1] + '</h2>' + markers[index + 1]);
                //     infoWindow.open($scope.map, markers[index + 1]);
                // })
            }

            $scope.mapMarkers = markers;

            $scope.openInfoWindow = function (e, selectedMarker) {
                e.preventDefault();
                google.maps.event.trigger(selectedMarker, 'click');
            }
        });
    }
});