app.controller("meteoCtrl", function($scope, weather) {
    $scope.title = "Météo";

    $scope.getMeteo = function() {

        let city = JSON.parse(localStorage.getItem("city"))

        if (!city) {
            $location.path("/configuration/");
        }else{
            weather.getWeatherNow(city)
            .then(function (response) {
                // console.log(response)
                console.log( response)
            });
        }
    }


});