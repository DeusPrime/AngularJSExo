app.controller("carteCtrl", function ($scope, $location) {
    $scope.title = "Carte";

    let city = JSON.parse(localStorage.getItem("city"))

    if (!city) {
        $location.path("/configuration/");
    }else{
        console.log(city);

        let map = L.map('mapid').setView([city.centre.coordinates[1], city.centre.coordinates[0]], 13);
    
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
    
        if (city.nom != ""){
        L.marker([city.centre.coordinates[1], city.centre.coordinates[0]]).addTo(map)
            .bindPopup(city.nom)
            .openPopup();
        }else{
            L.marker([city.centre.coordinates[1], city.centre.coordinates[0]]).addTo(map)
        }
        
    
        var contour = []
        city.contour.coordinates[0].forEach(element => {
            contour.push([element[1], element[0]])
        });
    
        var polygon = L.polygon(contour).addTo(map);
    };

    
});