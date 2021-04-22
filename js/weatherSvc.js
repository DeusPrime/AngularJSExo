app.service("weather", function ($http) {

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

    this.getWeatherNow = function(city) {

        return $http({
            method: "GET",
            url: "https://api.openweathermap.org/data/2.5/onecall",
            params: {
                lat: city.center.coordinates[0],
                lon: city.center.coordinates[1],
                appid: "042e9fc5432b7cbdb377c279da0f0356"
            }
        })
            .then(function (response) {
                console.log(response)
                return response.data;
            })
            .catch(function (error) {
                console.log(error);
            });
    };
});
