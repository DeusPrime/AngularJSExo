app.service("weather", function ($http) {

    this.searchCityByName = function(cityName) {

        return $http({
            method: "GET",
            url: "https://geo.api.gouv.fr/communes",
            params: {
                nom: cityName,
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

    this.searchCityByLocation = function(lon, lat) {

        return $http({
            method: "GET",
            url: "https://geo.api.gouv.fr/communes",
            params: {
                lon: lon,
                lat: lat,
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
                lat: city.centre.coordinates[1],
                lon: city.centre.coordinates[0],
                units: "metric",
                lang: "fr",
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

    this.getIcon = function(id){

        return $http.get(`http://openweathermap.org/img/wn/${id}@2x.png`)
            .then(function (response) {
                console.log(response)
                return response.data;
            })
            .catch(function (error) {
                console.log(error);
            });

    }
});
