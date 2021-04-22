app.controller("configurationCtrl", function($scope, $routeParams, weather) {
    $scope.title = "Configuration";
    $scope.cities = false;

    $scope.searchCity = function(city) {
        console.log(city);
        $scope.cities = weather.searchCity(city)
    }


});