// Module principal + table de routage
var app = angular.module('app', ["ngRoute"]);

//configuration des routes
app.config(function($routeProvider){
    // si / dans l'url, appel de home.html et controleur homeCtrl
    $routeProvider
    .when("/",{
        templateUrl: "../templates/home.html",
        controller: "homeCtrl"
    })
    .when("/carte",{
        templateUrl: "../templates/carte.html",
        controller: "carteCtrl"
    })
    .when("/meteo",{
        templateUrl: "../templates/meteo.html",
        controller: "meteoCtrl"
    })
    .when("/prevision",{
        templateUrl: "../templates/prevision.html",
        controller: "previsionCtrl"
    })
    .when("/configuration",{
        templateUrl: "../templates/configuration.html",
        controller: "configurationCtrl"
    })
    .when("/credit",{
        templateUrl: "../templates/credit.html",
        controller: "creditCtrl"
    })
    .when("/mentionLegale",{
        templateUrl: "../templates/mentionLegale.html",
        controller: "mentionLegaleCtrl"
    })
    .otherwise({
        redirectTo: "/"
    });

})