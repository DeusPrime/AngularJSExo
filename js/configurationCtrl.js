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

        localStorage.setItem("lon", city.centre.coordinates[0])
        localStorage.setItem("lat", city.centre.coordinates[1])

        console.log(localStorage.getItem("lon"));
        console.log(localStorage.getItem("lat"));

        $location.path("/carte/");
    }
});