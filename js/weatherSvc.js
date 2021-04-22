app.service("weather", function() {

    $scope.searchCity = function (city) {

        $http({
            method: "GET",
            url: "https://geo.api.gouv.fr/communes?nom=Canet&fields=departement,centre,contour",
            params: {
                nom: city,
                fields: "departement,centre,contour"
            }
        })

            // $http.get("http://api.frankfurter.app/latest?from=EUR&to=USD")
            .then(function (response) {
                console.log(response);
                return response.data
            })
            .catch(function (error) {
                console.log(error);
            })
    };

});
