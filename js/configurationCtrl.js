app.controller("configurationCtrl", function($scope, $location, $routeParams, weather) {
    $scope.title = "Configuration";
    $scope.cities = false;

    $scope.searchCity = function(city) {
        weather.searchCity(city)
        .then(function (response) {
            // console.log(response)
            $scope.cities = response
            console.log( $scope.cities)
        })
        
    }

    $scope.saveCity = function(city){

        localStorage.setItem("city", JSON.stringify(city))

        $location.path("/carte/");
    }

    $scope.geolocMe = function(){

        navigator.geolocation.getCurrentPosition(function(position) {
            let city = {nom: "", centre: {coordinates: [position.coords.longitude, position.coords.latitude]}, contour: {coordinates: [[]]}};
            localStorage.setItem("city", JSON.stringify(city))
          });

          $location.path("/carte/");
    }
});