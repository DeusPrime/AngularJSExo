app.controller("configurationCtrl", function($scope, $location, $routeParams, weather) {
    $scope.title = "Configuration";
    $scope.cities = false;

    $scope.searchCity = function(city) {
        weather.searchCityByName(city)
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

            weather.searchCityByLocation(position.coords.longitude, position.coords.latitude)
            .then(function (response) {
                // console.log(response)
                localStorage.setItem("city", JSON.stringify(response[0]))
                $location.path("/carte/");
            })
          });

          
    }
});