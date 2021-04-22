app.controller("meteoCtrl", function ($scope, weather) {
    $scope.title = "Météo";

    let city = JSON.parse(localStorage.getItem("city"))

    $scope.ville = city.nom;
    $scope.meteo = false;
    $scope.icon = false;
    $scope.temperature = false

    $scope.getMeteo = function () {



        if (!city) {
            $location.path("/configuration/");
        } else {
            weather.getWeatherNow(city)
                .then(function (response) {
                    $scope.meteo = response.current.weather[0].description
                    $scope.icon = response.current.weather[0].icon
                    $scope.temperature = response.current.temp
                    // console.log(response)
                    console.log(response)
                });
        }
    }

    $scope.getMeteo()


});