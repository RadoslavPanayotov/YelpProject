app.controller('map', function ($scope, userService, $rootScope, $window, $location) {
  var logedUser = $window.sessionStorage.getItem('userId')

  if (logedUser != undefined) {
    $rootScope.showLogin = false
    $rootScope.showSignUp = false
    $rootScope.showLogout = true
  }
  $scope.businesses = []
  $scope.showResults = true
  $scope.reviewShow = false
  $scope.reviewWrite = function (index) {
    $rootScope.clickedItem = $scope.businesses[index]

    console.log($rootScope.clickedItem)
    if (logedUser != undefined) {
      $rootScope.clickedItem = $scope.businesses[index];
      console.log($rootScope.clickedItem);
      $location.path('/reviews');
    } else {
      alert('You have to be logged in!')
    }
  }

  $scope.addItem = function () {
    $scope.items.push($scope.item)
    $scope.item = {}
  }
  $scope.removeItem = function (index) {
    $scope.items.splice(index, 1)
  }
  // function to find the users lat and lng coordinates
  getLocation()
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, function (error) {
        console.log('Failed to get current position ' + error)
      }
        , {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0
        })
    } else {
      console.log('Geolocation is not supported by this browser.')
    }
  }
  // Store user location after calling getLocation
  var currentPosition = {
    id: 'userPos', options: { draggable: false }, coords: {}
  }
  // Callback for getCurrent position, stores user location in currentPosition, 
  // sets map center on user location, gives user marker a custom icon and user's lat and lng.
  function showPosition(position) {
    currentPosition.coords.latitude = position.coords.latitude
    currentPosition.coords.longitude = position.coords.longitude
    $scope.map = { center: { latitude: position.coords.latitude, longitude: position.coords.longitude }, zoom: 10 }
    markers[0] = {
      latitude: currentPosition.coords.latitude,
      longitude: currentPosition.coords.longitude,
      id: currentPosition.id,
      icon: {
        url: '../../images/google-maps-hi.png',
        scaledSize: new google.maps.Size(25, 40)
      },
      zindex: 1
    }
  }
  // initialises map
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

  // Initialise markers storage array with an empty position for user marker, later populated by get getLocation.
  var markers = [{
    latitude: 42.6641409,
    longitude: 23.2879827,
    id: 'id',
    icon: {
      url: '../../images/google-maps-hi.png',
      scaledSize: new google.maps.Size(25, 40)
    }
  }]

  // function to create markers.
  var createMarker = function (obj, index) {
    var mark = {
      latitude: obj.geometry.location.lat,
      longitude: obj.geometry.location.lng,
      id: index,
      description: obj.description,
      tittle: obj.name,
      image: obj.image,
      rate: obj.rate || null
    }
    console.log('vikam te')
    mark.content = '<div class="infoWindowContent">' + obj.description + '</div>'
    return mark
  }
  // get the user location and set it as first marker 
  getLocation()

  // set initial markers on map
  $scope.mapMarkers = markers

  // sends search request to backend from input, receives an array of objects, 
  $scope.searchMe = function () {
    var data = { value: $scope.searchResult }
    if ($scope.checkRestaurant && (!$scope.checkShop) && (!$scope.checkEntertainment)) {
      userService.postReq('http://localhost:3000/businesses/restaurants', 'POST', data).then(fillMapWithNewMarkers)
    }
    if ((!$scope.checkRestaurant) && $scope.checkShop && (!$scope.checkEntertainment)) {
      userService.postReq('http://localhost:3000/businesses/shopping', 'POST', data).then(fillMapWithNewMarkers)
    }
    if ($scope.checkEntertainment && (!$scope.checkShop) && (!$scope.checkRestaurant)) {
      userService.postReq('http://localhost:3000/businesses/entertainment', 'POST', data).then(fillMapWithNewMarkers)
    }
    if ($scope.checkEntertainment && $scope.checkShop && (!$scope.checkRestaurant)) {
      userService.postReq('http://localhost:3000/businesses/shop&enter', 'POST', data).then(fillMapWithNewMarkers)
    }
    if ($scope.checkEntertainment && (!$scope.checkShop) && $scope.checkRestaurant) {
      userService.postReq('http://localhost:3000/businesses/rest&enter', 'POST', data).then(fillMapWithNewMarkers)
    }
    if ((!$scope.checkEntertainment) && $scope.checkShop && $scope.checkRestaurant) {
      userService.postReq('http://localhost:3000/businesses/rest&shop', 'POST', data).then(fillMapWithNewMarkers)
    }
    if (($scope.checkRestaurant && $scope.checkShop && $scope.checkEntertainment) || (!$scope.checkRestaurant && !$scope.checkShop && !$scope.checkEntertainment)) {
      userService.postReq('http://localhost:3000/businesses', 'POST', data).then(fillMapWithNewMarkers)
    }
  }

  // Empties markers array, sets user location as initial marker and uses 
  // createmarker to populate from result array from a request
  var fillMapWithNewMarkers = function (data) {
    console.log(data)
    markers = []
    markers[0] = {
      latitude: currentPosition.coords.latitude,
      longitude: currentPosition.coords.longitude,
      id: currentPosition.id,
      icon: {
        url: '../../images/google-maps-hi.png',
        scaledSize: new google.maps.Size(25, 40)
      }
    }

    // Put all search result and user location on the map
    for (var index = 0; index <= data.data.length - 1; index++) {
      markers.push(createMarker(data.data[index], index))
    }

    // Reset markers on map
    $scope.mapMarkers = markers


    for (var index = 0; index <= data.data.length - 1; index++) {
      $scope.businesses.push(data.data[index])
      $scope.businesses[index].id = index
    }
    $scope.removeItem = function (index) {
      $scope.businesses.splice(index, 1)
    }
    $scope.showResults = true
  }
})
