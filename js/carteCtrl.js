app.controller("carteCtrl", function($scope, $routeParams) {
    $scope.title = "Carte";

    let map = L.map('mapid').setView([localStorage.getItem("lat"), localStorage.getItem("lon")], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    
    L.marker([localStorage.getItem("lat"), localStorage.getItem("lon")]).addTo(map);
        // .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
        // .openPopup();

});