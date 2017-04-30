app.controller('map', function ($scope) {
    // uiGmapIsReady
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

    var currentPosition = {
        id: "userPos", options: { draggable: false }, coords: {}
    };

    function showPosition(position) {
        currentPosition.coords.latitude = position.coords.latitude;
        currentPosition.coords.longitude = position.coords.longitude;
        $scope.map = { center: { latitude: position.coords.latitude, longitude: position.coords.longitude }, zoom: 10 };
        markers[0] = {
            latitude: currentPosition.coords.latitude,
            longitude: currentPosition.coords.longitude,
            id: currentPosition.id
        };
    }

    // uiGmapGoogleMapApi.then(function (maps) {
    //     $scope.googlemap = {};
    //     $scope.map = {
    //         center: {
    //             latitude: 42.6641409,
    //             longitude: 23.2879827
    //         },
    //         zoom: 14,
    //         pan: 1,
    //         options: $scope.mapOptions,
    //         control: {},
    //         events: {
    //             tilesloaded: function (maps, eventName, args) { },
    //             dragend: function (maps, eventName, args) { },
    //             zoom_changed: function (maps, eventName, args) { }
    //         },
    //         bounds: {
    //             northeast: {
    //                 latitude: 42.6643616,
    //                 longitude: 23.2883011
    //             },
    //             southwest: {
    //                 latitude: 42.6639396,
    //                 longitude: 23.2877111
    //             }

    //         }
    //     };
    // });
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

    //     },

    //     // window: {
    //     //     model: {},
    //     //     show: false,
    //     //     options: {
    //     //         pixelOffset: { width: -1, height: -20 }
    //     //     }
    //     // },
    //     // markersEvents: {
    //     //     click: function(marker, eventName, model, args) {
    //     //         $scope.map.window.model = model;
    //     //         $scope.map.window.show = true;

    //     //     }
    //     // }
    // }
    var markers = [{},];
    var masiv = [
        {
            "_id": {
                "$oid": "59046b9ee776003ccbdcee79"
            },
            "name": "Thin Red Line",
            "address": "ul. Parteniy Nishavski 10, 1303 Sofia, Bulgaria",
            "geometry": {
                "location": {
                    "lat": 42.69711909999999,
                    "lng": 23.3047204
                },
                "location_type": "ROOFTOP",
                "viewport": {
                    "northeast": {
                        "lat": 42.6984680802915,
                        "lng": 23.3060693802915
                    },
                    "southwest": {
                        "lat": 42.6957701197085,
                        "lng": 23.3033714197085
                    }
                }
            },
            "phone": "+359 88 519 3362",
            "image": "https://lh6.googleusercontent.com/-Jk1axzpLwaM/WOpTUAec3ZI/AAAAAAAAiL8/svFlvh5g43w5nxaWVFnZMERfzR9Iz-RyACLIB/w408-h306-k-no/",
            "description": "Един от най-добрите рок-барове в София"
        },
        {
            "_id": {
                "$oid": "59046bafe776003ccbdcee7d"
            },
            "name": "Soundwave",
            "address": "bul. Akad. Boris Stefanov 4, 1700 Sofia, Bulgaria",
            "geometry": {
                "location": {
                    "lat": 42.6530559,
                    "lng": 23.3422976
                },
                "location_type": "ROOFTOP",
                "viewport": {
                    "northeast": {
                        "lat": 42.6544048802915,
                        "lng": 23.34364658029151
                    },
                    "southwest": {
                        "lat": 42.6517069197085,
                        "lng": 23.3409486197085
                    }
                }
            },
            "phone": "+359 88 709 8164",
            "image": "https://geo3.ggpht.com/cbk?panoid=6ohmxDMpahoAAAQzzEc_NQ&output=thumbnail&cb_client=search.TACTILE.gps&thumb=2&w=408&h=200&yaw=92.69544&pitch=15&thumbfov=100",
            "description": "Музикален клуб Sound Wave (ex-Toucan) \u2013 място с характер и история, в което ще се почувствате като у дома си. Музика на живо с най-добрите БГ групи и незабравими Караоке вечери."
        }
    ];

    var createMarker = function (obj, index) {
        var mark = {
            latitude: obj.geometry.location.lat,
            longitude: obj.geometry.location.lng,
            id: index,
            description: obj.description
        };
        return mark;
    };
    getLocation();

    for (var index = 0; index <= masiv.length - 1; index++) {
        markers.push(createMarker(masiv[index], index))
    }

    $scope.mapMarkers = markers;
    // $scope.windowOptions = {
    //     show: false
    // };

    // $scope.onClick = function (description) {
    //     $scope.windowOptions.show = !$scope.windowOptions.show;
    //     console.log('$scope.windowOptions.show: ', $scope.windowOptions.show);
    //     console.log('This is a ' + description);
    //     //alert('This is a ' + data);
    // };
    // $scope.closeClick = function () {
    //     $scope.windowOptions.show = false;
    // };
    // $scope.title = "Window Title!";

    // uiGmapIsReady.promise() // if no value is put in promise() it defaults to promise(1)
    //     .then(function (instances) {
    //         console.log(instances[0].map); // get the current map
    //     })
    //     .then(function () {
    //         $scope.addMarkerClickFunction($scope.markers);
    //     });

    // $scope.addMarkerClickFunction = function (markers) {
    //     angular.forEach(markers, function (value, key) {
    //         value.onClick = function () {
    //             $scope.onClick(value.data);
    //             $scope.MapOptions.markers.selected = value;
    //         };
    //     });
    // };
    // $scope.MapOptions = {
    //     minZoom: 3,
    //     zoomControl: false,
    //     draggable: true,
    //     navigationControl: false,
    //     mapTypeControl: false,
    //     scaleControl: false,
    //     streetViewControl: false,
    //     disableDoubleClickZoom: false,
    //     keyboardShortcuts: true,
    //     markers: {
    //         selected: {}
    //     },
    //     styles: [{
    //         featureType: "poi",
    //         elementType: "labels",
    //         stylers: [{
    //             visibility: "off"
    //         }]
    //     }, {
    //         featureType: "transit",
    //         elementType: "all",
    //         stylers: [{
    //             visibility: "off"
    //         }]
    //     }],
    // };
});