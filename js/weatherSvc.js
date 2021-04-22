app.service("weather", function($http) {

    this.searchCity = function(city) {

        return $http({
            method: "GET",
            url: "https://geo.api.gouv.fr/communes",
            params: {
                nom: city,
                fields: "departement,centre,contour"
            }
        })
            .then(function (response) {
                return response.data;
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    this.getWeather = function() {

        return $http({
            method: "GET",
            url: "https://api.openweathermap.org/data/2.5/onecall?lat=43.6167&lon=3.4333&appid={appid}",
            params: {
                lat: localStorage.getItem("lat"),
                lon: localStorage.getItem("lon"),
                appid: "042e9fc5432b7cbdb377c279da0f0356"
            }
        })
            .then(function (response) {
                return response.data;
            })
            .catch(function (error) {
                console.log(error);
            });
    };

});
